/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      colors: {
        customPink: "#E92577",
      },
      borderRadius: {
        custom: "2rem",
      },
    },
  },
  plugins: [],
};
