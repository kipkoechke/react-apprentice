import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1310px",
    },
    fontFamily: {
      primary: "var(--font-poppins)",
      secondary: "var(--font-caveat)",
    },
    extend: {
      colors: {
        primary: "#0f1017",
        secondary: {
          DEFAULT: "#1b1c23",
          hover: "#1f212d",
        },
        tertiary: {
          DEFAULT: "#26272e",
          hover: "#24252c",
        },
        accent: {
          DEFAULT: "#e14817",
          hover: "#cb4419",
        },
        grey: "737373",
      },
      backgroundImage: {
        hero_bg1: "url('/assets/hero/hero_bg1.jpg')",
        hero_bg2: "url('/assets/hero/hero_bg2.jpg')",
        pattern: "url('/assets/pattern_bg.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
