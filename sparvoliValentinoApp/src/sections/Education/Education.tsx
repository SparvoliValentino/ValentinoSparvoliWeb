import { useI18n } from '../../i18n';
import { Section } from '../../components/ui/Section';
import { Reveal } from '../../components/ui/Reveal';
import { RichText } from '../../components/ui/RichText';
import { education } from '../../content/education';

export function Education() {
  const { t, locale } = useI18n();

  return (
    <Section id="education" index="04" kicker={t.education.kicker} title={t.education.title}>
      <div className="grid gap-3 md:grid-cols-3 lg:gap-6">
        {education.map((item) => (
          <Reveal
            key={item.title.es}
            className="flex flex-col gap-1.5 rounded-[10px] border border-line bg-panel p-4 lg:gap-2.5 lg:rounded-2xl lg:p-7"
          >
            <span className="font-mono text-xs text-green lg:text-[13px]">{item.year}</span>
            <h3 className="text-[16px] leading-snug font-bold text-ink lg:text-[19px]">{item.title[locale]}</h3>
            <div className="text-[13px] text-dim lg:text-sm">{item.institution[locale]}</div>
            <p className="flex-1 text-[13.5px] text-dim lg:text-[15px]">
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
