import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`overflow-hidden bg-[#1a1a1a] ${className}`}>
      <picture>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={(e) => {
            setIsLoaded(true);
            e.target.classList.add('opacity-100');
          }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;