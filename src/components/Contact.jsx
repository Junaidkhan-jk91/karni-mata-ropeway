/**
 * @component Contact
 * Contact section with phone/address glass cards and Google Maps banner.
 * Background: animated connected network particles on dark graphite.
 */

import { CONTACT } from '../constants/data';
import ParticlesBackground from './ParticlesBackground';

export default function Contact() {
  const { phone, address, mapsBanner } = CONTACT;

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-graphite overflow-hidden">
      {/* ── Animated network particles ── */}
      <ParticlesBackground preset="contact" id="contact-particles" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4" data-aos="fade-down" data-aos-duration="600">
            <span className="w-10 h-px bg-copper-light" />
            <span className="text-[11px] tracking-[3px] uppercase text-copper-light font-semibold">
              Reach us
            </span>
            <span className="w-10 h-px bg-copper-light" />
          </div>
          <h2
            className="font-bold text-white leading-[1.15]
                         text-2xl sm:text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact &amp;{' '}
            <span className="text-copper-light italic font-medium">location</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Phone */}
          <div
            className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-7 sm:p-8
                          backdrop-blur-sm transition-all duration-300
                          hover:bg-white/[0.08] hover:border-white/[0.12]"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div className="w-12 h-12 rounded-xl bg-copper/20 flex items-center justify-center
                            text-xl mb-5">
              📞
            </div>
            <div className="text-[11px] tracking-[2px] uppercase text-copper-light font-semibold mb-1">
              Contact Person / Enquiry
            </div>
            <div className="text-xl font-bold text-white mb-3">
              Jagdish Sukhawani
            </div>
            <a
              href={phone.href}
              className="text-3xl sm:text-4xl font-bold text-white no-underline block
                         hover:text-copper-light transition-colors duration-200"
            >
              {phone.number}
            </a>
            <p className="mt-3 text-sm text-white/30 font-light leading-relaxed">
              {phone.availability}
              <br />
              {phone.hours}
            </p>
            <a
              href={phone.href}
              className="inline-flex items-center gap-2 mt-6 bg-copper text-white
                         px-6 py-3 rounded-xl text-xs font-semibold tracking-wide no-underline
                         transition-all duration-300
                         hover:bg-copper-light hover:shadow-[0_4px_20px_rgba(184,115,51,0.3)]"
            >
              Call now →
            </a>
          </div>

          {/* Address */}
          <div
            className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-7 sm:p-8
                          backdrop-blur-sm transition-all duration-300
                          hover:bg-white/[0.08] hover:border-white/[0.12]"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center
                            text-xl mb-5">
              📍
            </div>
            <div className="text-[11px] tracking-[2px] uppercase text-copper-light font-semibold mb-2">
              Address
            </div>
            <p className="text-lg font-semibold text-white leading-snug">
              {address.line1}
              <br />
              {address.line2}
            </p>
            <p className="mt-3 text-sm text-white/30 font-light leading-relaxed">
              {address.state}
              <br />
              {address.distance}
            </p>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-white/10 text-white
                         px-6 py-3 rounded-xl text-xs font-semibold tracking-wide no-underline
                         border border-white/10
                         transition-all duration-300
                         hover:bg-white/15 hover:border-white/20"
            >
              Open in Maps →
            </a>
          </div>
        </div>

        <div 
          className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.15)] max-w-3xl mx-auto h-[350px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <iframe
            title="Manshapurn Karni Mata Ropeway Location Map"
            src="https://maps.google.com/maps?q=Manshapurn%20Karni%20mata%20Ropeway%20Udaipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
