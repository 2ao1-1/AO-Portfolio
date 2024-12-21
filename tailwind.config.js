/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["ALT_ROGUE", "sans-serif"],
        secondFont: ["Architectural", "Open Sans"],
        third: ["antiquestories"],
      },
      colors: {
        Main: "#F5F5F5",
      },
      letterSpacing: {
        xs: ".5px",
        sm: "1px",
        md: "2px",
        lg: "3px",
      },
    },
  },
  plugins: [],
};
