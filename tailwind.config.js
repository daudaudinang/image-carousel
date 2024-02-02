/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "mobile-sm": "280px",
      mobile: "350px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "desktop-xl": "1650px",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        flyDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        flyUp: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
        flyLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        flyRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        appear: {
          "0%": { opacity: "0", display: "none" },
          "100%": { opacity: "1", display: "block" },
        },
        hidden: {
          "0%": { opacity: "1", display: "block" },
          "100%": { opacity: "0", display: "none" },
        },
        skeleton: {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        spin: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" }
        },
        phoneRing: {
          "0%": {
            transform: "rotate(0) scale(1) skew(1deg)"
          },
          "10%": {
            transform: "rotate(-25deg) scale(1) skew(1deg)"
          },
          "20%": {
            transform: "rotate(25deg) scale(1) skew(1deg)"
          },
          "30%": {
            transform: "rotate(-25deg) scale(1) skew(1deg)"
          },
          "40%": {
            transform: "rotate(25deg) scale(1) skew(1deg)"
          },
          "50%": {
            transform: "rotate(0) scale(1) skew(1deg)"
          },
          "100%": {
            transform: "rotate(0) scale(1) skew(1deg)"
          },
        }
      },
      animation: {
        "fly-down": "flyDown 0.6s forwards",
        "fly-up": "flyUp 0.6s forwards",
        "fly-right": "flyRight 0.5s forwards",
        "fly-left": "flyLeft 0.5s forwards",
        "appear": "appear 0.5s forwards",
        "hidden": "hidden 0.5s forwards",
        "skeleton": "skeleton 1.4s ease infinite",
        "spin": "spin 3s linear infinite",
        "phone-ring": "phoneRing 2s ease infinite"
      }
    },
  },
  plugins: [],
};
