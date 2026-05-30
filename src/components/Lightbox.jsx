import React from 'react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-charcoal/95 backdrop-blur-lg z-[9999]
                 flex items-center justify-center flex-col p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10
                   flex items-center justify-center text-white text-lg
                   cursor-pointer border-none hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ✕
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl
                   shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      />
      <div className="mt-5 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-copper/20
                        text-copper-light text-[10px] tracking-[1.5px] uppercase font-semibold">
          {image.tag}
        </span>
        <p className="mt-2 text-white/50 text-sm font-light">{image.label}</p>
      </div>
    </div>
  );
}
