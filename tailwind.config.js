/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mist: '#F5F8FB',
        ice: '#EAF2F9',
        ink: '#0B2845',
        ash: '#3B4A5C',
        mute: '#7B8A9A',
        brandBlue: '#1E5FA5',
        brandBlueDark: '#154680',
        brandTeal: '#2CA8A8',
        brandGreen: '#5EB33C',
        brandGreenLight: '#86C23E',
        brandGreenDark: '#4A8F2E',
      },
      fontFamily: {
        display: ['"Syne"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1E5FA5 0%, #2CA8A8 50%, #5EB33C 100%)',
        'brand-gradient-soft':
          'linear-gradient(135deg, rgba(30,95,165,0.08) 0%, rgba(44,168,168,0.06) 50%, rgba(94,179,60,0.08) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        'blob-float': 'blobFloat 18s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blobFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
