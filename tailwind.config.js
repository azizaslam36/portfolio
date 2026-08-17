/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0E17',
          900: '#0E131F',
          800: '#131A29',
          700: '#1B2436',
          600: '#26324A',
        },
        paper: {
          50: '#FAF8F3',
          100: '#F4F1E9',
          200: '#E9E4D6',
        },
        ink: {
          900: '#161A22',
          700: '#3A4150',
          500: '#6B7280',
        },
        electric: {
          DEFAULT: '#1F6FEB',
          light: '#4B8CFF',
          dark: '#154FB0',
        },
        lime: {
          DEFAULT: '#B7F227',
          dark: '#93C915',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(22,26,34,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,26,34,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '36px 36px',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.5)',
        'card-light': '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 8px 24px -12px rgba(22,26,34,0.15)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
