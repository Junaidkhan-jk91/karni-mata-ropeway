/**
 * @component Navbar
 * Floating glass navigation bar with mobile full-screen overlay menu.
 */

import { useState } from 'react';
import { NAV_LINKS, NAV_PHONE } from '../constants/data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between
                   px-6 py-3.5 glass-dark rounded-2xl border border-white/[0.08]
                   shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                   lg:left-8 lg:right-8 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" className="no-underline group" aria-label="Home">
          <span className="text-white text-base font-semibold leading-tight block tracking-wide
                           group-hover:text-copper-light transition-colors duration-300">
            Mansapurna
          </span>
          <span className="text-[10px] tracking-[3px] uppercase text-white/40 font-light">
            Karni Mata Ropeway
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white/60 no-underline text-[13px] font-normal px-4 py-2
                         rounded-lg transition-all duration-200
                         hover:text-white hover:bg-white/[0.08]"
            >
              {label}
            </a>
          ))}
          <a
            href={NAV_PHONE.href}
            className="ml-2 bg-copper text-white px-5 py-2.5 rounded-xl
                       text-xs font-semibold no-underline tracking-wide
                       transition-all duration-200
                       hover:bg-copper-light hover:shadow-[0_4px_16px_rgba(184,115,51,0.3)]"
          >
            Call Us
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none
                     cursor-pointer p-2 rounded-lg hover:bg-white/[0.08] transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center
                           ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300
                           ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center
                           ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl
                    flex flex-col items-center justify-center gap-6
                    transition-all duration-500 md:hidden
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        role="menu"
        onClick={closeMenu}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            className="text-white/80 no-underline text-2xl font-light
                       transition-all duration-200 hover:text-copper-light"
            role="menuitem"
          >
            {label}
          </a>
        ))}
        <a
          href={NAV_PHONE.href}
          onClick={closeMenu}
          className="mt-4 bg-copper text-white px-8 py-3 rounded-xl
                     text-sm font-semibold no-underline tracking-wide"
          role="menuitem"
        >
          📞 98294 66365
        </a>
      </div>
    </>
  );
}
