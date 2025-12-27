/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6FA3E3",
        dark: "#1F1F1F",
        light: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
