/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "signiture-color-red": "#F38181",
      "signiture-color-green": "#EAFFD0",
      "signiture-color-blue": "#95E1D3",
      "signiture-color-yellow": "#FCE38A",
    },
  },
  plugins: [],
};
