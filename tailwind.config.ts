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
        'bg-deep': '#0a0a1a',
        'bg-elevated': '#111132',
        'bg-glass': 'rgba(17, 17, 50, 0.6)',
        'accent-primary': '#7c3aed',
        'accent-glow': '#a78bfa',
        'accent-moon': '#fbbf24',
        'text-primary': '#e2e8f0',
        'text-muted': '#94a3b8',
        'text-heading': '#f1f5f9',
        'border-subtle': 'rgba(124, 58, 237, 0.2)',
        'star-color': '#ffffff',
        'cloud-color': 'rgba(148, 163, 184, 0.08)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
        'input': '8px',
      },
    },
  },
  plugins: [],
};
export default config;
