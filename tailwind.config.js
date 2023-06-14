/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.jsx", "./src/components/*.jsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        cred:"#A72608",
        cyellow:"#E1CA96",
        cblue:"#C2F4FF",
        page:"#E5F0F0",
        cblack:"#031426",
        cwhite:"#ccc",
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        montserrat:['Montserrat', 'sans-serif'],
        archivo:['Archivo', 'sans-serif']
      },
      
    },
  },
  darkMode: "class",
  plugins: [],
}

