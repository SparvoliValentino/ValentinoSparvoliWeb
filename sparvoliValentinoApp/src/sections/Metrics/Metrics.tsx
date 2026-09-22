import { useI18n } from '../../i18n';
import { Reveal } from '../../components/ui/Reveal';

export function Metrics() {
  const { t } = useI18n();

  return (
    <section id="metrics" className="pb-2">
      <div className="mx-auto grid w-[min(100%-40px,1040px)] grid-cols-2 gap-3 md:w-[min(100%-64px,1040px)] md:grid-cols-4 md:gap-3.5">
        {t.metrics.map((metric, i) => (
          <Reveal
            key={metric.label}
            delayMs={i * 60}
            className="rounded-[10px] border border-line bg-panel px-[18px] py-5"
          >
            <div className="font-mono text-[clamp(1.6rem,6vw,2.2rem)] leading-tight font-semibold text-green">
              {metric.num}
            </div>
            <div className="mt-2 text-[12.5px] leading-snug text-dim">{metric.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
