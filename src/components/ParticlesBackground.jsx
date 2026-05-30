/**
 * @component ParticlesBackground
 * Reusable animated particle background using tsParticles.
 * Accepts a preset config name to render different particle styles.
 */

import { useMemo } from 'react';
import { Particles } from '@tsparticles/react';

/* ──────────────────────────────────────────────
   Particle config presets
   ────────────────────────────────────────────── */

/** Hero: connected network dots — glowing copper nodes with links */
const heroConfig = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 50, density: { enable: true, width: 1200, height: 800 } },
    color: { value: ['#B87333', '#D4A574', '#8B5E3C'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.15, max: 0.5 },
      animation: { enable: true, speed: 0.8, startValue: 'random', sync: false },
    },
    size: {
      value: { min: 1, max: 3.5 },
      animation: { enable: true, speed: 2, startValue: 'random', sync: false },
    },
    links: {
      enable: true,
      distance: 140,
      color: '#B87333',
      opacity: 0.08,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.2, color: '#D4A574' } },
    },
  },
  detectRetina: true,
};

/** Gallery: floating starfield — tiny white/copper dots drifting upward */
const galleryConfig = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 60, density: { enable: true, width: 1200, height: 800 } },
    color: { value: ['#B87333', '#D4A574', '#ffffff'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: { enable: true, speed: 1.2, startValue: 'random', sync: false },
    },
    size: {
      value: { min: 0.8, max: 2.5 },
      animation: { enable: true, speed: 1.5, startValue: 'random', sync: false },
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'top',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'bubble' },
    },
    modes: {
      bubble: { distance: 150, size: 4, duration: 2, opacity: 0.6 },
    },
  },
  detectRetina: true,
};

/** Highlights: soft bokeh — large translucent circles floating gently */
const highlightsConfig = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 18, density: { enable: true, width: 1200, height: 800 } },
    color: { value: ['#B87333', '#7B8F6B', '#D4A574'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.03, max: 0.1 },
      animation: { enable: true, speed: 0.5, startValue: 'random', sync: false },
    },
    size: {
      value: { min: 20, max: 80 },
      animation: { enable: true, speed: 3, startValue: 'random', sync: false, destroy: 'none' },
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: false },
    },
  },
  detectRetina: true,
};

/** Contact: connected sage/copper network — similar to hero but sage-toned */
const contactConfig = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 40, density: { enable: true, width: 1200, height: 800 } },
    color: { value: ['#7B8F6B', '#A8B89A', '#B87333'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.1, max: 0.4 },
      animation: { enable: true, speed: 0.6, startValue: 'random', sync: false },
    },
    size: {
      value: { min: 1, max: 3 },
      animation: { enable: true, speed: 1.5, startValue: 'random', sync: false },
    },
    links: {
      enable: true,
      distance: 120,
      color: '#7B8F6B',
      opacity: 0.06,
      width: 0.8,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.15, color: '#A8B89A' } },
    },
  },
  detectRetina: true,
};

const PRESETS = {
  hero: heroConfig,
  gallery: galleryConfig,
  highlights: highlightsConfig,
  contact: contactConfig,
};

export default function ParticlesBackground({ preset = 'hero', id }) {
  const options = useMemo(() => PRESETS[preset] || PRESETS.hero, [preset]);

  return (
    <Particles
      id={id}
      options={options}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
