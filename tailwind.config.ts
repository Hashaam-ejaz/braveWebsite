import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: "0 3.78px 3.78px rgba(0, 0, 0, 0.25)", // Custom drop shadow
      },

      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        garamond: ['"EB Garamond"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
