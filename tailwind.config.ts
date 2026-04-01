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
        // shadcn/ui CSS variable tokens
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input:  "rgb(var(--input) / <alpha-value>)",
        ring:   "rgb(var(--ring) / <alpha-value>)",
        // Opal Peptide design system tokens
        opal: {
          50:  "#f0f9fa",
          100: "#d9f0f3",
          200: "#b6e2e8",
          300: "#84ccD6",
          400: "#4AAFBE",
          500: "#1B8A9A",  // primary opal teal
          600: "#166F7D",
          700: "#115560",
          800: "#0E4450",
          900: "#0A303A",
          950: "#061E26",
        },
        navy: {
          50:  "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#102A43",
          950: "#0A1628",  // deep ink
        },
        pearl: {
          DEFAULT: "#F8FAFC",
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E9EEF4",
        },
        gold: {
          light: "#E8D5A3",
          DEFAULT: "#C9A96E",
          dark: "#A07840",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
      backgroundImage: {
        "opal-shimmer": "linear-gradient(135deg, #1B8A9A 0%, #5B8DEF 50%, #9B6DDB 100%)",
        "opal-subtle": "linear-gradient(135deg, #f0f9fa 0%, #e8eef8 50%, #f3eef8 100%)",
        "hero-gradient": "linear-gradient(180deg, #0A1628 0%, #0E2A45 60%, #112D40 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        "shimmer": "shimmer 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%":       { opacity: "1" },
        },
      },
      boxShadow: {
        card:   "0 1px 4px 0 rgba(10, 22, 40, 0.06), 0 4px 16px 0 rgba(10, 22, 40, 0.06)",
        "card-hover": "0 4px 12px 0 rgba(10, 22, 40, 0.10), 0 12px 40px 0 rgba(10, 22, 40, 0.12)",
        opal:   "0 0 0 3px rgba(27, 138, 154, 0.25)",
        gold:   "0 0 0 3px rgba(201, 169, 110, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
