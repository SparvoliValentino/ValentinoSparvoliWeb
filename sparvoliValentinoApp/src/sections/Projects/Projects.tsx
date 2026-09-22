import { useI18n } from '../../i18n';
import { Section } from '../../components/ui/Section';
import { useStickyStack } from '../../hooks/useStickyStack';
import { projects } from '../../content/projects';
import { profile } from '../../content/profile';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { t, locale } = useI18n();
  const { setCardRef, getTopPx } = useStickyStack(projects.length);

  return (
    <Section id="projects" index="02" kicker={t.projects.kicker} title={t.projects.title}>
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            index={i}
            total={projects.length}
            liveLabel={t.projects.liveLabel}
            placeholderLabel={t.projects.placeholderLabel}
            cardRef={setCardRef(i)}
            topPx={getTopPx(i)}
          />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[10px] border border-line px-[22px] py-3 text-sm font-semibold text-dim transition hover:border-accent hover:text-green"
        >
          {t.projects.moreLabel} ↗
        </a>
      </div>
    </Section>
  );
}
