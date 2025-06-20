/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      blush: '#fce3ec',
      lavender: '#e8e6f2',
      peach: '#ffe7cc',
      mint: '#d7f7f5',
      rose: '#ffccd5',
      cocoa: '#5f4b3b',
    },
    fontFamily: {
      elegant: ['"Playfair Display"', 'serif'],
    },
  },
},
  plugins: [],
};

