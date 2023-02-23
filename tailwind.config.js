module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.75s linear",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.1)",
          },
          "50%": {
            opacity: 0.5,
            transform: "scale(0.7)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
