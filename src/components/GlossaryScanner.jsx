import React, { useEffect } from 'react';
import { GLOSSARY } from '../data/glossary';

const GlossaryScanner = ({ targetRef, trigger }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!targetRef.current) return;

      const container = targetRef.current;
      const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
      
      const walk = document.createNodeIterator(container, NodeFilter.SHOW_TEXT, null, false);
      let node;
      const nodesToReplace = [];

      while (node = walk.nextNode()) {
        const parent = node.parentNode;
        if (['SCRIPT', 'STYLE', 'BUTTON', 'A', 'HEADER'].includes(parent.tagName)) continue;
        if (parent.closest('.jargon-term')) continue;

        const text = node.nodeValue;
        // Regex avec lookbehind/lookahead pour éviter les mots partiels
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
    }, 500); 

    return () => clearTimeout(timer);
  }, [trigger, targetRef]);

  return null;
};

export default GlossaryScanner;