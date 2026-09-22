import { useI18n } from '../../i18n';
import { Section } from '../../components/ui/Section';
import { Reveal } from '../../components/ui/Reveal';
import { stack } from '../../content/stack';

export function Stack() {
  const { t, locale } = useI18n();

  return (
    <Section id="stack" index="03" kicker={t.stack.kicker} title={t.stack.title}>
      <div className="grid gap-3.5 md:grid-cols-3 lg:gap-6">
        {stack.map((column) => (
          <Reveal
            key={column.title.es}
            className="rounded-[10px] border border-line bg-panel p-4 lg:rounded-2xl lg:p-7"
          >
            <h3 className="mb-1 text-[13px] font-bold text-ink lg:mb-2 lg:text-base">
              <span className="mr-2">{column.icon}</span>
              {column.title[locale]}
            </h3>
            <div className="mb-3 text-xs text-dim lg:mb-5 lg:text-[13px]">{column.note[locale]}</div>
            <ul className="flex flex-col gap-2 text-[14.5px] lg:gap-3 lg:text-base">
              {column.items.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-2.5 ${item.main ? 'font-semibold text-ink' : 'text-dim'}`}
                >
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-sm ${item.main ? 'bg-accent' : 'bg-line'}`} />
                  {item.name}
                  {item.note && (
                    <span className="ml-auto rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[10.5px] font-normal text-green">
                      {item.note[locale]}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
