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
        'custom-bg-colour': '#0f0e17',
        'custom-hl-colour': '#fffffe',
        'custom-txt-colour': '#a7a9be',
        'custom-btn-colour': '#ff8906',
        'custom-btn-text-colour': '#fffffe',
      },
    },
  },
  plugins: [daisyui],
}
