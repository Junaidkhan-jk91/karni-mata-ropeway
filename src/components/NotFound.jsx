import React from 'react';
import ropewayScenic from '../assets/ropeway_scenic.png';

export default function NotFound({ setCurrentPath }) {
  const handleGoHome = (e) => {
    e.preventDefault();
    window.history.pushState(null, null, '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-stone-950 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background twilight mountain vector silhouette */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-luminosity"
        style={{ backgroundImage: `url(${ropewayScenic})` }}
        aria-hidden="true"
      />

      {/* Floating radial glow details */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-copper/10 blur-[90px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-sage-dark/10 blur-[80px] pointer-events-none" aria-hidden="true" />

      {/* Custom Floating cable car animation stylesheet */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float404Gondola {
          0% {
            left: -10%;
            top: 60%;
            transform: scale(0.85) translate(0, 0);
          }
          50% {
            top: 55%;
            transform: scale(1) translate(0, -6px);
          }
          100% {
            left: 110%;
            top: 50%;
            transform: scale(0.85) translate(0, 0);
          }
        }
        .gondola-404-float {
          position: absolute;
          animation: float404Gondola 20s linear infinite;
          pointer-events: none;
          opacity: 0.25;
        }
      `}} />

      {/* Background floating wire & SVG gondola silhouette */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <line x1="-10%" y1="60%" x2="110%" y2="50%" stroke="#ffffff" strokeWidth="1" />
      </svg>
      
      <div className="gondola-404-float">
        <svg width="40" height="44" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-copper">
          <path d="M 24 6 L 24 22 C 24 24, 22 26, 20 26 L 14 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="6" r="3" fill="#ffffff" />
          <circle cx="28" cy="6" r="3" fill="#ffffff" />
          <rect x="6" y="26" width="28" height="22" rx="5" fill="currentColor" />
          <rect x="10" y="29" width="20" height="9" rx="2" fill="#000000" opacity="0.9" />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-lg">
        {/* Neon 404 Heading */}
        <h1 className="text-8xl sm:text-9xl font-bold tracking-tight text-copper leading-none select-none drop-shadow-[0_0_20px_rgba(184,115,51,0.5)]">
          404
        </h1>

        {/* Poetic Title */}
        <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-white tracking-wide leading-tight">
          Drifted Off the <span className="text-copper-light italic font-medium">Cable Network?</span>
        </h2>

        {/* Brand/Direction copy */}
        <p className="mt-5 text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-sm mx-auto">
          Our gondolas do not operate along this path. Let us guide you back to Udaipur’s scenic skyline safely.
        </p>

        {/* Navigation Action */}
        <div className="mt-10">
          <a
            href="/"
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 bg-copper text-white px-8 py-3.5 rounded-xl
                       text-sm font-semibold tracking-wider uppercase no-underline
                       transition-all duration-300
                       hover:bg-copper-light hover:shadow-[0_8px_30px_rgba(184,115,51,0.35)]
                       hover:-translate-y-0.5 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
            Return to Flight
          </a>
        </div>
      </div>
    </main>
  );
}
