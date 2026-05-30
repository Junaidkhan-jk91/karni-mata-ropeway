/**
 * @component Timings
 * Operating hours cards with sage-green accents and timeline rows.
 * Enhanced with AOS scroll-reveal animations.
 */

import { TIMINGS, TIMING_TIP } from '../constants/data';

function TimingCard({ place, name, rows, index }) {
  return (
    <div
      className="bg-white rounded-2xl p-7 border border-stone/40
                    shadow-[0_2px_12px_rgba(0,0,0,0.03)]
                    transition-all duration-300
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      data-aos="fade-up"
      data-aos-delay={index * 150}
      data-aos-duration="700"
    >
      <span className="inline-block px-3 py-1 rounded-full bg-sage-pale
                       text-sage-dark text-[10px] tracking-[2px] uppercase font-semibold">
        {place}
      </span>
      <h3 className="mt-4 text-base font-semibold text-charcoal">{name}</h3>

      <div className="mt-5">
        {rows.map(({ label, value }, i) => (
          <div
            key={i}
            className={`flex flex-wrap items-start gap-x-2 py-3 text-sm
                       ${i < rows.length - 1 ? 'border-b border-stone/30' : ''}`}
          >
            <span className="text-warm-gray font-light">{label}</span>
            <span className="font-semibold text-charcoal">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Timings() {
  return (
    <section id="timings" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-sage-pale">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4" data-aos="fade-right" data-aos-duration="600">
            <span className="w-10 h-px bg-sage-dark" />
            <span className="text-[11px] tracking-[3px] uppercase text-sage-dark font-semibold">
              Plan your visit
            </span>
          </div>
          <h2
            className="font-bold text-charcoal leading-[1.15]
                         text-2xl sm:text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Timings &amp;{' '}
            <span className="text-sage-dark italic font-medium">darshan hours</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {TIMINGS.map(({ place, name, rows }, index) => (
            <TimingCard key={place} place={place} name={name} rows={rows} index={index} />
          ))}
        </div>

        {/* Tip */}
        <div className="mt-8 flex items-start gap-3 max-w-3xl" data-aos="fade-up" data-aos-delay="300">
          <div className="w-2 h-2 rounded-full bg-sage shrink-0 mt-1.5" />
          <p className="text-sm text-sage-dark font-normal">{TIMING_TIP}</p>
        </div>
      </div>
    </section>
  );
}
