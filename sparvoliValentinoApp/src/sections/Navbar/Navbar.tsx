import { useState } from 'react';
import { useI18n } from '../../i18n';
import { useActiveSection } from '../../hooks/useActiveSection';
import { MenuIcon } from '../../components/ui/icons';

const SECTION_IDS = ['hero', 'experience', 'projects', 'stack', 'education', 'contact'];

export function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const links = [
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'stack', label: t.nav.stack },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] w-[min(100%-40px,1040px)] items-center justify-between gap-3 md:w-[min(100%-64px,1040px)]">
        <a href="#hero" className="font-mono text-sm font-semibold text-ink">
          <span className="text-green">&lt;</span>VS<span className="text-green">/&gt;</span>
        </a>

        <nav className="hidden gap-0.5 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors ${
                active === link.id ? 'bg-panel text-ink' : 'text-dim hover:bg-panel hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div
            role="group"
            aria-label={t.nav.langLabel}
            className="flex overflow-hidden rounded-lg border border-line font-mono"
          >
            <button
              type="button"
              onClick={() => setLocale('es')}
              className={`px-2.5 py-1.5 text-[11.5px] transition-colors ${
                locale === 'es' ? 'bg-panel-2 text-ink' : 'text-dim'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2.5 py-1.5 text-[11.5px] transition-colors ${
                locale === 'en' ? 'bg-panel-2 text-ink' : 'text-dim'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            aria-label={t.nav.menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-line bg-white/[0.02] md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-bg px-5 pb-3.5 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-[15px] font-medium text-dim last:border-none hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
