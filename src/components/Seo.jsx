import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../data/hubs';

/**
 * Balises <head> d'une page : titre, description, URL canonique, Open Graph.
 * À poser sur chaque page indexable — le HTML prérendu contient les mêmes balises
 * (marquées data-rh) et Helmet prend le relais dès que React démarre.
 */
export default function Seo({ title, description, path, noindex = false, image, type = 'website', children }) {
  const url = path ? `${SITE_URL}${path === '/' ? '/' : path}` : null;
  const desc = description ? String(description).replace(/\s+/g, ' ').trim().slice(0, 300) : null;
  const absoluteImage = image && image.startsWith('/') ? `${SITE_URL}${image}` : image;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {desc && <meta name="description" content={desc} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
      {url && !noindex && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content="Pastry Power" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {desc && <meta property="og:description" content={desc} />}
      {url && <meta property="og:url" content={url} />}
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}
      {children}
    </Helmet>
  );
}
