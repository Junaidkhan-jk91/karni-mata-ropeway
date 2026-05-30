/**
 * @component Gallery
 * Filterable photo gallery with pill tabs, rounded bento grid,
 * hover overlays, and lightbox with backdrop blur.
 * Background: animated rising starfield particles on dark charcoal.
 */

import { useState, useEffect, useCallback } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../constants/data';
import ParticlesBackground from './ParticlesBackground';

function GalleryItem({ item, onOpen, index }) {
  const { src, alt, tag, label, tall } = item;

  return (
    <div
      className={`relative overflow-hidden cursor-pointer rounded-2xl group
                  bg-stone/30 aspect-[4/3]
                  ${tall ? 'md:row-span-2 md:!aspect-auto' : ''}
                  max-md:!row-span-1 max-md:!aspect-[4/3]`}
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

function Lightbox({ image, onClose }) {
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

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeLightbox]);

  return (
    <>
      <section id="gallery" className="relative py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-charcoal overflow-hidden">
        {/* ── Animated starfield particles ── */}
        <ParticlesBackground preset="gallery" id="gallery-particles" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4" data-aos="fade-down" data-aos-duration="600">
              <span className="w-10 h-px bg-copper-light" />
              <span className="text-[11px] tracking-[3px] uppercase text-copper-light font-semibold">
                Photo gallery
              </span>
              <span className="w-10 h-px bg-copper-light" />
            </div>
            <h2
              className="font-bold text-white leading-[1.15]
                           text-2xl sm:text-3xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              See it{' '}
              <span className="text-copper-light italic font-medium">through our lens</span>
            </h2>
          </div>

          {/* Pill tabs */}
          <div
            className="flex justify-center gap-2 mb-10 flex-wrap"
            role="tablist"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {GALLERY_CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeCategory === key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-[1px]
                           cursor-pointer transition-all duration-300 border
                           ${
                             activeCategory === key
                               ? 'bg-copper border-copper text-white shadow-[0_4px_16px_rgba(184,115,51,0.3)]'
                               : 'bg-transparent border-white/15 text-white/40 hover:border-white/30 hover:text-white/70'
                           }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredItems.map((item, index) => (
              <GalleryItem key={item.src} item={item} onOpen={setLightboxImage} index={index} />
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-white/20 font-light" data-aos="fade" data-aos-delay="400">
            Click any photo to enlarge · Share your visit photos on Google Maps
          </p>
        </div>
      </section>

      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </>
  );
}
