/**
 * @component App
 * Root component composing all sections. Redesigned layout flow
 * with smooth visual transitions between sections.
 * Enhanced with AOS scroll-reveal animations and tsParticles backgrounds.
 */

import { useCallback, useEffect } from 'react';
import AOS from 'aos';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
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
