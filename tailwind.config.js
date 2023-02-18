module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.75s linear",
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
      },
    },
  },
  plugins: [],
};
