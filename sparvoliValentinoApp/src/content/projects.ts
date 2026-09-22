import mondBanner from '../assets/MondBanner.png';
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
  code?: string;
  /**
   * Screenshot for the project card. When left undefined, the card renders a
   * browser-window placeholder mock instead. Set this to a local image import
   * (see MOND below) as soon as a screenshot is available.
   */
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'todoescabio',
    title: 'TodoEscabio',
    year: '2026',
    domain: 'todoescabio-sn.vercel.app',
    type: { es: 'Cliente real · Tienda online', en: 'Real client · Online store' },
    description: {
      es: 'Tienda online para una licorería: **catálogo de productos y pedidos simples** para un comercio que vende todos los días.',
      en: 'Online store for a liquor shop: **product catalog and simple ordering** for a business that sells every day.',
    },
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    live: 'https://todoescabio-sn.vercel.app/home',
    // image: pending screenshot — drop the file in src/assets and import it here.
  },
  {
    id: 'refractory-srl',
    title: 'Refractory SRL',
    year: '2025',
    domain: 'refractorysrl.vercel.app',
    type: { es: 'Cliente real · Sitio corporativo', en: 'Real client · Corporate site' },
    description: {
      es: 'Sitio institucional para una **empresa industrial** de hornos y soluciones térmicas: presenta sus servicios y refuerza su imagen profesional.',
      en: 'Corporate website for an **industrial company** making ovens and thermal solutions: showcases services and reinforces its professional image.',
    },
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    live: 'https://refractorysrl.vercel.app/',
    // image: pending screenshot — drop the file in src/assets and import it here.
  },
  {
    id: 'mond',
    title: 'MOND',
    year: '2024',
    domain: 'mondsn.vercel.app',
    type: { es: 'Proyecto propio · E-commerce', en: 'Own project · E-commerce' },
    description: {
      es: 'E-commerce de indumentaria y accesorios enfocado en el descubrimiento de productos, navegación y una vidriera visualmente consistente.',
      en: 'Clothing and accessories e-commerce focused on product discovery, navigation and a visually consistent storefront.',
    },
    tech: ['React', 'Next.js', 'TypeScript', 'Google API'],
    live: 'https://mondsn.vercel.app/',
    code: 'https://github.com/SparvoliValentino/ImportedSN',
    image: mondBanner,
  },
];
