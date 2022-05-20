module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00b347'
        },
        secondary: '#eee',
        success: '#63D58B',
        danger: {
          DEFAULT: '#ff555d'
        }
      },
      screens: {
        // => @media (min-width: 640px 包含640) { ... }
        tablet: '640px', // 640~1279
        laptop: '1024px',
        desktop: '1280px' // 1280~
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
