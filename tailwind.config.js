/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E9BC62',
        secondary: '#261D12',
        background: '#F8F7F2',
        'surface-1': '#FFFFFF',
        'surface-2': '#EDEDED',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // We will add the font link in layout
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}