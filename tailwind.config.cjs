/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
   
    fontFamily:{
      "inter": ['Inter', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        arseniColor: '#3D3D49',
        magentaColor: '#D11775',
      },
    },
  },
  plugins: [],
}
