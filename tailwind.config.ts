import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        lora: ["var(--font-lora)", "Georgia", "serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      maxWidth: {
        'screen-xl': '75rem',
        'screen-2xl': '83.75rem'
      },
      boxShadow: {
        'cause-shadow': '0px 4px 17px 0px #00000008',
        'trip-card': '0px 8px 32px 0px rgba(26,8,0,0.15)',
      },
      transitionDuration: {
        '150': '150ms',
      },
      spacing: {
        '6.25': '6.25rem',
        '70%': '70%',
        '40%': '40%',
        '30%': '30%',
        '80%': '80%',
        8.5: '8.5rem',
        50: '50rem',
        51: "54.375rem",
        25: '35.625rem',
        29: '28rem',
        120: '120rem',
        45: '45rem',
        94: '22.5rem',
        85: '21rem',
        3.75: '3.75rem'
      },
      inset: {
        '5%': '5%',
        '35%': '35%'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '999': '999'
      },
      colors: {
        // WakaWithUS — Brand palette sampled directly from the logo
        ink: "#2A1808",            // primary text — logo dark brown
        stone: "#6E5D4E",          // muted text — warm taupe
        cloud: "#FFFFFF",          // pure white — page/section background
        line: "#EAE2D8",           // hairline borders (warm, subtle)
        forest: "#375A21",         // brand green — CTAs, marks, links
        forest_dark: "#2A4417",    // brand green hover
        clay: "#9A4715",           // brand rust-brown — secondary accent
        clay_dark: "#7A380F",      // rust-brown hover
        gold: "#D89717",           // brand gold (sun) — small highlights

        // Legacy tokens (mapped to brand colors for inner pages)
        primary: "#375A21",        // Brand Green — CTAs, headings, active states
        secondary: "#9A4715",      // Brand Rust-Brown — accents, navbars
        ivory: "#FFFFFF",          // Pure white — section fills, card backgrounds
        energy: "#D89717",         // Brand Gold — price badges, highlights
        mid_brown: "#7A380F",     // Dark rust — hover states
        light_green: "#5C8A3A",   // Light brand green

        // Dark theme colors (footer, hero, testimonials)
        darkmode: "#241608",       // Dark warm brown — footer/inner-page hero bg
        dark_grey: "#33200E",      // Deeper brown — card backgrounds on dark
        darklight: "#375A21",      // Brand green — light variant

        // Text colors
        muted: "#E6DCCD",         // Warm cream — muted text on dark sections
        midnight_text: "#2A1808", // Logo dark brown — primary text on light sections
        caramel: "#6E5D4E",       // Warm taupe — body text on light

        // System colors
        error: "#CF3127",
        warning: "#F4922A",       // Sun Orange (repurposed)
        success: "#52B788",       // Light Green for success

        // Borders & dividers
        border: "#E8D5C0",        // Warm cream border
        dark_border: "#4A1C08",  // Dark brown border

        // Section utilities
        section: "#8B5E3C",      // Warm brown for section overlays
        light_grey: "#4A3020",   // Dark brownish grey
        grey: "#FDF6EC",         // Ivory (repurposed for compat)

        // Gradient stops
        tealGreen: "#2D6A4F",    // Forest Green for gradients
        charcoalGray: "#4A3020", // Dark brown grey for gradients
        deepSlate: "#2C1200",    // Deep espresso
        slateGray: "#3D2010",    // Brownish slate
      },
      fontSize: {
        86: ["5.375rem", { lineHeight: "1.2" }],
        76: ["4.75rem", { lineHeight: "1.2" }],
        70: ["4.375rem", { lineHeight: "1.2" }],
        54: ["3.375rem", { lineHeight: "1.2" }],
        56: ["3.5rem", { lineHeight: "1.15" }],
        48: ["3rem", { lineHeight: "1.2" }],
        44: ["2.75rem", { lineHeight: "1.3" }],
        40: ["2.5rem", { lineHeight: "3rem" }],
        36: ["2.25rem", { lineHeight: "2.625rem" }],
        30: ["1.875rem", { lineHeight: "2.25rem" }],
        26: ["1.625rem", { lineHeight: "2.1rem" }],
        28: ["1.75rem", { lineHeight: "2.25rem" }],
        20: ["1.25rem", { lineHeight: "1.75rem" }],
        24: ["1.5rem", { lineHeight: "2rem" }],
        22: ["1.375rem", { lineHeight: "2rem" }],
        21: ["1.3125rem", { lineHeight: "1.875rem" }],
        18: ["1.125rem", { lineHeight: "1.5rem" }],
        17: ["1.0625rem", { lineHeight: "1.4875rem" }],
        16: ["1rem", { lineHeight: "1.6875rem" }],
        15: ["0.9375rem", { lineHeight: "1.375rem" }],
        14: ["0.875rem", { lineHeight: "1.225rem" }],
        13: ["0.8125rem", { lineHeight: "1.2rem" }],
        12: ["0.75rem", { lineHeight: "1.1rem" }],
        11: ["0.6875rem", { lineHeight: "1rem" }],
      },
      backgroundImage: {
        "start": "url('/images/work/bg-start.png')",
        "perk": "url('/images/perks/perk-bg.png')",
      },
      blur: {
        220: '220px',
        400: '400px',
      }
    },
  },
  plugins: [],
};
export default config;
