import type { CSSProperties, ReactNode, Ref } from 'react';
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
  placeholderLabel: string;
  cardRef: Ref<HTMLDivElement>;
  topPx: number;
}

/**
 * Image-led project card: the screenshot (or placeholder mock) dominates,
 * title/description are compact underneath. The media itself links to the
 * live site (new tab) when one exists. `position: sticky` and
 * `transform-origin: 50% 0%` apply at every breakpoint so the stacking
 * effect (driven by `useStickyStack`) reads on mobile as well as desktop —
 * only the two-column vs. stacked layout changes at the `stack` breakpoint.
 */
export function ProjectCard({
  project,
  locale,
  index,
  total,
  liveLabel,
  placeholderLabel,
  cardRef,
  topPx,
}: ProjectCardProps) {
  const isContain = project.imageFit === 'contain';

  return (
    <div
      ref={cardRef}
      style={{ top: `${topPx}px`, transformOrigin: '50% 0%' }}
      className="sticky grid min-h-[420px] grid-cols-1 overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-[#0d1220] to-[#0a0e18] shadow-[0_-20px_60px_rgba(0,0,0,0.4)] stack:min-h-[500px] stack:grid-cols-[1.15fr_0.85fr]"
    >
      {/* Index badge lives at the card level (not over the media), so it never
          overlaps the placeholder's browser-chrome bar or a real screenshot's
          own top content. */}
      <span className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-bg/70 px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-white/85 backdrop-blur-md stack:top-5 stack:right-5">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      <MediaWrapper
        href={project.live}
        ariaLabel={`${liveLabel}: ${project.title}`}
        className={`group relative block aspect-[4/3] overflow-hidden border-b border-line stack:aspect-auto stack:border-r stack:border-b-0 ${
          isContain ? 'flex items-center justify-center p-6 stack:p-10' : ''
        }`}
        style={isContain ? { backgroundColor: project.imageBg } : undefined}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={
              isContain
                ? 'h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]'
                : 'absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]'
            }
          />
        ) : (
          <ProjectImagePlaceholder title={project.title} domain={project.domain} label={placeholderLabel} />
        )}
        {project.live && (
          // Always visible on touch layouts; revealed on hover from the `stack` breakpoint up.
          <span className="absolute right-4 bottom-4 rounded-full border border-accent/40 bg-bg/80 px-3 py-1.5 text-[12px] font-semibold text-green backdrop-blur-md transition-opacity duration-300 stack:opacity-0 stack:group-hover:opacity-100 stack:group-focus-visible:opacity-100">
            {liveLabel} ↗
          </span>
        )}
      </MediaWrapper>

      <div className="flex flex-col justify-center gap-2.5 p-5 stack:gap-3.5 stack:p-10 lg:p-12">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-[26px] font-extrabold tracking-tight text-ink stack:text-[30px] lg:text-[34px]">
            {project.title}
          </h3>
          <span className="ml-auto font-mono text-xs text-dim">{project.year}</span>
        </div>
        <span className="inline-block self-start rounded-full border border-orange/28 bg-orange/[0.08] px-2.5 py-[3px] font-mono text-[11px] text-orange">
          {project.type[locale]}
        </span>
        <p className="text-[14.5px] leading-relaxed text-dim lg:text-base">
          <RichText text={project.description[locale]} />
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface MediaWrapperProps {
  href?: string;
  ariaLabel: string;
  className: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Renders the card media as a new-tab link to the live site, or a plain box when there is none. */
function MediaWrapper({ href, ariaLabel, className, style, children }: MediaWrapperProps) {
  if (!href) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={className} style={style}>
      {children}
    </a>
  );
}
