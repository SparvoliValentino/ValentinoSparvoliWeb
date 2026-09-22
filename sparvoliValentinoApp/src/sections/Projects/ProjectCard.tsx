import type { Ref } from 'react';
import type { Project } from '../../content/projects';
import type { Locale } from '../../i18n';
import { RichText } from '../../components/ui/RichText';
import { Chip } from '../../components/ui/Chip';
import { ProjectImagePlaceholder } from './ProjectImagePlaceholder';

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  index: number;
  total: number;
  liveLabel: string;
  codeLabel: string;
  placeholderLabel: string;
  cardRef: Ref<HTMLDivElement>;
  stackTopPx: number;
}

export function ProjectCard({
  project,
  locale,
  index,
  total,
  liveLabel,
  codeLabel,
  placeholderLabel,
  cardRef,
  stackTopPx,
}: ProjectCardProps) {
  return (
    <div
      ref={cardRef}
      style={{ top: `${stackTopPx}px` }}
      className="stack:sticky grid grid-cols-1 overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-[#0d1220] to-[#0a0e18] shadow-[0_-20px_60px_rgba(0,0,0,0.4)] stack:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="relative order-2 aspect-video overflow-hidden border-t border-line stack:order-1 stack:aspect-auto stack:border-t-0 stack:border-r">
        {project.image ? (
          <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <ProjectImagePlaceholder title={project.title} domain={project.domain} label={placeholderLabel} />
        )}
        <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-bg/60 px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-white/85 backdrop-blur-md">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div className="order-1 flex flex-col justify-center gap-3 p-6 stack:order-2 stack:p-10">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-[22px] font-bold text-ink">{project.title}</h3>
          <span className="ml-auto font-mono text-xs text-dim">{project.year}</span>
        </div>
        <span className="inline-block self-start rounded-full border border-orange/28 bg-orange/[0.08] px-2.5 py-[3px] font-mono text-[11px] text-orange">
          {project.type[locale]}
        </span>
        <p className="text-[14.5px] text-dim">
          <RichText text={project.description[locale]} />
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>
        <div className="mt-1 flex flex-wrap gap-2.5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-accent/40 bg-accent/[0.12] px-4 py-2 text-[13px] font-semibold text-green transition hover:bg-accent/20"
            >
              {liveLabel} ↗
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-4 py-2 text-[13px] font-semibold text-ink transition hover:border-accent hover:text-green"
            >
              {codeLabel} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
