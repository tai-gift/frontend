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
    },
  },
  plugins: [],
} satisfies Config;
