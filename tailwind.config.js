module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        primary: '#ffffff',
        primaryDark: '#e5e5e5',
        secondary: '#0f0f0f',
        accent: '#ffffff',
        textMain: '#ffffff',
        textLight: '#a3a3a3',
        surface: '#1a1a1a',
        darkBg: '#000000',
        success: '#ffffff',
        warning: '#ffffff',
        error: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}