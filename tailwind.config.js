/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F9D342',
          dark: '#F5C518',
        },
        secondary: {
          DEFAULT: '#3B82F6',
        },
        brown: {
          dark: '#5C4033',
        },
      },
    },
  },
  plugins: [],
}

