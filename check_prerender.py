#!/usr/bin/env python3
"""
check_prerender.py
------------------
Contrôle APRÈS DÉPLOIEMENT, à lancer avant chaque nouvelle demande AdSense.

Pour chaque URL du sitemap, dans le HTML BRUT (sans JavaScript, comme un robot) :
  - title + meta description + h1 + assez de texte
  - URL canonique identique à l'adresse de la page (pas de doublon de l'accueil)
  - pas de balise noindex
  - liens du pied de page (mentions légales, confidentialité, contact, à propos)

Puis des contrôles globaux :
  - aucun titre en double sur le site
  - une adresse inexistante répond bien 404 (pas de « fausse page »)
  - les fiches technologie sont dans le sitemap, les rubriques vides n'y sont pas
  - ads.txt et robots.txt sont en place

    pip install requests beautifulsoup4
    python check_prerender.py
    python check_prerender.py --sitemap https://pastrypower.fr/sitemap.xml

Sortie : 0 si tout est vert, 1 s'il reste du rouge.
"""

import argparse
import csv
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse
from xml.etree import ElementTree as ET

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("✗ Lance d'abord :  pip install requests beautifulsoup4")
    sys.exit(2)

UA = "PastryPowerPrerenderCheck/1.0"
TIMEOUT = 15
MIN_TEXT = 250
MIN_WORDS_RECIPE = 150   # en dessous, une fiche recette est jugée trop courte
PUBLISHER_ID = "pub-4373695426341440"
EMPTY_SECTIONS = ["/alternative/sans-sucre", "/alternative/vegan", "/alternative/sans-lactose",
                  "/alternative/vegetal", "/cuisine/traiteur"]

# liens attendus dans le footer (chemins, pas URLs complètes)
FOOTER_LINKS = ["/mentions-legales", "/politique-confidentialite",
                "/contact", "/a-propos"]


def get_sitemap_urls(sitemap_url):
    r = requests.get(sitemap_url, headers={"User-Agent": UA}, timeout=TIMEOUT)
    r.raise_for_status()
    root = ET.fromstring(r.content)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    locs = [l.text.strip() for l in root.findall(".//sm:loc", ns) if l.text]
    if not locs:
        locs = [l.text.strip() for l in root.findall(".//loc") if l.text]
    return locs


