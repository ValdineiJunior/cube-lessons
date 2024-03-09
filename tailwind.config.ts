/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'pale-green': '#d3e6a4',
        'pale-orange': '#facd89',
        'pale-red': '#d06462',
        'pale-blue': '#85cbc9',
        'pale-yellow': '#ffeb3b',
        'pale-white': '#ffffff',
        'pale-gray': '#cccccc',
      },
    },
  },
  plugins: [],
}
