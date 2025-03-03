/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        skyBlue: "#4488D9",
        brightOrange: "#F97F2B",
      },
      lineHeight: {
        0: "0%",
        1.5: "150%",
        1.75: "175%",
        2: "200%",
      },
    },
  },
  plugins: [],
};
