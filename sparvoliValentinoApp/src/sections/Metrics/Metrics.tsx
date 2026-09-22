import { useI18n } from '../../i18n';
import { Reveal } from '../../components/ui/Reveal';

export function Metrics() {
  const { t } = useI18n();

  return (
    <section id="metrics" className="pb-2 lg:pb-6">
      <div className="mx-auto grid w-[min(100%-40px,1040px)] grid-cols-2 gap-3 md:w-[min(100%-64px,1100px)] md:grid-cols-4 md:gap-3.5 lg:w-[min(100%-96px,1280px)] lg:gap-5">
        {t.metrics.map((metric, i) => (
          <Reveal
            key={metric.label}
            delayMs={i * 60}
            className="rounded-[10px] border border-line bg-panel px-[18px] py-5 lg:rounded-2xl lg:px-7 lg:py-8"
          >
            <div className="font-mono text-[clamp(1.6rem,6vw,2.2rem)] leading-tight font-semibold text-green lg:text-[2.9rem]">
              {metric.num}
            </div>
            <div className="mt-2 text-[12.5px] leading-snug text-dim lg:mt-3 lg:text-[14.5px]">{metric.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
