module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843","950":"#500724"},
        black: {
          900: "#000201",
          "900_7f": "#04080f7f",
          "900_3f": "#0000003f",
          "900_87": "#00020187",
          "900_7f1": "#0000007f",
          "900_19": "#00000019",
        },
        gray: {
          50: "#fef9f4",
          53: "#f8f8f8",
          100: "#f6f6f6",
          200: "#ededed",
          201: "#e7e7e7",
          500: "#8f8f8f",
          600: "#808080",
          700: "#5f6368",
          900: "#100d22",
          "500_87": "#8f8f8f87",
          "50_a3": "#f8f8f8a3",
        },
        deep_purple: { 500: "#5847ca" },
        red: { 300: "#d96d6d", 500: "#ea4335", A200: "#ff4f4f" },
        light_blue: { 600: "#009ee3" },
        light_green: { 300: "#a7bd83" },
        blue: { A200: "#4285f4" },
        green: { 600: "#34a853" },
        teal: { 300: "#56a1ad" },
        pink: { 700: "#ba4164" },
        deep_orange: { A400: "#ff1616" },
        yellow: { 100: "#fee3ca" },
        amber: { 500: "#fbbc04" },
        bluegray: {
          100: "#d9d9d9",
          400: "#878690",
          800: "#265e55",
          801: "#274b53",
          900: "#23292e",
          901: "#273032",
          902: "#343434",
        },
        orange: { 50: "#feefe0", 200: "#fece68", 400: "#ff9432" },
        indigo: { 900: "#113984", 901: "#172c70" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        'body': [
          'Roboto', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
            'sans': [
          'Roboto', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
      },
      backgroundImage: { gradient: "linear-gradient(135deg ,#273032,#274b53)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
