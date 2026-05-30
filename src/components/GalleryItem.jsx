import React from 'react';

export default function GalleryItem({ item, onOpen, index }) {
  const { src, alt, tag, label } = item;

  return (
    <div
      className="relative overflow-hidden cursor-pointer rounded-2xl group
                 bg-stone/30 aspect-[4/3]"
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${label}`}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}
      data-aos="zoom-in"
      data-aos-delay={index * 80}
      data-aos-duration="600"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover
                   transition-transform duration-700 ease-out
                   group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex items-end p-5">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-copper/80 text-white
                          text-[10px] tracking-[1.5px] uppercase font-semibold mb-2">
            {tag}
          </span>
          <p className="text-white text-sm font-light leading-snug">{label}</p>
        </div>
      </div>
    </div>
  );
}
