/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#1dbf73",
            secondaryColor: "#D2F2E3",
            white: "#ffffff",
            black: "#000000",
        },
    },
    plugins: [require("daisyui")],
};
