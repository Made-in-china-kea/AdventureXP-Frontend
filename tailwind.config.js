import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        custom450: '450px',
        custom500: '500px',
      },
      colors: {
        'custom-bg-colour': '#fffffe',
        'custom-hl-colour': '#272343',
        'custom-txt-colour': '#2d334a',
        'custom-btn-colour': '#ffd803',
        'custom-btn-text-colour': '#272343',
      },
    },
  },
  plugins: [daisyui],
}
