/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                light: '#ffffff',
                dark: '#000000',
                accent: '#00754a',
                daccent: '#1e3932',
                ligreen: '#f1f8f5',
                megreen: '#d4e9e2'
            }
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
}
