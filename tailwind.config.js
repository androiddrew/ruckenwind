/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        ubersans: ['Helvetica', 'Arial', 'sans-serif'],
        monospace: ['Monospace'],
      },
    },
  },
  // Used to set HEADER_COLOR values. This appears as a transparent overlay over top of a HEADER_COVER image.
  safelist: [
    'bg-gray-100/30',
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-300',
    'bg-gray-400',
    'bg-gray-500',
    'bg-gray-600',
    'bg-gray-700',
    'bg-gray-800',
    'bg-gray-900',
    'table-auto',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
