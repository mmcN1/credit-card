/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main": "url('./images/bg-main-desktop.png')",
        "card-front": "url('./images/bg-card-front.png')",
        "card-back": "url('./images/bg-card-back.png')"
      },
    },
  },
  plugins: [],
};
