import type { SVGProps } from 'react';

/** Small inline SVG icons, kept dependency-free instead of pulling in FontAwesome. */

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.7 7c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.5 1.2A12 12 0 0 1 12 4.5c1 0 2 .1 2.8.4 2.4-1.6 3.5-1.2 3.5-1.2.7 1.7.3 3 .1 3.3a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2V22c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.3 7.7H1.5V22h3.8V7.7ZM3.4 1A2.4 2.4 0 1 0 3.4 5.8 2.4 2.4 0 0 0 3.4 1ZM22.5 13.8c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3V7.7H9.1V22H13v-7.1c0-1.9.4-3.8 2.8-3.8 2.4 0 2.4 2.2 2.4 3.9v7h3.9l.4-8.2Z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4.5h4l2 5-2.5 1.5a12 12 0 0 0 5.5 5.5l1.5-2.5 5 2V20a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 2.5 6.1 1.5 1.5 0 0 1 4 4.5Z"
      />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col gap-1 p-2">
      <span
        className={`block h-[2px] w-5 rounded-sm bg-ink transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`}
      />
      <span className={`block h-[2px] w-5 rounded-sm bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
      <span
        className={`block h-[2px] w-5 rounded-sm bg-ink transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
      />
    </span>
  );
}
