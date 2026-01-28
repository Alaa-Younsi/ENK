/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ADD8E6',
          DEFAULT: '#FFA07A',
          dark: '#303030',
          pink: '#FFB6C1'
        }
      }
    },
  },
  plugins: [],
}
