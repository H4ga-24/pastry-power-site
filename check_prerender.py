#!/usr/bin/env python3
"""
check_prerender.py
------------------
Barrière POST-DÉPLOIEMENT. Pour chaque URL du sitemap, vérifie dans le HTML
BRUT (sans JS) : title + meta description + h1 + texte, ET la présence des
liens du footer (mentions légales, confidentialité, contact, à propos).
En plus : contrôle dédié que les 4 pages légales sont bien dans le sitemap
et prérendues (pas des coquilles SPA vides).

⚠  Le footer n'est dans le HTML statique QUE si tu as modifié prerender.mjs
   pour l'injecter. Tant que ce n'est pas fait, la colonne footer sera rouge
   partout — c'est attendu, ce script sert justement à valider ce correctif.

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
    r = {"url": url, "status": None, "title_len": 0, "meta": False,
         "h1": 0, "text": 0, "footer": 0, "severity": "OK", "problems": []}
    try:
        resp = requests.get(url, headers={"User-Agent": UA}, timeout=TIMEOUT)
        r["status"] = resp.status_code
        if resp.status_code != 200:
            r["severity"] = "ROUGE"; r["problems"].append(f"HTTP {resp.status_code}")
            return r
        html = resp.text
        soup = BeautifulSoup(html, "html.parser")

        title = (soup.title.string or "").strip() if soup.title else ""
        r["title_len"] = len(title)
        md = soup.find("meta", attrs={"name": "description"})
        r["meta"] = bool(md and md.get("content", "").strip())
        r["h1"] = len(soup.find_all("h1"))

        # liens footer présents dans le HTML brut ?
        r["footer"] = sum(1 for path in FOOTER_LINKS if f'href="{path}"' in html
                          or f"href='{path}'" in html)

        for t in soup(["script", "style", "noscript"]):
            t.decompose()
        r["text"] = len(" ".join(soup.get_text(" ").split()))

        if r["title_len"] == 0: r["problems"].append("pas de <title>")
        if r["h1"] == 0: r["problems"].append("pas de <h1>")
        if r["text"] < MIN_TEXT: r["problems"].append(f"texte {r['text']} car.")
        if not r["meta"]: r["problems"].append("pas de meta desc")
        if r["footer"] < len(FOOTER_LINKS):
            r["problems"].append(f"footer {r['footer']}/{len(FOOTER_LINKS)} liens")

        hard = r["title_len"] == 0 or r["h1"] == 0 or r["text"] < MIN_TEXT
        soft = (not r["meta"]) or r["footer"] < len(FOOTER_LINKS)
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
          f"🟠 {len(orange)}   🔴 {len(rouge)}")

    with open(args.csv, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["url", "severity", "status", "title_len", "meta",
                    "h1", "text", "footer_links", "problems"])
        for r in results:
            w.writerow([r["url"], r["severity"], r["status"], r["title_len"],
                        r["meta"], r["h1"], r["text"], r["footer"],
                        " | ".join(r["problems"])])
    print(f"📄 {args.csv}")
    sys.exit(1 if rouge else 0)


if __name__ == "__main__":
    main()
