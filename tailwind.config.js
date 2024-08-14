/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "hsl(218, 23%, 16%)",
        "customary-bg": "hsl(217, 19%, 24%)",
        "customary-lg": " hsl(150, 100%, 66%)",
        color: " hsl(193, 38%, 86%)",
      },
      spacing: {
        128: "30rem", // Custom size for 32rem
        144: "57px", // Custom size for 36rem
        142: "52px", // Custom size for 36rem
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
