/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#000000',
        accent: '#00754a'
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
