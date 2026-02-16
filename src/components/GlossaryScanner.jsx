import React, { useEffect } from 'react';
import { GLOSSARY } from '../data/glossary';

const GlossaryScanner = () => {
  useEffect(() => {
    // On attend un court instant que React ait fini de dessiner la page
    const timer = setTimeout(() => {
      const content = document.querySelector('main'); // Il scanne tout le contenu principal
      if (!content) return;

      const terms = Object.keys(GLOSSARY);
      
      // Fonction pour scanner les noeuds de texte sans casser le HTML
      const walk = document.createNodeIterator(content, NodeFilter.SHOW_TEXT, null, false);
      let node;
      const nodesToReplace = [];

      while (node = walk.nextNode()) {
        const parent = node.parentNode;
        // On ne touche pas aux textes dans les boutons, liens ou scripts
        if (['SCRIPT', 'STYLE', 'BUTTON', 'A', 'HEADER'].includes(parent.tagName)) continue;
        
        const text = node.nodeValue;
        const regex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

        if (regex.test(text)) {
          nodesToReplace.push(node);
        }
      }

      nodesToReplace.forEach(node => {
        const text = node.nodeValue;
        const termsRegex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');
        
        const newHTML = text.replace(termsRegex, (match) => {
          const def = GLOSSARY[match.toLowerCase()];
          return `<span class="jargon-term" data-definition="${def}">${match}</span>`;
        });

        const span = document.createElement('span');
        span.innerHTML = newHTML;
        node.replaceWith(span);
      });
    }, 500); // Délai de 500ms pour être sûr que la page est chargée

    return () => clearTimeout(timer);
  }, []);

  return null; // Ce composant est invisible
};

export default GlossaryScanner;