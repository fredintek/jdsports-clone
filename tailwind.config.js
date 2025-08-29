/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // gothamPro: ["var(---font-gotham-pro)", "Arial", "sans-serif"],
        gothamPro: "var(--font-gotham-pro)",
      },
      colors: {
        "color-1": "#000000",
        "color-2": "#0d0d0d",
        "color-3": "#222222",
        "color-4": "#545454",
        "color-5": "#333333",
        "color-6": "#666666",
        "color-7": "#1a1a1a",
        "bg-1": "#ffed03",
      },
    },
  },
  plugins: [],
};
