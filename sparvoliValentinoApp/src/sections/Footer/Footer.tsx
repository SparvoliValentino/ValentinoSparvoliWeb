import { useEffect, useState } from 'react';
import { useI18n } from '../../i18n';

function readBuenosAiresTime(): string {
  const time = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${time} GMT-3`;
}

export function Footer() {
  const { t } = useI18n();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(readBuenosAiresTime());
    const id = setInterval(() => setTime(readBuenosAiresTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-line bg-panel-2">
      <div className="mx-auto flex w-[min(100%-40px,1040px)] flex-wrap items-center gap-4 py-3.5 font-mono text-[11.5px] text-dim md:w-[min(100%-64px,1040px)]">
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="text-green">●</span> {t.footer.status}
        </span>
        <span className="flex-1" />
        <span className="whitespace-nowrap">{t.footer.location}</span>
        <span className="whitespace-nowrap">{time ?? '--:-- GMT-3'}</span>
        <a href="#hero" className="whitespace-nowrap transition hover:text-ink">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
