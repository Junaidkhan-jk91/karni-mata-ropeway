/**
 * @component ScrollBackground
 * Swiss-style floating geometric shapes that parallax-move on scroll.
 * Renders decorative circles, lines, crosses, and dots across the page
 * at varying depths (scroll speeds) for a rich, layered feel.
 */

import { useEffect, useRef, useState } from 'react';

/** Shape definitions — each has a unique position, size, color, speed, and type */
const SHAPES = [
  // Copper-toned circles
  { type: 'circle', x: 5, y: 200, size: 180, color: 'rgba(184,115,51,0.06)', speed: 0.15, blur: 40 },
  { type: 'circle', x: 85, y: 800, size: 220, color: 'rgba(184,115,51,0.05)', speed: 0.1, blur: 60 },
  { type: 'circle', x: 10, y: 2200, size: 160, color: 'rgba(184,115,51,0.07)', speed: 0.2, blur: 30 },
  { type: 'circle', x: 90, y: 3600, size: 200, color: 'rgba(184,115,51,0.04)', speed: 0.12, blur: 50 },
  { type: 'circle', x: 50, y: 5000, size: 240, color: 'rgba(184,115,51,0.05)', speed: 0.08, blur: 70 },

  // Sage-toned circles
  { type: 'circle', x: 92, y: 500, size: 140, color: 'rgba(123,143,107,0.05)', speed: 0.12, blur: 35 },
  { type: 'circle', x: 3, y: 1500, size: 200, color: 'rgba(123,143,107,0.04)', speed: 0.08, blur: 50 },
  { type: 'circle', x: 88, y: 2800, size: 170, color: 'rgba(123,143,107,0.06)', speed: 0.18, blur: 30 },
  { type: 'circle', x: 15, y: 4200, size: 190, color: 'rgba(123,143,107,0.04)', speed: 0.1, blur: 55 },

  // Decorative crosses (Swiss style)
  { type: 'cross', x: 8, y: 600, size: 24, color: 'rgba(184,115,51,0.12)', speed: 0.25, rotation: 15 },
  { type: 'cross', x: 93, y: 1200, size: 18, color: 'rgba(123,143,107,0.1)', speed: 0.2, rotation: -20 },
  { type: 'cross', x: 12, y: 2000, size: 22, color: 'rgba(184,115,51,0.1)', speed: 0.22, rotation: 45 },
  { type: 'cross', x: 88, y: 3000, size: 20, color: 'rgba(123,143,107,0.08)', speed: 0.18, rotation: -10 },
  { type: 'cross', x: 6, y: 4000, size: 26, color: 'rgba(184,115,51,0.09)', speed: 0.15, rotation: 30 },
  { type: 'cross', x: 95, y: 4800, size: 16, color: 'rgba(123,143,107,0.12)', speed: 0.28, rotation: -35 },

  // Thin lines (Swiss precision)
  { type: 'line', x: 15, y: 900, size: 80, color: 'rgba(184,115,51,0.08)', speed: 0.1, rotation: -30 },
  { type: 'line', x: 80, y: 1800, size: 100, color: 'rgba(123,143,107,0.06)', speed: 0.14, rotation: 60 },
  { type: 'line', x: 20, y: 3200, size: 70, color: 'rgba(184,115,51,0.07)', speed: 0.16, rotation: -45 },
  { type: 'line', x: 75, y: 4400, size: 90, color: 'rgba(123,143,107,0.05)', speed: 0.12, rotation: 25 },

  // Small dots (grid accents)
  { type: 'dot', x: 25, y: 400, size: 6, color: 'rgba(184,115,51,0.15)', speed: 0.3, blur: 0 },
  { type: 'dot', x: 70, y: 1000, size: 5, color: 'rgba(123,143,107,0.12)', speed: 0.28, blur: 0 },
  { type: 'dot', x: 30, y: 1600, size: 7, color: 'rgba(184,115,51,0.13)', speed: 0.32, blur: 0 },
  { type: 'dot', x: 85, y: 2400, size: 5, color: 'rgba(123,143,107,0.14)', speed: 0.26, blur: 0 },
  { type: 'dot', x: 18, y: 3400, size: 6, color: 'rgba(184,115,51,0.12)', speed: 0.3, blur: 0 },
  { type: 'dot', x: 78, y: 4600, size: 8, color: 'rgba(123,143,107,0.1)', speed: 0.24, blur: 0 },

  // Diamond shapes
  { type: 'diamond', x: 4, y: 1100, size: 14, color: 'rgba(184,115,51,0.1)', speed: 0.22, rotation: 0 },
  { type: 'diamond', x: 96, y: 2600, size: 12, color: 'rgba(123,143,107,0.08)', speed: 0.2, rotation: 0 },
  { type: 'diamond', x: 8, y: 3800, size: 16, color: 'rgba(184,115,51,0.09)', speed: 0.18, rotation: 0 },
  { type: 'diamond', x: 92, y: 5200, size: 10, color: 'rgba(123,143,107,0.11)', speed: 0.26, rotation: 0 },
];

function Shape({ shape, scrollY }) {
  const yOffset = scrollY * shape.speed;

  const baseStyle = {
    position: 'absolute',
    left: `${shape.x}%`,
    top: shape.y,
    transform: `translateY(${-yOffset}px)`,
    pointerEvents: 'none',
    willChange: 'transform',
    transition: 'none',
  };

  if (shape.type === 'circle') {
    return (
      <div
        style={{
          ...baseStyle,
          width: shape.size,
          height: shape.size,
          borderRadius: '50%',
          background: shape.color,
          filter: `blur(${shape.blur}px)`,
        }}
        aria-hidden="true"
      />
    );
  }

  if (shape.type === 'cross') {
    return (
      <div
        style={{
          ...baseStyle,
          width: shape.size,
          height: shape.size,
          transform: `translateY(${-yOffset}px) rotate(${shape.rotation || 0}deg)`,
        }}
        aria-hidden="true"
      >
        {/* Horizontal bar */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: 1.5,
            background: shape.color,
            transform: 'translateY(-50%)',
          }}
        />
        {/* Vertical bar */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 1.5,
            background: shape.color,
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    );
  }

  if (shape.type === 'line') {
    return (
      <div
        style={{
          ...baseStyle,
          width: shape.size,
          height: 1,
          background: shape.color,
          transform: `translateY(${-yOffset}px) rotate(${shape.rotation || 0}deg)`,
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      />
    );
  }

  if (shape.type === 'dot') {
    return (
      <div
        style={{
          ...baseStyle,
          width: shape.size,
          height: shape.size,
          borderRadius: '50%',
          background: shape.color,
        }}
        aria-hidden="true"
      />
    );
  }

  if (shape.type === 'diamond') {
    return (
      <div
        style={{
          ...baseStyle,
          width: shape.size,
          height: shape.size,
          background: shape.color,
          transform: `translateY(${-yOffset}px) rotate(45deg)`,
        }}
        aria-hidden="true"
      />
    );
  }

  return null;
}

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {SHAPES.map((shape, i) => (
        <Shape key={i} shape={shape} scrollY={scrollY} />
      ))}
    </div>
  );
}
