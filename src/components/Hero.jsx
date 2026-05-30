/**
 * @component Hero
 * Full-viewport hero with dark background, animated particle network,
 * centered Poppins typography, and subtle grid pattern.
 */

import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 30%, #3A2F28 60%, #1C1C1C 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Animated particle network ── */}
      <ParticlesBackground preset="hero" id="hero-particles" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8" data-aos="fade-down" data-aos-delay="200">
          <span className="w-8 h-px bg-copper-light" />
          <span className="text-copper-light text-[11px] tracking-[4px] uppercase font-medium">
            Rajasthan&rsquo;s first ropeway
          </span>
          <span className="w-8 h-px bg-copper-light" />
        </div>

        {/* Main heading */}
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

        {/* Subtitle */}
        <p
          className="mt-7 text-[15px] sm:text-base text-white/50 font-light leading-[1.8]
                      max-w-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Glide over Lake Pichola on a 387-metre gondola journey to the sacred Karni Mata
          Temple atop Machala Hill — an experience of faith, beauty, and sky.
        </p>

        {/* CTAs */}
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

        {/* Scroll indicator */}
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
