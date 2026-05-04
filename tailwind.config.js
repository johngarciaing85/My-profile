/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#0a0a0b',
        'fondo-elev': '#111113',
        superficie: '#16161a',
        borde: '#1f1f23',
        'borde-claro': '#2a2a30',
        texto: '#ededee',
        'texto-suave': '#9a9aa3',
        'texto-tenue': '#5a5a63',
        acento: '#d4ff4a',
        'acento-suave': 'rgba(212, 255, 74, 0.08)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        cuerpo: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulso-acento': 'pulsoAcento 2s infinite',
        'desplazar': 'desplazar 50s linear infinite',
      },
      keyframes: {
        pulsoAcento: {
          '0%': { boxShadow: '0 0 0 0 rgba(212, 255, 74, 0.7)' },
          '70%': { boxShadow: '0 0 0 12px rgba(212, 255, 74, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(212, 255, 74, 0)' },
        },
        desplazar: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
