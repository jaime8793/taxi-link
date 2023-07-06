/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar_background': "url('../public/layered-waves-haikei (1).svg')",
      },
      colors: {
        'text': '#06181e',
        'background': '#eaf7fb',
        'primary-button': '#1d3f9a',
        'secondary-button': '#dcd4f7',
        'accent': '#3b1d9a',

    },
  },
},
  plugins: [],
}