def audit(url):
    r = {"url": url, "status": None, "title": "", "title_len": 0, "meta": False,
         "h1": 0, "text": 0, "words": 0, "canonical": "", "footer": 0,
         "severity": "OK", "problems": []}
    try:
        resp = requests.get(url, headers={"User-Agent": UA}, timeout=TIMEOUT)
        r["status"] = resp.status_code
        if resp.status_code != 200:
            r["severity"] = "ROUGE"; r["problems"].append(f"HTTP {resp.status_code}")
            return r
        html = resp.text
        soup = BeautifulSoup(html, "html.parser")

        title = (soup.title.string or "").strip() if soup.title else ""
        r["title"] = title
        r["title_len"] = len(title)
        canon = soup.find("link", attrs={"rel": "canonical"})
        r["canonical"] = (canon.get("href", "") if canon else "").strip()
        robots = soup.find("meta", attrs={"name": "robots"})
        noindex = bool(robots and "noindex" in robots.get("content", "").lower())
        md = soup.find("meta", attrs={"name": "description"})
        r["meta"] = bool(md and md.get("content", "").strip())
        r["h1"] = len(soup.find_all("h1"))

        # liens footer présents dans le HTML brut ?
        r["footer"] = sum(1 for path in FOOTER_LINKS if f'href="{path}"' in html
                          or f"href='{path}'" in html)

        for t in soup(["script", "style", "noscript"]):
            t.decompose()
        clean_text = " ".join(soup.get_text(" ").split())
        r["text"] = len(clean_text)
        r["words"] = len(clean_text.split())

        if r["title_len"] == 0: r["problems"].append("pas de <title>")
        if r["h1"] == 0: r["problems"].append("pas de <h1>")
        if r["text"] < MIN_TEXT: r["problems"].append(f"texte {r['text']} car.")
        if not r["meta"]: r["problems"].append("pas de meta desc")
        if r["footer"] < len(FOOTER_LINKS):
            r["problems"].append(f"footer {r['footer']}/{len(FOOTER_LINKS)} liens")

        same = urlparse(r["canonical"]).path.rstrip("/") == urlparse(url).path.rstrip("/")
        if not r["canonical"]: r["problems"].append("pas d'URL canonique")
        elif not same: r["problems"].append(f"canonique ≠ page ({r['canonical']})")
        if noindex: r["problems"].append("page en noindex dans le sitemap")
        short_recipe = ("/recipe/" in url and "pp-paywall" not in html
                        and r["words"] < MIN_WORDS_RECIPE)
        if short_recipe: r["problems"].append(f"fiche courte ({r['words']} mots)")

        hard = (r["title_len"] == 0 or r["h1"] == 0 or r["text"] < MIN_TEXT
                or not same or noindex)
        soft = (not r["meta"]) or r["footer"] < len(FOOTER_LINKS) or short_recipe
        r["severity"] = "ROUGE" if hard else ("ORANGE" if soft else "OK")
    except Exception as e:
        r["severity"] = "ROUGE"; r["problems"].append(f"{e.__class__.__name__}: {e}")
    return r


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sitemap", default="https://pastrypower.fr/sitemap.xml")
    ap.add_argument("--workers", type=int, default=10)
    ap.add_argument("--csv", default="check_prerender.csv")
    args = ap.parse_args()

    print(f"→ Sitemap : {args.sitemap}")
    try:
        urls = get_sitemap_urls(args.sitemap)
    except Exception as e:
        print(f"✗ Sitemap illisible : {e}"); sys.exit(2)
    print(f"→ {len(urls)} URLs\n")

    origin = f"{urlparse(urls[0]).scheme}://{urlparse(urls[0]).netloc}" if urls else ""

    results, t0 = [], time.time()
    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        futs = [ex.submit(audit, u) for u in urls]
        for i, f in enumerate(as_completed(futs), 1):
            results.append(f.result())
            print(f"\r  {i}/{len(urls)}", end="", flush=True)
    print(f"   ({time.time()-t0:.1f}s)")

    rouge = [r for r in results if r["severity"] == "ROUGE"]
    orange = [r for r in results if r["severity"] == "ORANGE"]

    for label, bucket in (("🔴 ROUGE", rouge), ("🟠 ORANGE", orange)):
        if bucket:
            print(f"\n{label} ({len(bucket)}) :")
            for r in sorted(bucket, key=lambda x: x["url"])[:40]:
                print(f"  {r['url']}\n      → {', '.join(r['problems'])}")

    # --- titres en double ---
    by_title = {}
    for r in results:
        if r["title"]:
            by_title.setdefault(r["title"], []).append(r["url"])
    doubles = {t: u for t, u in by_title.items() if len(u) > 1}
    if doubles:
        print(f"\n🔴 TITRES EN DOUBLE ({len(doubles)}) :")
        for t, u in list(doubles.items())[:20]:
            print(f"  « {t} » → {len(u)} pages, ex. {u[0]} et {u[1]}")

    # --- contrôles globaux ---
    print("\n" + "=" * 55 + "\nCONTRÔLES GLOBAUX\n" + "=" * 55)
    global_errors = len(doubles)

    def check(label, ok, detail=""):
        nonlocal global_errors
        if not ok:
            global_errors += 1
        print(f"  {'✓' if ok else '✗'} {label}{' — ' + detail if detail else ''}")

    def fetch(path):
        try:
            return requests.get(origin + path, headers={"User-Agent": UA}, timeout=TIMEOUT)
        except Exception:
            return None

    if origin:
        missing = fetch("/cette-page-nexiste-pas-" + str(int(time.time())))
        check("Une adresse inexistante répond 404", bool(missing is not None and missing.status_code == 404),
              f"HTTP {missing.status_code}" if missing is not None else "pas de réponse")
        bad_recipe = fetch("/recipe/recette-qui-nexiste-pas")
        check("Une recette inexistante répond 404", bool(bad_recipe is not None and bad_recipe.status_code == 404),
              f"HTTP {bad_recipe.status_code}" if bad_recipe is not None else "pas de réponse")
        ads = fetch("/ads.txt")
        check("ads.txt en place", bool(ads is not None and ads.status_code == 200 and PUBLISHER_ID in ads.text))
        robots = fetch("/robots.txt")
        check("robots.txt déclare le sitemap", bool(robots is not None and "sitemap" in robots.text.lower()))
    tech = [u for u in urls if "/techno/" in u]
    check("Fiches technologie dans le sitemap", len(tech) >= 15, f"{len(tech)} fiches")
    empties = [p for p in EMPTY_SECTIONS if any(urlparse(u).path.rstrip("/") == p for u in urls)]
    check("Aucune rubrique vide dans le sitemap", not empties, ", ".join(empties))
    check("Aucun titre en double", not doubles, f"{len(doubles)} doublon(s)" if doubles else "")

    # --- contrôle dédié des 4 pages légales ---
    print("\n" + "=" * 55 + "\nPAGES LÉGALES\n" + "=" * 55)
    sitemap_paths = {urlparse(u).path.rstrip("/") for u in urls}
    for path in FOOTER_LINKS:
        in_sitemap = path in sitemap_paths
        rendered = "?"
        if origin:
            rr = audit(origin + path)
            rendered = "prérendue" if rr["severity"] != "ROUGE" else "COQUILLE/erreur"
        sm = "✓ sitemap" if in_sitemap else "✗ absente du sitemap"
        print(f"  {path:<28} {sm:<24} {rendered}")

    print("\n" + "=" * 55)
    print(f"✅ OK {len([r for r in results if r['severity']=='OK'])}   "
          f"🟠 {len(orange)}   🔴 {len(rouge)}   contrôles globaux en échec : {global_errors}")

    with open(args.csv, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["url", "severity", "status", "title_len", "meta",
                    "h1", "text", "words", "canonical", "footer_links", "problems"])
        for r in results:
            w.writerow([r["url"], r["severity"], r["status"], r["title_len"],
                        r["meta"], r["h1"], r["text"], r["words"], r["canonical"], r["footer"],
                        " | ".join(r["problems"])])
    print(f"📄 {args.csv}")
    sys.exit(1 if (rouge or global_errors) else 0)


if __name__ == "__main__":
    main()
