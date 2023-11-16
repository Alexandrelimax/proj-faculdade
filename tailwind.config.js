/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Bricolage: ['Bricolage Grotesque', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

