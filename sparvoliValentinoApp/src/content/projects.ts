import todoEscabioBanner from '../assets/TodoEscabio.png';
import refractorySrlVideo from '../assets/RefractorySRL.webm';
import techServiciosVideo from '../assets/TechServicios.webm';
import loviDecoVideo from '../assets/LoviDeco.webm';
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
   * (see TodoEscabio above) as soon as a screenshot is available.
   */
  image?: string;
  /** Autoplaying, muted, looping clip; takes precedence over `image`. */
  video?: string;
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
    video: refractorySrlVideo,
  },
  {
    id: 'techservicios',
    title: 'TechServicios',
    year: '2026',
    domain: 'techservicios.com.ar',
    type: { es: 'Cliente real · Landing page', en: 'Real client · Landing page' },
    description: {
      es: 'Landing para una empresa de reparación de techos, impermeabilización y pintura.',
      en: 'Landing page for a roof repair, waterproofing and painting company.',
    },
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    live: 'https://techservicios.com.ar/',
    video: techServiciosVideo,
  },
  {
    id: 'lovi',
    title: 'Loví Deco Bazar',
    year: '2026',
    domain: 'lovi.com.ar',
    type: { es: 'Cliente real · Full stack', en: 'Real client · Full stack' },
    description: {
      es: 'Tienda de deco y bazar **full stack**: panel admin con autenticación, gestión y carga de productos, y tienda pública.',
      en: '**Full-stack** decor and housewares store: authenticated admin panel, product management and uploads, and a public storefront.',
    },
    tech: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'D1', 'R2'],
    live: 'https://lovi.com.ar/',
    video: loviDecoVideo,
  },
];
