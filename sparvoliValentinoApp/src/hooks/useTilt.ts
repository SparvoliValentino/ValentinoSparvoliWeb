import { useEffect, useRef } from 'react';
import { hasFinePointer, prefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Applies a subtle 3D tilt to `shellRef` as the pointer moves over
 * `wrapRef`, gated to fine pointers (mouse/trackpad) and disabled entirely
 * under reduced motion.
 */
export function useTilt<T extends HTMLElement>(maxDeg = 9) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<T>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const shell = shellRef.current;
    if (!wrap || !shell) return;
    if (!hasFinePointer() || prefersReducedMotion()) return;

    const onMove = (e: MouseEvent) => {
      const rect = shell.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      shell.style.transform = `rotateY(${(px * maxDeg).toFixed(2)}deg) rotateX(${(-py * maxDeg).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      shell.style.transform = '';
    };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);
    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, [maxDeg]);

  return { wrapRef, shellRef };
}
