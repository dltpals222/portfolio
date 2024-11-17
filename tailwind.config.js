module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#00b4d8',
        dark: {
          bg: '#121212',
          text: '#ffffff'
        },
        light: {
          bg: '#ffffff',
          text: '#000000'
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '2xs': '0.65rem',
      }
    }
  },
  plugins: [],
  darkMode: 'class'
} 