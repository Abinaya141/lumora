export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#171717', sand: '#F5F1EB', clay: '#C47A52', body: '#262626' },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'none' } },
        pop: { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.35)' } },
      },
      animation: { rise: 'rise .9s cubic-bezier(.2,.7,.2,1) both', pop: 'pop .35s ease' },
    },
  },
  plugins: [],
}
