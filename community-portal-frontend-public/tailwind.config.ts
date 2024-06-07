import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '360': '360px',
        '1152':'1152px',
      },
      height:{
        '400':'400px',
      },
      fontSize: {
        '24':'24px',
        '16':'16px',
        '40':'40px',
      },
      boxShadow: {
        'event': '0px 6px 5px -1px rgba(0,0,0,0.59)',
      },
      colors: {
        'blue': '#305F81',
        'white':'#FFFFFF',
        'event-bg-gray':'#F9F9F9'
      },
      gap: {
        '36': '36px',
      },
      spacing: {
        '54': '54px',
        '36':'26px',
        '30':'30px',
      }
    },
  },
  plugins: [],
};
export default config;
