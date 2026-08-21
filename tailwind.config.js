/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wellness: {
          bg: '#EAE6DC',
          cream: '#F4F0E6',
          card: '#F6F3EC',
          greenDark: '#0D3823',
          greenDeep: '#062B17',
          forest: '#0A3B22',
          footer: '#065F2B',
          sage: '#98AC8E',
          sageDark: '#788C6E',
          sageLight: '#CCD6C3',
          pillMuted: '#CBD5C3',
          pillSoft: '#DDD8CB',
          border: '#D9D3C3',
          textDark: '#1A2E20',
          textMuted: '#4F5E52',
          textLight: '#6B7A6E',
        }
      },
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        fraunces: ['"Fraunces"', 'Georgia', 'serif'],
        dm: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
