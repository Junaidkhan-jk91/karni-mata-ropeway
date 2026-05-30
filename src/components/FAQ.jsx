/**
 * @component FAQ
 * Clean, glassmorphic collapsible accordion list answering tourist questions.
 * Built for perfect UX and SEO ranking.
 */

import { useState } from 'react';
import { FAQS } from '../constants/data';

function AccordionItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <div
      className="bg-white rounded-2xl border border-stone/40 overflow-hidden
                 shadow-[0_2px_12px_rgba(0,0,0,0.02)]
                 transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4
                   bg-transparent border-none cursor-pointer group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[14px] sm:text-[15px] text-charcoal group-hover:text-copper transition-colors duration-200">
          {question}
        </span>
        <span className={`w-8 h-8 rounded-full bg-copper-pale flex items-center justify-center text-copper
                         font-light text-lg transition-transform duration-300 shrink-0
                         ${isOpen ? 'rotate-45 bg-copper text-white' : 'group-hover:scale-105'}`}>
          ＋
        </span>
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden
                   ${isOpen ? 'max-h-40 border-t border-stone/20' : 'max-h-0'}`}
      >
        <div className="px-6 py-5 text-sm text-warm-gray leading-[1.7] font-light">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4" data-aos="fade-right" data-aos-duration="600">
            <span className="w-10 h-px bg-copper" />
            <span className="text-[11px] tracking-[3px] uppercase text-copper font-semibold">
              Questions
            </span>
          </div>
          <h2
            className="font-bold text-charcoal leading-[1.15]
                         text-2xl sm:text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Frequently Asked{' '}
            <span className="text-copper italic font-medium">Questions</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="grid gap-4 max-w-3xl">
          {FAQS.map(({ question, answer }, index) => (
            <AccordionItem
              key={index}
              question={question}
              answer={answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
