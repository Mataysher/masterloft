import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  image: string;
  onClose: () => void;
}

function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={32} />
      </button>
      <img 
        src={image} 
        alt="Enlarged view" 
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default ImageLightbox;