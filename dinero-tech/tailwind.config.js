/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-xs": "marquee 25s linear infinite", // Optional slower for smaller screens
      },
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  plugins: [],
};
