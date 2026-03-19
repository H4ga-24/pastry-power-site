import React from 'react';

const OptimizedImage = ({ src, alt, className }) => {
  return (
    <div className={`overflow-hidden bg-[#1a1a1a] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async" // Aide le navigateur à ne pas bloquer le rendu
        className="w-full h-full object-cover transition-opacity duration-500"
        onLoad={(e) => e.target.classList.add('opacity-100')}
      />
    </div>
  );
};

export default OptimizedImage;