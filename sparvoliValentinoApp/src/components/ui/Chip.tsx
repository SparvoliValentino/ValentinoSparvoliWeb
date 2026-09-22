/** Small mono-font tag used for tech stacks and category labels. */
export function Chip({ children }: { children: string }) {
  return (
    <span className="whitespace-nowrap rounded-md border border-cyan/25 bg-cyan/[0.08] px-2.5 py-[3px] font-mono text-[11px] text-cyan">
      {children}
    </span>
  );
}
