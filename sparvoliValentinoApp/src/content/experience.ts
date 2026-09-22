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
        es: 'Desarrollo **tres productos financieros en simultáneo**: una billetera digital, una plataforma de pagos y un sistema de gestión interna.',
        en: 'I develop **three financial products simultaneously**: a digital wallet, a payments platform and an internal management system.',
      },
      {
        es: 'Estoy a cargo de la **librería de componentes visuales** que usa todo el equipo — la base que hace que los productos se vean y funcionen consistentes.',
        en: 'I own the **visual component library** used by the whole team — the foundation that keeps every product consistent.',
      },
      {
        es: 'Trabajo en un **equipo ágil** con revisión de código diaria, planificación por sprints y entregas continuas.',
        en: 'I work in an **agile team** with daily code review, sprint planning and continuous delivery.',
      },
    ],
    tags: ['Next.js', 'TypeScript', 'Storybook', 'Fintech'],
  },
  {
    company: 'Freelance',
    badge: { es: 'EN PARALELO', en: 'ONGOING' },
    period: { es: '2024 — hoy', en: '2024 — now' },
    role: { es: 'Desarrollador Full-Stack · Remoto', en: 'Full-Stack Developer · Remote' },
    bullets: [
      {
        es: 'Sitios web y tiendas online **de principio a fin**: entiendo la necesidad del cliente, diseño, desarrollo y publico.',
        en: 'Websites and online stores **end to end**: I understand the client\'s need, design, build and ship.',
      },
      {
        es: 'Clientes reales que confían su negocio a mi trabajo: una empresa industrial y comercios locales.',
        en: 'Real clients trusting their business to my work: an industrial company and local stores.',
      },
    ],
    tags: ['Next.js', 'Tailwind', 'E-commerce'],
  },
];
