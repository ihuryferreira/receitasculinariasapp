/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-gray-900': '#1a202c',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['light'],
    },
  },
  plugins: [],
}