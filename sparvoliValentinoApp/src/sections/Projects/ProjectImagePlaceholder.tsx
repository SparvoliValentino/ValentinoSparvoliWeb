/**
 * Browser-window mock shown for projects that don't have a screenshot yet.
 * Swap it out for a real image by setting the project's `image` field in
 * `src/content/projects.ts` — the card then renders that instead.
 */
export function ProjectImagePlaceholder({
  title,
  domain,
  label,
}: {
  title: string;
  domain: string;
  label: string;
}) {
  return (
    <div className="flex h-full w-full flex-col bg-panel-2">
      <div className="flex items-center gap-2 border-b border-line bg-panel px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate rounded-md bg-panel-2 px-2.5 py-0.5 font-mono text-[10.5px] text-dim">
          {domain}
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="font-mono text-[11px] tracking-[0.14em] text-dim uppercase">{label}</span>
        <span className="bg-gradient-to-r from-green via-cyan to-purple bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </span>
      </div>
    </div>
  );
}
