import { useI18n } from '../../i18n';
import { Section } from '../../components/ui/Section';
import { Reveal } from '../../components/ui/Reveal';
import { Chip } from '../../components/ui/Chip';
import { RichText } from '../../components/ui/RichText';
import { experience } from '../../content/experience';

export function Experience() {
  const { t, locale } = useI18n();

  return (
    <Section
      id="experience"
      index="01"
      kicker={t.experience.kicker}
      title={t.experience.title}
      sub={t.experience.sub}
    >
      <div className="flex flex-col gap-4">
        {experience.map((item) => (
          <Reveal
            key={item.company}
            className="rounded-[10px] border border-line border-l-[3px] border-l-accent bg-panel p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-ink">{item.company}</h3>
              <span className="rounded-full border border-accent/35 bg-accent/[0.12] px-2.5 py-[3px] font-mono text-[10.5px] font-semibold tracking-wide text-green">
                {item.badge[locale]}
              </span>
              <span className="ml-auto font-mono text-xs text-dim">{item.period[locale]}</span>
            </div>
            <div className="mt-1.5 mb-4 text-sm font-medium text-cyan">{item.role[locale]}</div>
            <ul className="flex flex-col gap-2.5">
              {item.bullets.map((bullet) => (
                <li key={bullet[locale]} className="relative pl-6 text-[15px] text-dim">
                  <span className="absolute left-0 font-bold text-green">✓</span>
                  <RichText text={bullet[locale]} />
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li key={tag}>
                  <Chip>{tag}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
