const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    fontFamily:{
      inter:['Inter','san-serif',],
      roboto:['Roboto','san-serif'],
      helvetica:['Helvetica','san-serif']
    },
  
    extend: {
      colors:{
        'bgGray':"#F5F5F5",
        'textLightGray':"#BFBFBF",
        'textMediumGray':"#D8D8D8",
         'textGray':"#555555",
        'primaryBlue':'#11256D',
        'secondaryBlue':"#2D7DD2",
        'primaryYellow':"#FFBA08",
        'primaryGray':"#8A8A8A",
        'lightBlack':'#1A1A1A',
        'lightGray':"#777777",
        'mediumGray':"#444444",
        'white':"#fff",
        'black':"#000",
        'red':"#FF0000",
        'from':"#2575FC",
        'to':"#6A11CB",
        "text-black":"#1F232E"
      },
    
      gridTemplateColumns:{
        'footer': '40% 60%',
      }
      },
  },
  plugins: [],
}
