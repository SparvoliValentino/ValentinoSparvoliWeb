import { Fragment } from 'react';

/**
 * Renders `text`, turning `**bold**` markers into <strong> spans. Content
 * data files use this lightweight markup instead of raw HTML so copy stays
 * plain, typed strings.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
