/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      folded: "280px",
      xxs: "320px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        bounce: {
          "0%": {
            transform: "translate3d(0, 0, 0) rotate(0deg)",
          },
          "25%": {
            transform: "translate3d(0, 0, 0) rotate(90deg)",
          },
          "50%": {
            transform: "translate3d(0, 0, 0) rotate(180deg)",
          },
          "75%": {
            transform: "translate3d(0, 0, 0) rotate(270deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotate(360deg)",
          },
        },
        scale: {
          "0%": {
            transform: "scaleX(1)",
          },
          "25%": {
            transform: "scaleX(0.7)",
          },
          "50%": {
            transform: "scaleX(1)",
          },
          "75%": {
            transform: "scaleX(0.7)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bounce: "bounce 3.5s ease infinite",
        scale: "scale 1.5 ease-in infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("flowbite/plugin"),
    flowbite.plugin(),
  ],
};
