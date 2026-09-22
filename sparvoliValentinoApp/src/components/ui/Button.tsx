import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
}

const base =
  'inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border px-[22px] py-[13px] text-[14.5px] font-semibold transition-all duration-200 hover:-translate-y-px sm:flex-none';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'border-accent bg-accent text-[#06130b] hover:border-green hover:bg-green',
  ghost: 'border-line bg-panel text-ink hover:border-accent hover:text-green',
};

/** Shared CTA button, rendered as a link (every CTA in this site points somewhere). */
export function Button({ variant = 'ghost', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
