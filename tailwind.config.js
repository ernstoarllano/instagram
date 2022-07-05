/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        phones: '468.32px 634.15px'
      },
      backgroundImage: {
        phone: 'url("../public/photos/home-phones.png")',
        chat: 'url("../public/photos/home-chat.png")',
      }
    },
  },
  plugins: [],
}
