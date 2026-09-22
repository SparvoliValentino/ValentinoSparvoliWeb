import mondBanner from '../assets/MondBanner.png';
import todoEscabioBanner from '../assets/TodoEscabio.png';
import refractorySrlBanner from '../assets/RefractorySRL.png';
import type { Localized } from '../i18n';

export interface Project {
  id: string;
  title: string;
  year: string;
  domain: string;
  type: Localized<string>;
  /** May contain **bold** markers, rendered by <RichText>. */
  description: Localized<string>;
  tech: string[];
  live?: string;
  /**
   * Screenshot for the project card. When left undefined, the card renders a
   * browser-window placeholder mock instead. Set this to a local image import
   * (see MOND below) as soon as a screenshot is available.
   */
  image?: string;
  /**
   * How `image` fills its frame. `cover` (default) crops to fill — best for
   * wide desktop screenshots. `contain` letterboxes instead — use it for a
   * phone/device mockup that already has its own background, paired with
   * `imageBg` so the letterbox matches instead of showing the card's own
   * gradient behind it.
   */
  imageFit?: 'cover' | 'contain';
  /** Background color behind a `contain`-fit image (see `imageFit`). */
  imageBg?: string;
}

export const projects: Project[] = [
  {
    id: 'todoescabio',
    title: 'TodoEscabio',
    year: '2026',
    domain: 'todoescabio-sn.vercel.app',
    type: { es: 'Cliente real · Tienda online', en: 'Real client · Online store' },
    description: {
      es: 'Tienda online para una licorería, con catálogo y pedidos simples.',
      en: 'Online store for a liquor shop, with a simple catalog and ordering flow.',
    },
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    live: 'https://todoescabio-sn.vercel.app/home',
    image: todoEscabioBanner,
    imageFit: 'contain',
    imageBg: '#262626',
  },
  {
    id: 'refractory-srl',
    title: 'Refractory SRL',
    year: '2025',
    domain: 'refractorysrl.vercel.app',
    type: { es: 'Cliente real · Sitio corporativo', en: 'Real client · Corporate site' },
    description: {
      es: 'Sitio institucional para una empresa industrial de hornos y soluciones térmicas.',
      en: 'Corporate site for an industrial company that builds ovens and thermal solutions.',
    },
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    live: 'https://refractorysrl.vercel.app/',
    image: refractorySrlBanner,
  },
  {
    id: 'mond',
    title: 'MOND',
    year: '2024',
    domain: 'mondsn.vercel.app',
    type: { es: 'Proyecto propio · E-commerce', en: 'Own project · E-commerce' },
    description: {
      es: 'E-commerce de indumentaria enfocado en descubrimiento de productos y navegación.',
      en: 'Clothing e-commerce focused on product discovery and navigation.',
    },
    tech: ['React', 'Next.js', 'TypeScript', 'Google API'],
    live: 'https://mondsn.vercel.app/',
    image: mondBanner,
  },
];
