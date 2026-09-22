import type { Localized } from '../i18n';

export interface StackItem {
  name: string;
  main?: boolean;
  note?: Localized<string>;
}

export interface StackColumn {
  icon: string;
  title: Localized<string>;
  note: Localized<string>;
  items: StackItem[];
}

export const stack: StackColumn[] = [
  {
    icon: '🖥️',
    title: { es: 'Interfaces (Frontend)', en: 'Interfaces (Frontend)' },
    note: { es: 'Lo que el usuario ve y usa', en: 'What the user sees and touches' },
    items: [
      { name: 'Next.js', main: true, note: { es: 'uso diario', en: 'daily use' } },
      { name: 'TypeScript', main: true, note: { es: 'uso diario', en: 'daily use' } },
      { name: 'React', main: true },
      { name: 'Tailwind CSS' },
      { name: 'Storybook' },
    ],
  },
  {
    icon: '⚙️',
    title: { es: 'Servidores y datos (Backend)', en: 'Servers & data (Backend)' },
    note: { es: 'Lo que funciona por detrás', en: 'What runs behind the scenes' },
    items: [{ name: 'Node.js' }, { name: 'Express' }, { name: 'Nest.js' }, { name: 'MongoDB' }],
  },
  {
    icon: '🤝',
    title: { es: 'Trabajo en equipo', en: 'Teamwork' },
    note: { es: 'Cómo colaboro a diario', en: 'How I collaborate daily' },
    items: [
      { name: 'Git · GitHub · Bitbucket' },
      { name: 'Jira', note: { es: 'metodología ágil', en: 'agile methodology' } },
      { name: 'Figma' },
    ],
  },
];
