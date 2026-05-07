import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070a",
          900: "#0b0d12",
          800: "#11141b",
          700: "#181c25",
          600: "#222734",
        },
        ember: {
          50: "#fff1f1",
          100: "#ffd9d9",
          200: "#ffb0b0",
          300: "#ff7a7a",
          400: "#ef4444",
          500: "#dc2626",
          600: "#b91c1c",
          700: "#991b1b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(220,38,38,0.35), 0 12px 40px -12px rgba(220,38,38,0.55)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(220,38,38,0.22), transparent 60%), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.6)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        pillGlow: {
          "0%,100%": {
            boxShadow:
              "0 0 0 0 rgba(220,38,38,0.55), 0 8px 24px -8px rgba(220,38,38,0.55)",
          },
          "50%": {
            boxShadow:
              "0 0 0 10px rgba(220,38,38,0), 0 12px 40px -8px rgba(220,38,38,0.7)",
          },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        "pill-glow": "pillGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
