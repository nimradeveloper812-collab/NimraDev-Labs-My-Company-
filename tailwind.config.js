/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#6D4CFF', // Primary brand color
          600: '#5B3BEB',
          700: '#4C28D4',
          800: '#3C1EAB',
          900: '#2A1182',
        },
        navy: {
          950: '#090D16',
          900: '#0F172A', // Secondary slate dark color
          800: '#1E293B',
          700: '#334155',
        },
        surface: {
          light: '#FFFFFF',
          card: '#F8FAFC',
          border: '#E2E8F0',
          darkCard: 'rgba(15, 23, 42, 0.65)',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(109, 76, 255, 0.25)',
        'glow-md': '0 0 30px rgba(109, 76, 255, 0.35)',
        'glow-lg': '0 0 50px rgba(109, 76, 255, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
