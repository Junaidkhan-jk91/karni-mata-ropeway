/**
 * @component Highlights
 * "Why visit" feature cards with numbered index, icon squares, and hover lift.
 * Background: animated soft bokeh particles on cream.
 */

import { HIGHLIGHTS } from '../constants/data';
import ParticlesBackground from './ParticlesBackground';

function HighlightCard({ icon, title, description, index }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-8 sm:p-9
                    border border-stone/30
                    shadow-[0_2px_12px_rgba(0,0,0,0.03)]
                    transition-all duration-300
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                    hover:-translate-y-1.5"
      data-aos="fade-up"
      data-aos-delay={index * 150}
      data-aos-duration="700"
    >
      {/* Faded index number */}
      <span className="absolute top-5 right-7 text-6xl font-bold
                       text-stone/30 leading-none select-none
                       group-hover:text-copper/10 transition-colors duration-300"
            aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-copper-pale flex items-center justify-center
                      text-xl mb-5
                      group-hover:bg-copper group-hover:scale-110
                      transition-all duration-300"
           role="img" aria-hidden="true">
        <span className="group-hover:grayscale group-hover:brightness-200 transition-all duration-300">
          {icon}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-charcoal mb-2 relative z-10">
        {title}
      </h3>
      <p className="text-sm text-warm-gray leading-[1.8] font-light relative z-10">
        {description}
      </p>
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="relative py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-cream overflow-hidden">
      {/* ── Animated bokeh particles ── */}
      <ParticlesBackground preset="highlights" id="highlights-particles" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4" data-aos="fade-down" data-aos-duration="600">
            <span className="w-10 h-px bg-copper" />
            <span className="text-[11px] tracking-[3px] uppercase text-copper font-semibold">
              Why visit
            </span>
            <span className="w-10 h-px bg-copper" />
          </div>
          <h2
            className="font-bold text-charcoal leading-[1.15]
                         text-2xl sm:text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Experiences that{' '}
            <span className="text-sage-dark italic font-medium">stay with you</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <HighlightCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
