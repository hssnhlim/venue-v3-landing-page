import { h } from 'vue';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        // These are background colors
        "first-color": "#F2C8BC",
        "second-color": "#F1C78B",
        "third-color": "#F78D59",
        "fourth-color": "#F7AD9E",
        "fifth-color": "#F6F0E5",
        // End of background colors

        "primary-color": "#FF3208",
        // "background-color": "#FFD8B2"
      },
      backgroundImage: {
        'custom-gradient-top-right': 'linear-gradient(to top right, #f2c8bc 10%, #f1c78b 28%, #f78d59 51%, #f7ad9e 68%, #f6f0e5 95%)',
        'custom-gradient-top-left': 'linear-gradient(to top left, #f2c8bc 10%, #f1c78b 28%, #f78d59 51%, #f7ad9e 68%, #f6f0e5 95%)',
      },
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      height: {
        '100': '26rem'
      }
    },
  },
  plugins: [],
}

