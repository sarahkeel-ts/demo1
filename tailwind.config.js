/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2A47',
          dark: '#081A2E',
          light: '#1E4068',
        },
        accent: {
          DEFAULT: '#B8924A',
          light: '#D4B273',
        },
        neutral: {
          bg: '#F8F7F4',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          muted: '#5A5A5A',
          border: '#E5E2DC',
        },
        success: '#2F7D5A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
