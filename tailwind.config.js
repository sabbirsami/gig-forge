/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#1dbf73",
            secondaryColor: "#D2F2E3",
            white: "#ffffff",
            whiteSecondary: "#b4b4b4",
            black: "#000000",
            errorColor: "#d63031",
        },
    },
    plugins: [require("daisyui")],
};
