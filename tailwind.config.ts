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
        color3: "#091057",
        color4: "#FF6600",
        color5: "#E95A00",
        color6: "#90CC57",
        color7: "#E98F92",
        color8: "#F2F6F8",
        color9: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
