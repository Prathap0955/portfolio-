/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: { 
      colors: {
        'custom-blue': '#00d4ff',
        'custom-green': '#28a745',
      },},
  },
  plugins: [],
}
