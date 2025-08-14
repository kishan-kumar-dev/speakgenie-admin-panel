import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dbeeff",
          500: "#1971f2"
        }
      },
      boxShadow: {
        soft: "0 4px 20px rgba(2, 25, 55, 0.08)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: [],
} satisfies Config;
