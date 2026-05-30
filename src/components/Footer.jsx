/**
 * @component Footer
 * Centered minimal footer with contact pills and copyright.
 * Enhanced with AOS scroll-reveal animations.
 */

import { FOOTER } from '../constants/data';

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 sm:px-10 lg:px-16 pt-14 pb-8">
      <div className="max-w-5xl mx-auto">
        {/* Branding */}
        <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="700">
          <div className="text-xl sm:text-2xl text-copper-light font-semibold mb-3 tracking-wide">
            {FOOTER.logoText}
          </div>
          <address className="text-sm text-white/30 leading-[1.8] font-light not-italic">
            {FOOTER.address.map((line, i) => (
              <span key={i}>
                {line}
                {i < FOOTER.address.length - 1 && <> · </>}
              </span>
            ))}
          </address>
        </div>

        {/* Contact row */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10" data-aos="fade-up" data-aos-delay="100">
          <a
            href={FOOTER.phoneHref}
            className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08]
                       px-5 py-2.5 rounded-xl text-sm text-white/70 no-underline font-normal
                       transition-all duration-200 hover:bg-white/[0.1] hover:text-copper-light"
          >
            📞 {FOOTER.phone}
          </a>
          <span className="text-xs text-white/20 font-light">{FOOTER.hours}</span>
          <a
            href={FOOTER.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/30 no-underline
                       hover:text-copper-light transition-colors duration-200"
          >
            📍 Google Maps ↗
          </a>
        </div>

        {/* Divider */}
        <hr className="border-none h-px bg-white/[0.06] mb-6" />

        {/* Copyright */}
        <p className="text-center text-[11px] text-white/20 font-light" data-aos="fade" data-aos-delay="200">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
