import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  index: string;
  kicker: string;
  title: string;
  sub?: string;
  children: ReactNode;
  className?: string;
}

/** Consistent section shell: id + max-width wrap + numbered kicker/title/sub head. */
export function Section({ id, index, kicker, title, sub, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-[min(100%-40px,1040px)] md:w-[min(100%-64px,1040px)]">
        <Reveal className="mb-9 md:mb-12">
          <div className="mb-2 font-mono text-[12.5px] text-green">
            {index} — <span>{kicker}</span>
          </div>
          <h2 className="text-[clamp(1.7rem,5.5vw,2.4rem)] font-extrabold tracking-tight text-ink">{title}</h2>
          {sub && <p className="mt-2 max-w-[600px] text-[15.5px] text-dim">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
