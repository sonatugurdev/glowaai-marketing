/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: "#5DB87A",
          dark: "#4A9A64",
          light: "#8ED4A8",
          muted: "#EDF7F0",
          pale: "#D6F0DE"
        },
        forest: {
          DEFAULT: "#0F2318",
          mid: "#1E3D2A",
          light: "#2D5A3E"
        },
        cream: {
          DEFAULT: "#FAFAF8",
          warm: "#F5F4F0"
        },
        ink: {
          DEFAULT: "#2A2A28",
          muted: "#6B6B65",
          soft: "#9A9A94"
        },
        line: "#E4E4E0"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }]
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};
