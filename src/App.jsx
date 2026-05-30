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
