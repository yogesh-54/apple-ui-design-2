/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        muted: "#86868b",
        divider: "#d2d2d7",
        surface: "#f5f5f7",
        applelink: "#2997ff",
        orangelabel: "#e8630a",
      },
    },
  },
  plugins: [],
};
