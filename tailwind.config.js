/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": {
          DEFAULT: "#31C3BD",
        },
        "light-blue-hover": "#65E9E4",
        "light-yellow": "#F2B137",
        "light-yellow-hover": "#FFC860",
        "dark-navy": "#1A2A33",
        "semi-dark-navy": "#1F3641",
        silver: "#A8BFC9",
        "silver-hover": "#DBE8ED",
      },

      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      width: {
        "36px": "36px",
      },
      height: {
        "36px": "36px",
      },
      maxWidth: {
        "460px": "460px",
      },
      boxShadow: {
        "container-navy": "inset 0px -8px 0px #10212A",
        "button-turn": "inset 0px -4px 0px #10212A",
        "button-round": "inset 0px -4px 0px #6B8997",
      },
    },
  },

  plugins: [],
};
