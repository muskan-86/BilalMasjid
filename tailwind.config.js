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
    },
  },
  plugins: [],
};
