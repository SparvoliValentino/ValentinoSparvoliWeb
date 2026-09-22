/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d1117',
        panel: '#161b22',
        'panel-2': '#1c2129',
        line: '#30363d',
        ink: '#e6edf3',
        dim: '#9aa4af',
        green: '#7ee787',
        cyan: '#79c0ea',
        purple: '#d2a8ff',
        orange: '#ffa657',
        accent: '#3fb950',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      screens: {
        // Project cards switch from a stacked (image above content) to a
        // side-by-side layout at this width. Sticky stacking itself runs at
        // every breakpoint — this only toggles the card's internal layout.
        stack: '841px',
      },
    },
  },
  plugins: [],
};
