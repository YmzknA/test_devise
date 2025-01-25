module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      keyframes: {
        'pop-up': {
          '0%': { 
            transform: 'translateY(20px) scale(0.8)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(-5px) scale(1.05)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1'
          }
        },
        'hide-up': {
          '0%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(20px) scale(0.8)',
            opacity: '0'
          }
        }
      },
      animation: {
        'pop-up': 'pop-up 0.3s ease-out',
        'hide-up': 'hide-up 0.3s ease-out'
      }
    }
  },
  variants: {},
  plugins: [],
}
