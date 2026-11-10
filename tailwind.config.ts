import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bricolage)", "ui-sans-serif", "sans-serif"],
        serif: ["var(--font-instrument)", "ui-serif", "serif"],
        mono: ["var(--font-martian)", "ui-monospace", "monospace"],
      },
      colors: {
        rosa: {
          DEFAULT: "#E6007E",
          50: "#FFF0F7",
          100: "#FFD6E8",
          200: "#FFADD3",
          600: "#C4006B",
          700: "#9E0057",
        },
        vino: {
          DEFAULT: "#22081A",
          900: "#160511",
          800: "#2E0C24",
          700: "#44143A",
          600: "#5C1F4F",
        },
        blush: {
          DEFAULT: "#FFF4F7",
          200: "#FBE4EC",
          300: "#F5CFDD",
        },
        lima: {
          DEFAULT: "#D4FF3F",
          600: "#B8E61E",
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)'
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "sun-rise": {
          from: { transform: "translateY(45%)" },
          to: { transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        rise: "rise 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) both",
        "sun-rise": "sun-rise 1.8s cubic-bezier(0.2, 0.7, 0.1, 1) both",
        blink: "blink 1.4s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
        },
        screens: {
          '2xl': '1440px',
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
