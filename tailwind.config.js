/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jadoo: {
          bg: "#FFFDF4",       // Warm, premium background from Figma
          purple: "#181E4B",   // Deep navy for text/headings
          orange: "#DF6951",   // Accent orange for highlights/primary buttons
          yellow: "#F1A501",   // Secondary accent for geometric shapes
          gray: "#5E6282",     // Soft gray for body copy/descriptions
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],    // Primary structural text
        volkhov: ["Volkhov", "serif"],        // Premium display headings
      }
    },
  },
  plugins: [],
}