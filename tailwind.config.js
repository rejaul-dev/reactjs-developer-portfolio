/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        FighterCoderTheme: {
          primary: "#00FFFF",
          secondary:"#00AFDB",
          success: "#22C55E",
          accent: "#111827",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
