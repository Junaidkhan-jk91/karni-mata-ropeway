/**
 * @component Stats
 * Floating glass stats bar overlapping the hero section.
 * Responsive 2-col on mobile → 4-col on desktop.
 * Enhanced with AOS scroll-reveal animation.
 */

import { STATS } from '../constants/data';

function StatItem({ value, unit, label, index }) {
  return (
    <div
      className="flex flex-col items-center gap-1.5 px-4 py-5 sm:px-6"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      <div className="text-2xl sm:text-3xl font-bold text-copper tracking-tight">
        {value}
        {unit && <span className="text-sm font-medium text-copper-light ml-0.5">{unit}</span>}
      </div>
      <div className="text-[10px] text-warm-gray tracking-[1.5px] uppercase font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="relative z-10 -mt-10 px-4 sm:px-8 lg:px-16">
      <div
        className="max-w-3xl mx-auto glass rounded-2xl border border-stone/50
                   shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                   grid grid-cols-2 lg:grid-cols-4"
        role="region"
        aria-label="Key statistics"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`${i < STATS.length - 1 ? 'lg:border-r lg:border-stone/40' : ''}
                        ${i % 2 === 0 ? 'border-r border-stone/40' : ''}
                        ${i < 2 ? 'border-b border-stone/40 lg:border-b-0' : ''}`}
          >
            <StatItem {...stat} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
