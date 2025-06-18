import defaultTheme from "tailwindcss/defaultTheme";
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
            colors: {
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                card: "hsl(var(--card) / <alpha-value>)",
                "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
                popover: "hsl(var(--popover) / <alpha-value>)",
                "popover-foreground": "hsl(var(--popover-foreground) / <alpha-value>)",
                primary: "hsl(var(--primary) / <alpha-value>)",
                "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
                secondary: "hsl(var(--secondary) / <alpha-value>)",
                "secondary-foreground": "hsl(var(--secondary-foreground) / <alpha-value>)",
                muted: "hsl(var(--muted) / <alpha-value>)",
                "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
                accent: "hsl(var(--accent) / <alpha-value>)",
                "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
                destructive: "hsl(var(--destructive) / <alpha-value>)",
                "destructive-foreground": "hsl(var(--destructive-foreground) / <alpha-value>)",
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                chart: {
                    "1": "hsl(var(--chart-1) / <alpha-value>)",
                    "2": "hsl(var(--chart-2) / <alpha-value>)",
                    "3": "hsl(var(--chart-3) / <alpha-value>)",
                    "4": "hsl(var(--chart-4) / <alpha-value>)",
                    "5": "hsl(var(--chart-5) / <alpha-value>)",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
                mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;

module.exports = {
    // existing config…
    theme: {
        extend: {
            boxShadow: {
                'xl/10': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
            },
            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(circle at 50% 50%, rgb(236 72 153 / 0.1), rgb(99 102 241 / 0.05) 60%, transparent 100%)',
            },
        },
    },
};
