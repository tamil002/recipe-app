/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/bg1.jpg')",
        "veg": "url('/bg2.jpg')",
        "about": "url('/bg3.jpg')",
        "contact": "url('/bg4.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}