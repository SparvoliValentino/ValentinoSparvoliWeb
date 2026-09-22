import { useI18n } from '../../i18n';
import { Reveal } from '../../components/ui/Reveal';
import { Button } from '../../components/ui/Button';
import { profile } from '../../content/profile';

function ContactItem({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5 text-left">
      <span className="font-mono text-[11px] text-purple">{label}</span>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="text-[13.5px] font-medium break-words text-ink transition hover:text-green"
      >
        {value}
      </a>
    </div>
  );
}

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto w-[min(100%-40px,1040px)] md:w-[min(100%-64px,1100px)] lg:w-[min(100%-96px,1280px)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[14px] border border-line bg-panel px-5 py-8 text-center sm:px-8 md:px-12 md:py-12 lg:px-16 lg:py-16 lg:text-left">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(63,185,80,0.12),transparent_60%)]" />

            <div className="relative lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
              <div>
                <h2 className="mx-auto max-w-[640px] text-[clamp(1.6rem,6vw,2.6rem)] leading-tight font-extrabold tracking-tight text-ink lg:mx-0 lg:max-w-none lg:text-[3.1rem]">
                  {t.contact.headlinePrefix}
                  <span className="text-green">{t.contact.headlineHighlight}</span>
                  {t.contact.headlineSuffix}
                </h2>
                <p className="mx-auto mt-4 max-w-[520px] text-[15.5px] text-dim lg:mx-0 lg:mt-5 lg:max-w-[440px] lg:text-base">
                  {t.contact.sub}
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3 lg:mt-9 lg:justify-start">
                  <Button variant="primary" href={`mailto:${profile.email}`}>
                    {t.contact.ctaEmail}
                  </Button>
                  <Button variant="ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    {t.contact.ctaLinkedin} ↗
                  </Button>
                  <Button
                    variant="ghost"
                    href={profile.cvFile}
                    download={profile.cvFileName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contact.ctaCV}
                  </Button>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-3.5 gap-y-5 border-t border-line pt-7 sm:mt-11 md:flex md:flex-wrap md:justify-between lg:mt-0 lg:grid lg:grid-cols-1 lg:gap-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
                <ContactItem label={t.contact.emailLabel} value={profile.email} href={`mailto:${profile.email}`} />
                <ContactItem label={t.contact.phoneLabel} value={profile.phone} href={profile.phoneHref} />
                <ContactItem
                  label={t.contact.linkedinLabel}
                  value={profile.linkedinHandle}
                  href={profile.linkedin}
                  external
                />
                <ContactItem
                  label={t.contact.githubLabel}
                  value={profile.githubHandle}
                  href={profile.github}
                  external
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
