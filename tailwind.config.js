/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        FighterCoderTheme: {
          primary: "#0A192F",
          secondary:"#CCD6F6",
          success: "#64FFDA",
          accent: "#0E0E52",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
