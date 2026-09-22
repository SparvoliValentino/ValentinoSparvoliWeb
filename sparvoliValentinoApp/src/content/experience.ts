import type { Localized } from '../i18n';

export interface ExperienceItem {
  company: string;
  badge: Localized<string>;
  period: Localized<string>;
  role: Localized<string>;
  /** Bullet text may contain **bold** markers, rendered by <RichText>. */
  bullets: Localized<string>[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Finket',
    badge: { es: 'EMPLEO ACTUAL', en: 'CURRENT JOB' },
    period: { es: 'Jun 2025 — hoy', en: 'Jun 2025 — now' },
    role: { es: 'Desarrollador Frontend · Buenos Aires', en: 'Frontend Developer · Buenos Aires' },
    bullets: [
      {
        es: 'Construyo interfaces con **Next.js y TypeScript** en un producto fintech, dentro de un equipo ágil con revisión de código y sprints.',
        en: 'I build interfaces with **Next.js and TypeScript** for a fintech product, in an agile team with code review and sprints.',
      },
      {
        es: 'Aplico buenas prácticas de **accesibilidad, performance y componentes reutilizables**.',
        en: 'I apply good practices around **accessibility, performance and reusable components**.',
      },
    ],
    tags: ['Next.js', 'TypeScript', 'Fintech'],
  },
  {
    company: 'Freelance',
    badge: { es: 'EN PARALELO', en: 'ONGOING' },
    period: { es: '2024 — hoy', en: '2024 — now' },
    role: { es: 'Desarrollador Full-Stack · Remoto', en: 'Full-Stack Developer · Remote' },
    bullets: [
      {
        es: 'Sitios y tiendas online **de principio a fin**: diseño, desarrollo y publicación.',
        en: 'Websites and online stores **end to end**: design, build and ship.',
      },
      {
        es: 'Clientes reales que confían su negocio a mi trabajo: una empresa industrial y comercios locales.',
        en: 'Real clients trusting their business to my work: an industrial company and local stores.',
      },
    ],
    tags: ['Next.js', 'Tailwind', 'E-commerce'],
  },
];
