import React from 'react';
import ropewayScenic from '../assets/ropeway_scenic.png';

export default function RopewayExperience() {
  return (
    <section className="relative h-[450px] sm:h-[500px] overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Background landscape image with dark parallax-like overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ropewayScenic})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/60 to-stone-950/80" />

      {/* CSS Styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ascendGondola {
          0% {
            left: -10%;
            top: 75%;
          }
          100% {
            left: 110%;
            top: 15%;
          }
        }
        @keyframes descendGondola {
          0% {
            left: 110%;
            top: 15%;
          }
          100% {
            left: -10%;
            top: 75%;
          }
        }
        .gondola-ascend {
          position: absolute;
          animation: ascendGondola 28s linear infinite;
          transform: translate(-50%, -6px);
          will-change: left, top;
        }
        .gondola-descend {
          position: absolute;
          animation: descendGondola 34s linear infinite;
          animation-delay: -12s; /* offset initial position */
          transform: translate(-50%, -6px);
          will-change: left, top;
        }
      `}} />

      {/* SVG Steel Cable Wire */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
        <line x1="-10%" y1="75%" x2="110%" y2="15%" stroke="#ffffff" strokeWidth="1.5" />
      </svg>

      {/* Ascending Gondola (Copper Colored) */}
      <div className="gondola-ascend z-10">
        <svg width="44" height="48" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-copper drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          <path d="M 24 6 L 24 22 C 24 24, 22 26, 20 26 L 14 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="6" r="3" fill="#1c1917" />
          <circle cx="28" cy="6" r="3" fill="#1c1917" />
          <rect x="6" y="26" width="28" height="22" rx="5" fill="currentColor" />
          <rect x="10" y="29" width="20" height="9" rx="2" fill="#f5f5f4" opacity="0.9" />
          <line x1="20" y1="29" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Descending Gondola (Sage Colored) */}
      <div className="gondola-descend z-10">
        <svg width="44" height="48" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sage-light drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          <path d="M 24 6 L 24 22 C 24 24, 22 26, 20 26 L 14 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="6" r="3" fill="#1c1917" />
          <circle cx="28" cy="6" r="3" fill="#1c1917" />
          <rect x="6" y="26" width="28" height="22" rx="5" fill="currentColor" />
          <rect x="10" y="29" width="20" height="9" rx="2" fill="#f5f5f4" opacity="0.9" />
          <line x1="20" y1="29" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 text-center px-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-5" data-aos="fade-down">
          <span className="w-8 h-px bg-copper-light" />
          <span className="text-copper-light text-[10px] tracking-[4px] uppercase font-semibold">
            Panoramic Flight
          </span>
          <span className="w-8 h-px bg-copper-light" />
        </div>
        <h2 className="font-bold text-white leading-tight text-2xl sm:text-3xl md:text-4xl" data-aos="fade-up" data-aos-delay="100">
          Udaipur&rsquo;s Iconic <span className="text-copper-light italic font-medium">Sky Ride</span>
        </h2>
        <p className="mt-5 text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="200">
          Experience the thrill of gliding smoothly over Lake Pichola and the lush hills, bridging city life and high devotion in under 5 minutes.
        </p>
        <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
          <a
            href="#tickets"
            className="inline-block bg-copper text-white px-7 py-3 rounded-xl text-xs font-semibold
                       tracking-wider uppercase no-underline transition-all duration-300
                       hover:bg-copper-light hover:shadow-[0_8px_25px_rgba(184,115,51,0.3)]
                       hover:-translate-y-0.5"
          >
            Check Fare Details
          </a>
        </div>
      </div>
    </section>
  );
}
