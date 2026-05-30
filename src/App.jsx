import { useCallback, useEffect } from 'react';
import AOS from 'aos';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import RopewayExperience from './components/RopewayExperience';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import Tickets from './components/Tickets';
import Timings from './components/Timings';
import Contact from './components/Contact';
import GettingHere from './components/GettingHere';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });

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

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <RopewayExperience />
      <Highlights />
      <Gallery />
      <Tickets />
      <Timings />
      <Contact />
      <GettingHere />
      <Footer />
    </ParticlesProvider>
  );
}
