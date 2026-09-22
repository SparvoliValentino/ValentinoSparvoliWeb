import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

/** Fades and slides `children` into place the first time they scroll into view. */
export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
