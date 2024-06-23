/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        palette: {
		  light: '#f5f5f5',
          primary: '#1f2937',
          secondary: '#3b82f6',
          accent: '#f43f5e',
          muted: '#6b7280',
		  dark: '#111827',
		  hash: '#aaaaaa',
          major: '#58da3e', // RGB(88, 218, 62)
          majorLight: '#9ef58d', // Light shade of the major theme
          majorDark: '#2f8e2a', // Dark shade of the major theme
          background: '#111827', // Dark mode background
          text: '#ffffff', // Light text for dark mode
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

