/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
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
