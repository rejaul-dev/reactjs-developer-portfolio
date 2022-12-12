/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        FighterCoderTheme: {
          primary: "#EF4841",
          secondary: "#F59A0E",
          success:"#22C55E",
          accent: "#111827",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
