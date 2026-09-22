import { useI18n } from '../../i18n';
import { Section } from '../../components/ui/Section';
import { Reveal } from '../../components/ui/Reveal';
import { Chip } from '../../components/ui/Chip';
import { RichText } from '../../components/ui/RichText';
import { experience } from '../../content/experience';

export function Experience() {
  const { t, locale } = useI18n();

  return (
    <Section id="experience" index="01" kicker={t.experience.kicker} title={t.experience.title}>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6">
        {experience.map((item) => (
          <Reveal
            key={item.company}
            className="rounded-[10px] border border-line border-l-[3px] border-l-accent bg-panel p-6 sm:p-7 lg:h-full lg:rounded-2xl lg:p-9"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-ink lg:text-2xl">{item.company}</h3>
              <span className="rounded-full border border-accent/35 bg-accent/[0.12] px-2.5 py-[3px] font-mono text-[10.5px] font-semibold tracking-wide text-green">
                {item.badge[locale]}
              </span>
              <span className="ml-auto font-mono text-xs text-dim">{item.period[locale]}</span>
            </div>
            <div className="mt-1.5 mb-4 text-sm font-medium text-cyan lg:text-base">{item.role[locale]}</div>
            <ul className="flex flex-col gap-2.5 lg:gap-3">
              {item.bullets.map((bullet) => (
                <li key={bullet[locale]} className="relative pl-6 text-[15px] text-dim lg:text-base">
                  <span className="absolute left-0 font-bold text-green">✓</span>
                  <RichText text={bullet[locale]} />
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-1.5 lg:mt-6">
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
