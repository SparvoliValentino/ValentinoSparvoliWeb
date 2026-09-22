import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './usePrefersReducedMotion';

const CHARS = '!<>-_\\/[]{}—=+*^?#';

/**
 * Cycles through `words`, decrypt/scramble-animating between each one, and
 * returns the currently displayed string. Falls back to swapping words
 * instantly when reduced motion is requested.
 */
export function useScramble(words: string[], intervalMs = 3600): string {
  const [display, setDisplay] = useState(words[0] ?? '');
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplay(words[0] ?? '');
    if (prefersReducedMotion() || words.length < 2) return;

    let frameId = 0;

    const scrambleTo = (text: string, from: string) => {
      const length = Math.max(from.length, text.length);
      const queue = Array.from({ length }, (_, i) => ({
        to: text[i] ?? '',
        start: Math.floor(Math.random() * 24),
        end: Math.floor(Math.random() * 24) + 18,
      }));
      let frame = 0;
      const step = () => {
        let out = '';
        let done = 0;
        for (const q of queue) {
          if (frame >= q.end) {
            done++;
            out += q.to;
          } else if (frame >= q.start) {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(out);
        frame++;
        if (done < queue.length) frameId = requestAnimationFrame(step);
      };
      step();
    };

    const timer = setInterval(() => {
      const previous = words[indexRef.current];
      indexRef.current = (indexRef.current + 1) % words.length;
      scrambleTo(words[indexRef.current], previous);
    }, intervalMs);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(frameId);
    };
  }, [words, intervalMs]);

  return display;
}
