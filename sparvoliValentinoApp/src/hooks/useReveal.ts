import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Observes an element and flips `visible` to true once it enters the
 * viewport, so callers can trigger a one-shot reveal-on-scroll transition.
 * Immediately visible when the user prefers reduced motion.
 */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px', ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, visible };
}
