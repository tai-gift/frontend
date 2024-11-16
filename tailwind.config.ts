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
      donationImage: "url(/images/front-view-positive-woman-with-cancer.png)",
      aboutBgImage: "url(/images/about-bg-image.png)",
      activeBgLinear:
        "linear-gradient(155.56deg, #DAC02E 15.62%, #E81899 104.34%)",
      tablebgLinear:
        "linear-gradient(278.27deg, #43423B -60.13%, #2E2D2A 78.23%)",
      countbgLinear: "linear-gradient(180deg, #C83EB8 0%, #8808C3 100%)",
      blackbgLinear:
        "linear-gradient(278.27deg, #43423B -60.13%, #2E2D2A 78.23%)",
      leaderboardbgLinear: "linear-gradient(180deg, #FFCE00 0%, #F28212 100%)",
      dailyLinearBg:
        "linear-gradient(95.64deg, #FF6600 -19.54%, #FFD700 122.21%)",
      weeklyLinearBg:
        "linear-gradient(95.64deg, #CE0BB7 -19.54%, #FFD700 122.21%)",
      monthlyLinearBg:
        "linear-gradient(95.64deg, #F91EDF -19.54%, #8808C3 82.9%)",
    },
    backdropBlur: {
      20: "20px",
    },
  },
  plugins: [],
} satisfies Config;
