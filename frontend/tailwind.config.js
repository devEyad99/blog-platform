/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0A66C2",
        darkBlue: "#004182",
        lightBlue: "#EAF3FA",
        lightGray: "#F3F2EF",
        darkGray: "#666666",
        mediumGray: "#8D8D8D",
        successGreen: "#31A24C",
        errorRed: "#D93025",
        warningYellow: "#FFCE45",
      },
    },
  },
  
  plugins: [],
};
