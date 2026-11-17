// Rendu serveur d'un composant React en HTML statique (utilisé uniquement au build par prerender.mjs).
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

// Helmet renvoie du texte déjà échappé pour le HTML : on le remet en clair.
const decode = (text) =>
  String(text)
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

export function renderComponent(Component, url) {
  const helmetContext = {};
  const html = renderToStaticMarkup(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Component />
      </StaticRouter>
    </HelmetProvider>,
  );
  const helmet = helmetContext.helmet;
  const titleTag = helmet?.title?.toString() || '';
  const metaTags = helmet?.meta?.toString() || '';
  const title = (titleTag.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] || '';
  const description = (metaTags.match(/name="description" content="([^"]*)"/) || [])[1] || '';
  return { html, title: decode(title), description: decode(description) };
}
