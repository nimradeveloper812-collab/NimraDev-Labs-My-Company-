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
          purple: '#6C3FFC', // Primary Purple
          accent: '#8B5CF6', // Accent Purple
          dark: '#0D0D14',   // Dark Navy Text/Accents
          lightBg: '#F8F9FC',// Background Light
          lightGray: '#E6E6E6', // Light Gray
          glow: 'rgba(108, 63, 252, 0.15)',
        },
        navy: {
          950: '#08080C',
          900: '#0D0D14',
          850: '#12121D',
          800: '#181827',
          700: '#232338',
          600: '#343452',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 10px 40px -5px rgba(108, 63, 252, 0.12)',
        'purple-glow-lg': '0 20px 50px -10px rgba(108, 63, 252, 0.18)',
        'glass-card': '0 10px 30px -5px rgba(13, 13, 20, 0.05)',
        'glass-light': '0 8px 30px 0 rgba(108, 63, 252, 0.08)',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #6C3FFC 0%, #8B5CF6 100%)',
        'light-mesh': 'radial-gradient(circle at 50% 0%, rgba(108, 63, 252, 0.08) 0%, rgba(248, 249, 252, 0) 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
