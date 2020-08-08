/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          '900': '#0f1b29',
          '600': '#e2e6ea',
          '800': '#333333'
        }
      },
      fontFamily: {
        'sans': ['Sailec Medium', 'Sailec Bold', 'Sailed Light', 'Sailed Light'],
        'bold': ['Sailec Bold'],
        'light': ['Sailec Light'],
        'thin': ['Sailec Thin']
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
