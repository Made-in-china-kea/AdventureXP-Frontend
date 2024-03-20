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
    },
  },
  plugins: [daisyui],
}
