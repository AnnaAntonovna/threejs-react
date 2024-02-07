/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#08162F",
        secondary: "#F2F2F2",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "warm-gray": "#EDE4D6",
        "cold-gray": "#F2F2F2",
        "light-brown": "#B59473",
        "warm-golden": "#DAC58A",
        "warm-brown": "#A3784D",
        "dirty-pink": "#EFCDC8",
        "warm-blue": "#54B1C7",
        navy: "#003366",
        yellow: "#F6EF66",
        "dark-blue": "08162F",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "mouse-card": "url('/src/assets/cards/mouse.png')",
        "house-card": "url('/src/assets/cards/house.jpg')",
        "hummer-card": "url('/src/assets/cards/hummer.png')",
        "web-card": "url('/src/assets/cards/web.png')",
        "back-card": "url('/src/assets/cards/back.png')",
        "mouse-back-card": "url('/src/assets/cards/mouseBackBlue.png')",
        "house-back-card": "url('/src/assets/cards/houseBackBlue.png')",
        "hummer-back-card": "url('/src/assets/cards/hummerBackBlue.png')",
        "web-back-card": "url('/src/assets/cards/webBackBlue.png')",
      },
    },
  },
  plugins: [],
};
