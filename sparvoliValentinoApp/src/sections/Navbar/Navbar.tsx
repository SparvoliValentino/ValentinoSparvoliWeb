import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useI18n } from '../../i18n';
import { useActiveSection } from '../../hooks/useActiveSection';
import { CloseIcon, MenuIcon } from '../../components/ui/icons';

const SECTION_IDS = ['hero', 'experience', 'projects', 'stack', 'education', 'contact'];
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

export function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  // Lags `open` by one frame so the drawer first paints off-screen, then
  // transitions into view — mounting straight into the "open" position
  // would skip the CSS transition entirely.
  const [entered, setEntered] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);

  const links = [
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'stack', label: t.nav.stack },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ];

  // Mount the drawer off-screen when opening; drop `entered` immediately when
  // closing so the slide-out transition plays while it's still mounted
  // (unmount happens once that transition ends — see onTransitionEnd below).
  useEffect(() => {
    if (open) {
      setRendered(true);
    } else {
      setEntered(false);
    }
  }, [open]);

  // Once mounted, wait two animation frames (so the browser paints the
  // off-screen position first) before flipping to "entered" — otherwise the
  // slide-in transition would be skipped entirely. Also locks body scroll
  // and moves focus into the drawer while it's rendered. Uses a timer
  // (not requestAnimationFrame) to flip to "entered" a tick after mount:
  // rAF can be starved in a backgrounded/non-composited tab, which would
  // leave the drawer permanently stuck off-screen with scroll already
  // locked — a timer fires regardless and is just as imperceptible.
  useEffect(() => {
    if (!rendered) return;
    const timer = window.setTimeout(() => setEntered(true), 20);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstFocusable?.focus();
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [rendered]);

  // Return focus to the hamburger once the drawer starts closing (skip the
  // initial mount, when it was never open to begin with).
  useEffect(() => {
    if (!open && wasOpenRef.current) triggerRef.current?.focus();
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] w-[min(100%-40px,1040px)] items-center justify-between gap-3 md:w-[min(100%-64px,1100px)] lg:w-[min(100%-96px,1280px)]">
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
            ref={triggerRef}
            type="button"
            aria-label={t.nav.menuLabel}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-line bg-white/[0.02] md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* Portaled to <body>: the header's backdrop-filter would otherwise become
          the containing block for these fixed elements and clip them to 60px. */}
      {rendered &&
        createPortal(
          <>
            <div
              aria-hidden="true"
              onClick={() => setOpen(false)}
              className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
                entered ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <nav
              id="mobile-nav-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label={t.nav.menuLabel}
              onTransitionEnd={(e) => {
                if (e.target === e.currentTarget && !entered) setRendered(false);
              }}
              className={`fixed inset-y-0 right-0 z-[70] flex w-[80%] max-w-[360px] flex-col gap-1 border-l border-line bg-bg px-5 pt-5 pb-6 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out md:hidden ${
                entered ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-ink">
                  <span className="text-green">&lt;</span>VS<span className="text-green">/&gt;</span>
                </span>
                <button
                  type="button"
                  aria-label={t.nav.closeMenuLabel}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-line bg-white/[0.02] p-2 text-dim hover:text-ink"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </div>

              <div
                role="group"
                aria-label={t.nav.langLabel}
                className="mb-3 flex w-fit overflow-hidden rounded-lg border border-line font-mono"
              >
                <button
                  type="button"
                  onClick={() => setLocale('es')}
                  className={`px-3 py-1.5 text-[12px] transition-colors ${
                    locale === 'es' ? 'bg-panel-2 text-ink' : 'text-dim'
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`px-3 py-1.5 text-[12px] transition-colors ${
                    locale === 'en' ? 'bg-panel-2 text-ink' : 'text-dim'
                  }`}
                >
                  EN
                </button>
              </div>

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
          </>,
          document.body,
        )}
    </header>
  );
}
