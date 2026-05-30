/**
 * @component About
 * "Our Story" section with asymmetric 3/2 grid layout —
 * body text on left, info cards on right.
 * Enhanced with AOS scroll-reveal animations.
 */

import { ABOUT } from '../constants/data';

function AboutCard({ title, text, index }) {
  return (
    <div
      className="group bg-white rounded-2xl p-6 sm:p-7
                    shadow-[0_2px_16px_rgba(0,0,0,0.04)]
                    border border-stone/40
                    transition-all duration-300
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    hover:-translate-y-1"
      data-aos="fade-left"
      data-aos-delay={index * 150}
      data-aos-duration="700"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-2 rounded-full bg-copper shrink-0
                        group-hover:scale-125 transition-transform duration-300" />
        <h3 className="text-base font-semibold text-charcoal">{title}</h3>
      </div>
      <p className="text-sm text-warm-gray leading-[1.8] font-light">
        {text}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4" data-aos="fade-right" data-aos-duration="600">
          <span className="w-10 h-px bg-copper" />
          <span className="text-[11px] tracking-[3px] uppercase text-copper font-semibold">
            {ABOUT.eyebrow}
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left — 3/5 */}
          <div className="lg:col-span-3">
            <h2
              className="font-bold text-charcoal leading-[1.15]
                           text-2xl sm:text-3xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {ABOUT.title}{' '}
              <span className="text-sage-dark italic font-medium">{ABOUT.titleEmphasis}</span>
            </h2>

            {ABOUT.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-sm sm:text-[15px] text-warm-gray leading-[1.85] font-light
                           ${i === 0 ? 'mt-6' : 'mt-4'}`}
                data-aos="fade-up"
                data-aos-delay={200 + i * 100}
              >
                {i === 1 ? (
                  <>
                    {para.split('Rajasthan\u2019s first gondola ropeway')[0]}
                    <strong className="font-medium text-charcoal">
                      Rajasthan&rsquo;s first gondola ropeway
                    </strong>
                    {para.split('Rajasthan\u2019s first gondola ropeway')[1]}
                  </>
                ) : (
                  para
                )}
              </p>
            ))}

            {/* Pull quote */}
            <div className="mt-7 pl-5 border-l-2 border-copper/30" data-aos="fade-up" data-aos-delay="400">
              <p className="text-base italic text-charcoal/50 leading-relaxed font-normal">
                &ldquo;A five-minute flight over Udaipur&rsquo;s shimmering lakes
                and royal skyline.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:mt-14">
            {ABOUT.cards.map(({ title, text }, index) => (
              <AboutCard key={title} title={title} text={text} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
