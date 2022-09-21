/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-duo-gradient': 'linear-gradient(129.86deg, #9572FC 20.08%, #43E7AD 53.94%, #E1D55D 88.57%)',
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 70.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
};
