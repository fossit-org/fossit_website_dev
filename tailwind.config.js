/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{js, jsx, ts, tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        red: {
          light: "#A72608",
          dark: "#FF3E00",
        },
        yellow:{
          light:"#E1CA96",
          dark:"#F2A900"
        },
        blue:{
          light:"#C2F4FF",
          dark:"#0B4F6C"
        },
        page:{
          light:"#E5F0F0",
          dark:"#031426"
        },
        black:{
          light:"#031426",
          dark:"#000000"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

