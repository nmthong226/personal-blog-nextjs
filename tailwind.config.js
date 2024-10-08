/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        darkBlue: "#003fff",
        lightBlue: "#1cbaef",
        purpleBlue: "#6961F6",
        purplePink: "#D5256C",
        beige: '#f2f1ef',
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
      },
      animation: {
        roll: "roll 24s linear infinite",
        'grow-shrink': 'pulseGrowShrink 2s ease-in-out infinite',
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        pulseGrowShrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      screens: {
        sxl: "1280px",
        // media (min-width: 1180px){...},
        xs: "480px",
        // media (min-width: 480px){...},
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}