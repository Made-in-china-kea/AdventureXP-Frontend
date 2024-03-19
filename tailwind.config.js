import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "450px",
      },
    },
  },
  plugins: [daisyui],
};
