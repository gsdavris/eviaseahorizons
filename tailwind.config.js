/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const safelist = ["h-64", "px-5", "min-h-[600px]", "opacity-50", "min-h-screen", "bg-[#009047]", "bg-[#ffdd00]"];
export const theme = {
    extend: {
        colors: {
            primary: "#003462",
            secondary: "#8bc751",
        }
    }
};
export const plugins = [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
];
