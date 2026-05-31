/**
 * @component Tickets
 * Pricing cards with category badges, large prices, and cabin note banner.
 * Enhanced with AOS staggered scroll-reveal animations.
 */

import { TICKETS, TICKET_SUBTITLE, CABIN_NOTE } from '../constants/data';

function TicketCard({ category, type, price, note, index }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-7
                    border border-stone/40
                    shadow-[0_2px_12px_rgba(0,0,0,0.03)]
                    transition-all duration-300
                    hover:shadow-[0_12px_40px_rgba(184,115,51,0.1)]
                    hover:-translate-y-1 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="700"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r
                      from-copper via-copper-light to-sage-light
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           aria-hidden="true" />

      <span className="inline-block px-3 py-1 rounded-full bg-copper-pale
                       text-copper-dark text-[10px] tracking-[2px] uppercase font-semibold">
        {category}
      </span>
      <div className="mt-4 text-base font-semibold text-charcoal">{type}</div>
      <div className="mt-4 text-4xl sm:text-5xl font-bold text-copper tracking-tight leading-none">
        <span className="text-lg font-normal text-copper-light mr-0.5">₹</span>
        {price}
      </div>
      <div className="mt-3 text-xs text-warm-gray font-light">{note}</div>
    </div>
  );
}

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4" data-aos="fade-right" data-aos-duration="600">
            <span className="w-10 h-px bg-copper" />
            <span className="text-[11px] tracking-[3px] uppercase text-copper font-semibold">
              Fares
            </span>
          </div>
          <h2
            className="font-bold text-charcoal leading-[1.15]
                         text-2xl sm:text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ticket{' '}
            <span className="text-sage-dark italic font-medium">prices</span>
          </h2>
          <p className="mt-4 text-sm text-warm-gray font-light" data-aos="fade-up" data-aos-delay="200">
            {TICKET_SUBTITLE}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {TICKETS.map(({ category, type, price, note }, index) => (
            <TicketCard key={`${category}-${type}`} category={category} type={type} price={price} note={note} index={index} />
          ))}
        </div>

        <div
          className="mt-8 bg-sage-pale rounded-2xl px-6 py-5 flex items-start gap-4
                        border border-sage-light/30 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-10 h-10 rounded-xl bg-sage/20 flex items-center justify-center
                          text-lg shrink-0 mt-0.5">
            🚡
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <strong className="font-semibold text-sage-dark text-sm">{CABIN_NOTE.label}</strong>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-sage/15
                             text-sage-dark text-[10px] tracking-[1.5px] uppercase font-semibold
                             border border-sage-light/40">
                6 people max
              </span>
            </div>
            <span className="text-sm text-warm-gray font-light mt-1 block">{CABIN_NOTE.text}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
