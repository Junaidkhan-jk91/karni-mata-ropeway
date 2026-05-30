import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Elegant fade out once assets and components mount
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 600); // matches CSS duration
      return () => clearTimeout(removeTimer);
    }, 1100); // preloader holding time

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-stone-950 flex flex-col items-center justify-center
                  transition-all duration-600 ease-out-cubic
                  ${fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      {/* Preloader background styling */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinnerRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseEmblem {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(184, 115, 51, 0.4)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 20px rgba(184, 115, 51, 0.7)); }
        }
        .preloader-spinner {
          width: 72px;
          height: 72px;
          border: 2px solid rgba(255, 255, 255, 0.05);
          border-top: 2px solid #B87333;
          border-radius: 50%;
          animation: spinnerRotate 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .preloader-emblem {
          position: absolute;
          animation: pulseEmblem 2.5s ease-in-out infinite;
        }
      `}} />

      <div className="relative flex items-center justify-center">
        {/* Glowing Spinner Ring */}
        <div className="preloader-spinner" />

        {/* Floating Custom Gondola Icon */}
        <div className="preloader-emblem">
          <svg width="32" height="34" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-copper">
            <path d="M 24 6 L 24 22 C 24 24, 22 26, 20 26 L 14 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="6" r="3" fill="#B87333" />
            <circle cx="28" cy="6" r="3" fill="#B87333" />
            <rect x="6" y="26" width="28" height="22" rx="5" fill="currentColor" />
            <rect x="10" y="29" width="20" height="9" rx="2" fill="#1c1917" opacity="0.9" />
            <line x1="20" y1="29" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="mt-8 text-center">
        <h2 className="text-white text-base font-semibold tracking-[3px] uppercase">
          Mansapurna
        </h2>
        <p className="text-[10px] tracking-[5px] uppercase text-copper-light font-medium mt-2 opacity-80">
          Karni Mata Ropeway
        </p>
      </div>

      {/* Subtle loader text */}
      <div className="absolute bottom-10 text-[9px] tracking-[2px] uppercase text-white/20 font-light">
        Initializing Flight Experience...
      </div>
    </div>
  );
}
