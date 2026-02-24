/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kente: {
          gold: '#D4A017',
          orange: '#C8651B',
          red: '#C8391B',
          green: '#2D6A4F',
          black: '#1A1209',
        },
        ankara: {
          purple: '#4A1D96',
          teal: '#0D7377',
          magenta: '#8B1A4A',
        },
        cream: '#FDF4E7',
        'warm-brown': '#6B3A1F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'kente-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(200, 101, 27, 0.15)',
        'warm-lg': '0 8px 40px rgba(200, 101, 27, 0.2)',
      },
    },
  },
  plugins: [],
}
