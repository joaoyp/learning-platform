/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        teal: {
          950: "#008080",
        },
      },
      fontFamily: {
        bitter: ['"Bitter', "serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/images/hero.jpg')",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
