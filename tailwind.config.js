/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footer_bg: "#0D5986",
        base_color: "#6fa0cd",
      },
    },
  },
  plugins: [],
};
