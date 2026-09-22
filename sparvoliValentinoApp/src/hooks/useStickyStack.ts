import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './usePrefersReducedMotion';

const STACK_TOP_PX = 76;
const TOP_STEP_PX = 12;

/**
 * Drives the "sticky stacking" project cards on every breakpoint (mobile
 * and desktop alike): each card is `position: sticky` with a slightly
 * larger `top` offset than the one before it (a visible deck edge), and as
 * the next card scrolls over it, this hook scales the current card down and
 * dims it slightly so the incoming card reads as being on top. Disabled
 * entirely under `prefers-reduced-motion`.
 */
export function useStickyStack(cardCount: number) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    let ticking = false;

    const reset = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.transform = '';
        card.style.filter = '';
      });
    };

    const update = () => {
      const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
      if (reduced || cards.length < 2) {
        reset();
        return;
      }
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        const next = cards[i + 1];
        const nextTop = STACK_TOP_PX + (i + 1) * TOP_STEP_PX;
        const nextRect = next.getBoundingClientRect();
        const cardHeight = card.getBoundingClientRect().height || 1;
        const t = Math.min(1, Math.max(0, 1 - (nextRect.top - nextTop) / cardHeight));
        const scale = 1 - t * 0.05;
        card.style.transform = `scale(${scale.toFixed(4)})`;
        card.style.filter = `brightness(${(1 - t * 0.35).toFixed(3)})`;
      });
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [cardCount]);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  const getTopPx = (index: number) => STACK_TOP_PX + index * TOP_STEP_PX;

  return { setCardRef, getTopPx };
}
