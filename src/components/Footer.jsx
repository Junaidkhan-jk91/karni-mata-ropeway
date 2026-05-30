import { FOOTER } from '../constants/data';

export default function Footer() {
  return (
    <footer className="bg-black px-6 sm:px-10 lg:px-16 pt-14 pb-8 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="700">
          <div className="text-xl sm:text-2xl text-white font-bold mb-3 tracking-wide uppercase">
            {FOOTER.logoText}
          </div>
          <address className="text-sm text-zinc-300 leading-[1.8] font-light not-italic">
            {FOOTER.address.map((line, i) => (
              <span key={i}>
                {line}
                {i < FOOTER.address.length - 1 && <> · </>}
              </span>
            ))}
          </address>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap mb-10 text-sm" data-aos="fade-up" data-aos-delay="100">
          <a
            href={FOOTER.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-semibold no-underline transition-all duration-300 hover:bg-zinc-200"
          >
            📞 {FOOTER.phone}
          </a>
          <span className="text-zinc-300 font-medium">{FOOTER.hours}</span>
          <a
            href={FOOTER.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white underline hover:text-zinc-300 transition-colors duration-200"
          >
            📍 Google Maps ↗
          </a>
        </div>

        <hr className="border-none h-px bg-zinc-800 mb-6" />

        <p className="text-center text-xs text-zinc-400 font-light" data-aos="fade" data-aos-delay="200">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
