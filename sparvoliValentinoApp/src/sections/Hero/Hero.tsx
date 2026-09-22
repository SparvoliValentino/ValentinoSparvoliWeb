import { useI18n } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { useScramble } from '../../hooks/useScramble';
import { useTilt } from '../../hooks/useTilt';
import { Button } from '../../components/ui/Button';
import { RichText } from '../../components/ui/RichText';
import { GithubIcon, LinkedinIcon } from '../../components/ui/icons';
import { profile } from '../../content/profile';

function IdRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline gap-3.5 border-b border-dashed border-line py-2.5 text-sm last:border-none lg:py-3 lg:text-[15px]">
      <span className="min-w-[110px] shrink-0 font-mono text-xs text-purple lg:min-w-[125px] lg:text-[12.5px]">
        {label}
      </span>
      <span className={accent ? 'font-semibold text-green' : 'font-medium text-ink'}>{value}</span>
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();
  const role = useScramble(t.hero.roles);
  const { ref: headingRef, visible } = useReveal<HTMLDivElement>();
  const { wrapRef, shellRef } = useTilt<HTMLDivElement>();
  const { card } = t.hero;

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-60px)] items-center overflow-clip py-10 md:min-h-0 md:py-24 lg:py-16"
    >
      <div className="pointer-events-none absolute -top-1/5 -right-1/4 h-[70vw] max-h-[700px] w-[70vw] max-w-[700px] rounded-full bg-[radial-gradient(circle,rgba(63,185,80,0.09),transparent_65%)]" />

      <div className="relative mx-auto grid w-[min(100%-40px,1040px)] min-w-0 grid-cols-1 items-center gap-10 md:w-[min(100%-64px,1100px)] md:grid-cols-[1.25fr_1fr] md:gap-14 lg:w-[min(100%-96px,1280px)] lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div ref={headingRef}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green/35 bg-green/10 px-3.5 py-1.5 font-mono text-xs text-green">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
            {t.hero.availability}
          </div>

          <h1 className="text-[clamp(2.3rem,9vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-ink lg:text-[clamp(3.75rem,4.6vw,5.375rem)]">
            <span className={`line-mask ${visible ? 'in' : ''}`}>
              <span>{t.hero.headlineLine1}</span>
            </span>
            <span className={`line-mask ${visible ? 'in' : ''}`}>
              <span className="bg-gradient-to-r from-green via-cyan to-purple bg-clip-text text-transparent">
                {t.hero.headlineLine2}
              </span>
            </span>
          </h1>

          <div className="mt-3.5 flex items-center gap-2 font-mono text-[clamp(1.05rem,4vw,1.25rem)] font-semibold text-cyan lg:text-[1.45rem]">
            <span aria-hidden="true" className="text-dim">
              &gt;
            </span>
            <span>{role}</span>
          </div>

          <p className="mt-4 max-w-[540px] text-[16.5px] text-dim lg:mt-5 lg:max-w-[600px] lg:text-[19px]">
            <RichText text={t.hero.sub} />
          </p>

          <div className="mt-7 flex flex-wrap gap-3 lg:mt-9 lg:gap-4">
            <Button variant="primary" href="#projects" className="lg:px-7 lg:py-4 lg:text-base">
              {t.hero.ctaPrimary}
            </Button>
            <Button
              variant="ghost"
              href={profile.cvFile}
              download={profile.cvFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:px-7 lg:py-4 lg:text-base"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-5 lg:mt-9 lg:gap-7">
            <a
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-dim transition hover:-translate-y-0.5 hover:text-ink"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-[17px] w-[17px]" />
              {t.hero.githubLabel}
            </a>
            <a
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-dim transition hover:-translate-y-0.5 hover:text-ink"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-[17px] w-[17px]" />
              {t.hero.linkedinLabel}
            </a>
          </div>
        </div>

        <div
          className="mx-auto hidden w-full max-w-[400px] md:block lg:max-w-[460px]"
          ref={wrapRef}
          style={{ perspective: '900px' }}
        >
          <div
            ref={shellRef}
            className="relative rounded-[30px] border border-line bg-gradient-to-b from-white/5 to-transparent p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.45)] transition-transform duration-300"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[21px] object-cover object-[center_18%]"
            />
            <div
              className="absolute right-2 bottom-6 rounded-2xl border border-line bg-bg/85 px-4 py-3 shadow-lg backdrop-blur-md sm:-right-6"
              style={{ transform: 'translateZ(46px)' }}
            >
              <p className="font-mono text-[9.5px] tracking-[0.18em] text-dim uppercase">
                {t.hero.portraitMetaLabel}
              </p>
              <p className="text-[13.5px] font-semibold text-ink">{t.hero.portraitMetaValue}</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[10px] border border-line bg-panel shadow-[0_16px_48px_rgba(0,0,0,0.45)] lg:mt-7">
            <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-[11px] lg:px-5 lg:py-3">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11.5px] text-dim lg:text-[12.5px]">{card.title}</span>
            </div>
            <div className="px-[18px] py-5 sm:px-[22px] sm:py-6 lg:px-6 lg:py-7">
              <IdRow label={card.roleLabel} value={card.roleValue} />
              <IdRow label={card.specialtyLabel} value={card.specialtyValue} />
              <IdRow label={card.experienceLabel} value={card.experienceValue} />
              <IdRow label={card.englishLabel} value={card.englishValue} />
              <IdRow label={card.locationLabel} value={card.locationValue} />
              <IdRow label={card.statusLabel} value={card.statusValue} accent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
