/** @type {import('tailwindcss').Config} */
module.exports = {
    // prefix: '', // ← үүнийг устгасан
    important: false,
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./public/**/*.html",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#7e22ce',
                secondary: "#080808",
                outlineColor: "#1F2123"
            }
        }
    },
    plugins: [],
};