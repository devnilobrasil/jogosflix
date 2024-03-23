/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bgColor: "#242423",
      whiteColor: "#e0e1dd",
      redHover: "#d8315b"
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

