import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        surface: {
          DEFAULT: "#0F172A",
          50: "#1E293B",
          100: "#334155",
        },
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#6366F1",
          dark: "#3730A3",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          light: "#8B5CF6",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#0891B2",
          light: "#22D3EE",
        },
        success: {
          DEFAULT: "#22C55E",
          hover: "#16A34A",
          light: "#4ADE80",
        },
        warning: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          light: "#FBBF24",
        },
        muted: {
          DEFAULT: "#94A3B8",
          light: "#CBD5E1",
          dark: "#64748B",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          card: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.12)",
          border: "rgba(255, 255, 255, 0.12)",
          borderGlow: "rgba(99, 102, 241, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(124, 58, 237, 0.15) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(6, 182, 212, 0.1) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
        "glass-lg": "0 12px 48px 0 rgba(0, 0, 0, 0.5)",
        "glow-primary": "0 0 25px -5px rgba(79, 70, 229, 0.4)",
        "glow-accent": "0 0 25px -5px rgba(6, 182, 212, 0.4)",
        "glow-secondary": "0 0 25px -5px rgba(124, 58, 237, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
