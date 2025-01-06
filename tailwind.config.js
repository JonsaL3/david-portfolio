/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          hover: '#2563EB', // blue-600
        },
        secondary: {
          DEFAULT: '#10B981', // green-500
          hover: '#059669', // green-600
        }
      },
    },
  },
  plugins: [],
}