import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#185ADB",
        color2: "#FFC947",
        color3: "#040003",
        color4: "#006BFF",
        color5: "#08C2FF",
        color6: "#2d8a1f",
        color7: "#BCF2F6",
        color8: "#F2F6F8",
        color9: "#F5F5F5",
        color10: "#f5f410",
        navy: {
          700: "#1a365d",
          800: "#153e75",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
