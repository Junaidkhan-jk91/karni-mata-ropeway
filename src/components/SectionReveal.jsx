/**
 * @component SectionReveal
 * Wrapper component that adds scroll-triggered reveal animations
 * using AOS (Animate On Scroll). Wraps any section content with
 * configurable animation, delay, and duration.
 */

export default function SectionReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  offset = 80,
  once = true,
  className = '',
}) {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-offset={offset}
      data-aos-once={once}
      className={className}
    >
      {children}
    </div>
  );
}
