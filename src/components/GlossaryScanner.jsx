import React, { useEffect } from 'react';
import { GLOSSARY } from '../data/glossary';

const GlossaryScanner = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const content = document.querySelector('main');
      if (!content) return;

      // 1. On trie les mots du plus long au plus court 
      // (Pour éviter que "pâte" soit pris à la place de "pâte à choux")
      const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
      
      const walk = document.createNodeIterator(content, NodeFilter.SHOW_TEXT, null, false);
      let node;
      const nodesToReplace = [];

      while (node = walk.nextNode()) {
        const parent = node.parentNode;
        if (['SCRIPT', 'STYLE', 'BUTTON', 'A', 'HEADER', 'H1'].includes(parent.tagName)) continue;
        if (parent.closest('.jargon-term')) continue; // Évite de scanner ce qu'on a déjà traité

        const text = node.nodeValue;
        
        // Nouvelle Regex qui vérifie qu'il n'y a pas de lettre AVANT ou APRÈS le mot
        // On utilise [a-zA-ZÀ-ÿ] pour inclure tous les caractères accentués français
        const regex = new RegExp(`(?<![a-zA-ZÀ-ÿ])(${terms.join('|')})(?![a-zA-ZÀ-ÿ])`, 'gi');

        if (regex.test(text)) {
          nodesToReplace.push(node);
        }
      }

      nodesToReplace.forEach(node => {
        const text = node.nodeValue;
        const termsRegex = new RegExp(`(?<![a-zA-ZÀ-ÿ])(${terms.join('|')})(?![a-zA-ZÀ-ÿ])`, 'gi');
        
        const newHTML = text.replace(termsRegex, (match) => {
          const def = GLOSSARY[match.toLowerCase()];
          return `<span class="jargon-term" data-definition="${def}">${match}</span>`;
        });

        const span = document.createElement('span');
        span.innerHTML = newHTML;
        node.replaceWith(span);
      });
    }, 600); 

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default GlossaryScanner;