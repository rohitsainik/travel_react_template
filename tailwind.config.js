/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B3C5D',
        gold: '#F4B400',
        background: '#F9FAFB',
        card: '#FFFFFF',
        text: {
          DEFAULT: '#1F2933',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-lg': '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
      },
    },
  },
  plugins: [],
}

