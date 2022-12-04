/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
       mapUK:"url(./src/images/mapUK.png)"
                })
    },
  },
  plugins: [],
}