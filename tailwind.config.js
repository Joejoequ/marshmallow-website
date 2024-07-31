/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0)",
        },
        gold: "#fff057",
        gray: {
          "100": "#202020",
          "200": "#1e1e1e",
        },
        tomato: "#ff6c35",
        dodgerblue: "#4887f6",
        darkseagreen: "#b2ebb4",
      },
      spacing: {},
      fontFamily: {
        fredoka: "Fredoka",
        "fugaz-one": "'Fugaz One'",
        "dm-sans": "'DM Sans'",
        "fredoka-one": "'Fredoka One'",
        "pt-mono": "'PT Mono'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      "26xl": "45px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
