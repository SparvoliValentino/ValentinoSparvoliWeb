import type { Localized } from '../i18n';

export interface EducationItem {
  year: string;
  title: Localized<string>;
  institution: Localized<string>;
  description: Localized<string>;
  certUrl?: string;
}

export const education: EducationItem[] = [
  {
    year: '2024',
    title: { es: 'Desarrollo Web Full-Stack', en: 'Full-Stack Web Development' },
    institution: { es: 'Henry Bootcamp', en: 'Henry Bootcamp' },
    description: {
      es: 'Graduado **con honores** — seleccionado para la plataforma Young Talents. Especialización en frontend.',
      en: 'Graduated **with honors** — selected for the Young Talents platform. Front-end specialization.',
    },
    certUrl: 'https://view.pok.tech/c/557989a3-fc29-4930-91dc-818814002da0',
  },
  {
    year: '2022',
    title: {
      es: 'Tecnicatura en Desarrollo de Videojuegos',
      en: 'Video Game Development Degree',
    },
    institution: { es: 'Universidad Abierta Interamericana', en: 'Universidad Abierta Interamericana' },
    description: {
      es: 'Título universitario técnico en creación y programación de videojuegos y simuladores.',
      en: 'University technical degree in video game and simulator creation and programming.',
    },
    certUrl:
      'https://registrograduados.siu.edu.ar/consulta.php?ah=st6532db7841e442.29748021&ai=registro_dngu%7C%7C92000001&tcm=popup&cGFyYW1ldHJv=eyJpZF90cmFtaX',
  },
  {
    year: 'CERT',
    title: { es: 'Inglés B2 — Cambridge', en: 'English B2 — Cambridge' },
    institution: { es: 'Certificación internacional', en: 'International certification' },
    description: {
      es: 'Me comunico con fluidez en equipos internacionales y leo/escribo documentación técnica en inglés.',
      en: 'I communicate fluently in international teams and read/write technical documentation in English.',
    },
  },
];
