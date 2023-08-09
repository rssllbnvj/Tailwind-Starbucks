/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {

            colors: {
                light: '#ffffff',
                dark: '#000000',
                accent: '#00754a',
                daccent: '#1e3932',
                ligreen: '#f1f8f5',
                megreen: '#d4e9e2',
                star: '#D0EAE4',
                cream: '#f2f0eb',
                offwhite: '#f9f9f9',
                BlackSoft: 'rgba(0, 0, 0, .58)',
                penk: '#eb81a5',
                moss: '#006241',
                lavender: '#8f8bf4',
                yellow: '#f1ff67'
            },
            backgroundImage: {
                'pattern': "url('../img/pattern.png')",
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
}
