import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1717",
        wine: {
          50: "#FFF5F4",
          100: "#F8E7E4",
          200: "#E7C6C0",
          500: "#8A2D3B",
          600: "#6F2330",
          700: "#561A25",
          900: "#2E1118"
        },
        sand: {
          50: "#FFFDF8",
          100: "#F8F1E6",
          200: "#E9DDCC",
          500: "#C8A978"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(46, 17, 24, 0.12)",
        card: "0 18px 50px rgba(27, 23, 23, 0.08)"
      },
      borderRadius: {
        '3xl': '1.75rem'
      }
    }
  },
  plugins: []
};

export default config;
