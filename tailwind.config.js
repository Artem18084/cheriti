/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "mapUK": "url('./images/UKRAINE.svg')",
      }),
      boxShadow:{
        def:" 0px 8px 15px rgba(0, 0, 0, 0.1)",
        hov:"0px 15px 20px rgba(255,228,181, 0.4)"
      }
    },
  },
  plugins: [],
};
