import React from 'react';
import { GLOSSARY } from '../data/glossary';

const GlossaryText = ({ children }) => {
  if (typeof children !== 'string') return children;

  const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
  const pattern = `(?<![a-zA-ZÀ-ÿ])(${terms.join('|')})(?![a-zA-ZÀ-ÿ])`;
  const regex = new RegExp(pattern, 'gi');
  const parts = children.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        if (GLOSSARY[lowerPart]) {
          return (
            <span key={i} className="jargon-term" data-definition={GLOSSARY[lowerPart]}>
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export default GlossaryText;