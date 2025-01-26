import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#f8f8f2",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUpAndBounce: {
          "0%": {
            transform: "translateY(30px)",
            opacity: "0",
          },
          "60%": {
            transform: "translateY(-10px)",
            opacity: "0.8",
          },
          "80%": {
            transform: "translateY(5px)",
            opacity: "0.9",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s ease-out forwards",
        slideBounce:
          "slideUpAndBounce 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        fade: "fadeIn 0.5s ease-in-out",
      },
    },
    plugins: [],
  },
} satisfies Config;
