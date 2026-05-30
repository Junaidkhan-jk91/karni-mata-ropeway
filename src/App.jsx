import { useCallback, useEffect, useState, lazy, Suspense } from 'react';
import AOS from 'aos';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Preloader from './components/Preloader';
import { SectionSkeleton, DarkSectionSkeleton } from './components/Skeletons';
import NotFound from './components/NotFound';

// Below-the-fold sections lazily loaded to minimize bundle size and speed up initial render
const About = lazy(() => import('./components/About'));
const RopewayExperience = lazy(() => import('./components/RopewayExperience'));
const Highlights = lazy(() => import('./components/Highlights'));
const Gallery = lazy(() => import('./components/Gallery'));
const Tickets = lazy(() => import('./components/Tickets'));
const Timings = lazy(() => import('./components/Timings'));
const Contact = lazy(() => import('./components/Contact'));
const GettingHere = lazy(() => import('./components/GettingHere'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
    });

    // Support browser back/forward history navigation seamlessly
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Global robust smooth-scrolling click handler
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navbarOffset = 100; // Floating navbar offset
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Standard landing path: render home layout
  const isHomePath = currentPath === '/' || currentPath === '';

  if (!isHomePath) {
    return <NotFound setCurrentPath={setCurrentPath} />;
  }

  return (
    <ParticlesProvider init={particlesInit}>
      {/* Fullscreen mount preloader */}
      <Preloader />

      <Navbar />
      <Hero />
      <Stats />

      {/* Progressive lazy loaded sections wrapped in light/dark thematic skeletons */}
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<DarkSectionSkeleton />}>
        <RopewayExperience />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Highlights />
      </Suspense>

      <Suspense fallback={<DarkSectionSkeleton />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Tickets />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Timings />
      </Suspense>

      <Suspense fallback={<DarkSectionSkeleton />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <GettingHere />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </ParticlesProvider>
  );
}
