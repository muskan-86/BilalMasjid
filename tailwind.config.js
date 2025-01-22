/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add jsx and tsx here
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2560px', // This defines a custom screen size for 2560px and above
      },
      fontFamily: {
        jenson: ["Adobe Jenson Pro Regular"], // Use the correct font family name from Adobe Fonts
      },
      boxShadow: {
        'custom-light': '0 1px 9px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
