/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e293b",
          secondary: "#0d9488",
          accent: "#f3f4f6",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [daisyui],
};
