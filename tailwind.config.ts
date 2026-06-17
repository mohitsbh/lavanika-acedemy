import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0043c8",
        "primary-container": "#0057ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#e5e8ff",
        "primary-fixed": "#dce1ff",
        "primary-fixed-dim": "#b6c4ff",
        secondary: "#006688",
        "secondary-container": "#00c1fd",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#004b65",
        tertiary: "#42535d",
        "tertiary-container": "#5a6b75",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#daebf7",
        surface: "#f9f9ff",
        "surface-dim": "#cfdaf2",
        "surface-bright": "#f9f9ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "surface-container-highest": "#d8e3fb",
        "surface-container-low": "#f0f3ff",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#111c2d",
        "on-surface-variant": "#434656",
        "inverse-surface": "#263143",
        "inverse-on-surface": "#ecf1ff",
        "inverse-primary": "#b6c4ff",
        outline: "#737688",
        "outline-variant": "#c3c5d9",
        background: "#f9f9ff",
        "on-background": "#111c2d",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        gutter: "16px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
        "container-padding": "20px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
