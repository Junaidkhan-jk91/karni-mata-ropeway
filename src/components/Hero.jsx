/**
 * @component Hero
 * Full-viewport hero with dark background, animated particle network,
 * centered Poppins typography, and subtle grid pattern.
 */

import ParticlesBackground from './ParticlesBackground';
import ropewayScenic from '../assets/ropeway_scenic.png';

export default function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden flex items-center justify-center bg-stone-950">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 30%, #3A2F28 60%, #1C1C1C 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] mix-blend-luminosity"
        style={{
          backgroundImage: `url(${ropewayScenic})`,
        }}
        aria-hidden="true"
      />

      <ParticlesBackground preset="hero" id="hero-particles" />
      {/* SVG Steel Cable Wire */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <line x1="-10%" y1="70%" x2="110%" y2="25%" stroke="#ffffff" strokeWidth="1.2" />
      </svg>

      {/* Ascending Gondola (Copper Colored) */}
      <div className="hero-gondola-ascend z-0">
        <svg width="40" height="44" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-copper drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          <path d="M 24 6 L 24 22 C 24 24, 22 26, 20 26 L 14 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="6" r="3" fill="#1c1917" />
          <circle cx="28" cy="6" r="3" fill="#1c1917" />
          <rect x="6" y="26" width="28" height="22" rx="5" fill="currentColor" />
          <rect x="10" y="29" width="20" height="9" rx="2" fill="#f5f5f4" opacity="0.9" />
          <line x1="20" y1="29" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Descending Gondola (Sage Colored) */}
      <div className="hero-gondola-descend z-0">
        <svg width="40" height="44" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sage-light drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          <path d="M 24 6 L 24 22 C 24 24, 22 26, 20 26 L 14 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="6" r="3" fill="#1c1917" />
          <circle cx="28" cy="6" r="3" fill="#1c1917" />
          <rect x="6" y="26" width="28" height="22" rx="5" fill="currentColor" />
          <rect x="10" y="29" width="20" height="9" rx="2" fill="#f5f5f4" opacity="0.9" />
          <line x1="20" y1="29" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-36 sm:pt-40 pb-12 md:pt-40 md:pb-0">
        <div className="inline-flex items-center gap-3 mb-8" data-aos="fade-down" data-aos-delay="200">
          <span className="w-8 h-px bg-copper-light" />
          <span className="text-copper-light text-[11px] tracking-[4px] uppercase font-medium">
            Rajasthan&rsquo;s first ropeway
          </span>
          <span className="w-8 h-px bg-copper-light" />
        </div>

        <h1
          className="font-bold text-white leading-[1.1] tracking-tight
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Rise Above
          <br />
          <span className="font-medium italic text-copper-light">
            the City of Lakes
          </span>
        </h1>

        <p
          className="mt-7 text-[15px] sm:text-base text-white/50 font-light leading-[1.8]
                      max-w-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Glide over Lake Pichola on a 387-metre gondola journey to the sacred Karni Mata
          Temple atop Machala Hill — an experience of faith, beauty, and sky.
        </p>

        <div
          className="flex items-center justify-center gap-4 mt-10 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="#tickets"
            className="bg-copper text-white px-8 py-3.5 rounded-xl text-sm font-semibold
                       tracking-wide no-underline
                       transition-all duration-300
                       hover:bg-copper-light hover:shadow-[0_8px_30px_rgba(184,115,51,0.25)]
                       hover:-translate-y-0.5"
          >
            View Tickets
          </a>
          <a
            href="#gallery"
            className="text-white/70 px-8 py-3.5 rounded-xl text-sm font-normal
                       border border-white/15 no-underline
                       transition-all duration-300
                       hover:bg-white/[0.06] hover:border-white/30 hover:text-white
                       hover:-translate-y-0.5"
          >
            Explore Gallery
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce" data-aos="fade" data-aos-delay="1200">
          <span className="text-[10px] text-white/25 tracking-[2px] uppercase font-medium">
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/25">
            <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </header>
  );
}
