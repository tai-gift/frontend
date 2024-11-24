import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fustat: ["var(--font-fustat)"],
        luckiestGuy: ["var(--font-luckiestGuy)"],
      },
      borderRadius: {
        "9": "9.13px",
      },
      colors: {
        primary: {
          DEFAULT: "#1570EF",
          100: "#F2F7FF",
          200: "#E8F2FF",
          300: "#F9F9F9",
          400: "#00EDBE",
        },
        grey: {
          100: "#EFEFEF",
          200: "#F5F5F5",
          300: "#BDC0C3",
          400: "#DBDDE0",
          500: "#F3F3F3",
          600: "#2C2D2E",
          700: "#2B2C2D",
          800: "#2E333A",
        },
        CharcoalGrey: "#414141",
        FuscousGrey: {
          100: "#59584E",
          200: "#515043",
        },
        BlackEel: "#43423B",
        PastelGrey: "#D3D0C1",
        SmokeyGrey: "#727272",
        Zeus: "#252422",
        BlackCow: "#4C4C48",
        Liver: "#4F4E47",
        CaribbeanGreen: "#0BCE9D",
        DimorphothecaMagenta: "#E01C98",
        DeepFuchsia: "#C83EB8",
        HeavyMetal: "#2E2D2A",
        BlazeOrange: "#FF6600",
        RubberDuckyYellow: "#FFD700",
        NeonPink: "#EB3BA8",
      },
    },
    backgroundImage: {
      // donationImage: "url(/images/front-view-positive-woman-with-cancer.png)",
      aboutBgImage: "url(/images/about-bg-image.png)",
      heroBgLinear:
        "linear-gradient(124.37deg, #1570EF 19.22%, #00EDBE 131.7%)",
      activeBgLinear:
        "linear-gradient(155.56deg, #DAC02E 15.62%, #E81899 104.34%)",
      tablebgLinear:
        "linear-gradient(278.27deg, #43423B -60.13%, #2E2D2A 78.23%)",
      countbgLinear:
        "linear-gradient(180deg, rgba(67, 66, 59, 0.2) 0%, rgba(81, 80, 67, 0.2) 100%)",
      blackbgLinear:
        "linear-gradient(278.27deg, #43423B -60.13%, #2E2D2A 78.23%)",
      leaderboardbgLinear: "linear-gradient(180deg, #1570EF 0%, #00EDBE 100%)",
      prizeLinearBg:
        "linear-gradient(97.13deg, #1570EF -22.24%, #00EDBE 109.96%)",
    },
    backdropBlur: {
      20: "20px",
    },
  },
  plugins: [],
} satisfies Config;
