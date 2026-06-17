/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Tokens mapeados a variables CSS — el toggle de tema solo cambia
      // [data-theme] en <html> y todos estos colores se recalculan.
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        line: 'var(--line)',
      },
      fontFamily: {
        // Sora para display/cuerpo, IBM Plex Mono para etiquetas/metadatos.
        display: ["'Sora'", 'sans-serif'],
        body: ["'Sora'", 'sans-serif'],
        mono: ["'IBM Plex Mono'", 'monospace'],
      },
      maxWidth: {
        content: '1140px',
      },
      boxShadow: {
        hero: '0 24px 60px -30px rgba(0,0,0,.6)',
      },
      keyframes: {
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
