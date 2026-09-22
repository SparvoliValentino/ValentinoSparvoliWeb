import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  index: string;
  kicker: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Consistent section shell: id + max-width wrap + a big, unmistakable title
 * with the numbered kicker kept only as a small mono detail above it.
 */
export function Section({ id, index, kicker, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto w-[min(100%-40px,1040px)] md:w-[min(100%-64px,1100px)] lg:w-[min(100%-96px,1280px)]">
        <Reveal className="mb-8 md:mb-10 lg:mb-14">
          <div className="mb-3 font-mono text-[11px] tracking-[0.2em] text-dim uppercase lg:text-[12px]">
            <span className="text-green">{index}</span> — {kicker}
          </div>
          <h2 className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] font-extrabold tracking-tight text-ink lg:text-[clamp(3.25rem,3.6vw,4.75rem)]">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
