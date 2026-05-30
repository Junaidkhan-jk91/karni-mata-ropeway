/**
 * @component Gallery
 * Filterable photo gallery with pill tabs, rounded bento grid,
 * hover overlays, and lightbox with backdrop blur.
 * Background: animated rising starfield particles on dark charcoal.
 */

import { useState, useEffect, useCallback } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../constants/data';
import ParticlesBackground from './ParticlesBackground';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';

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
