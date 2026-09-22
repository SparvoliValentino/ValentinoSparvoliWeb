import { useI18n } from '../../i18n';
import { Section } from '../../components/ui/Section';
import { Reveal } from '../../components/ui/Reveal';
import { RichText } from '../../components/ui/RichText';
import { education } from '../../content/education';

export function Education() {
  const { t, locale } = useI18n();

  return (
    <Section
      id="education"
      index="04"
      kicker={t.education.kicker}
      title={t.education.title}
      sub={t.education.sub}
    >
      <div className="grid gap-3.5 md:grid-cols-3">
        {education.map((item) => (
          <Reveal key={item.title.es} className="flex flex-col gap-2 rounded-[10px] border border-line bg-panel p-5">
            <span className="font-mono text-xs text-green">{item.year}</span>
            <h3 className="text-[16px] leading-snug font-bold text-ink">{item.title[locale]}</h3>
            <div className="text-[13px] text-dim">{item.institution[locale]}</div>
            <p className="flex-1 text-[13.5px] text-dim">
              <RichText text={item.description[locale]} strongClassName="font-semibold text-green" />
            </p>
            {item.certUrl && (
              <a
                href={item.certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start border-b border-dashed border-cyan text-[12.5px] font-semibold text-cyan transition hover:border-green hover:text-green"
              >
                {t.education.certLabel} ↗
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
