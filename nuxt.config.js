
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'The Leading Code Coverage Solution | Codecov',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Default metas
      
      { hid: 'description', name: 'description', content: 'Codecov is the leading, dedicated code coverage solution. Try Codecov for free now to help your developers find untested code and deploy changes with confidence.' },
      { hid: 'title', name: 'title', content: 'Code Coverage Done Right | Codecov' },

      // OG Metas

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://codecov.io/static/header-logo-pink.png' },
      { hid: 'og:title', property: 'og:title', content: 'Code Coverage Done Right | Codecov' },
      { hid: 'og:url', property: 'og:url', content: 'https://codecov-ness.netlify.app/' },
      { hid: 'og:description', property: 'og:description', content: 'Codecov is the leading, dedicated code coverage solution. Try Codecov for free now to help your developers find untested code and deploy changes with confidence.' },
      { hid: 'og:image', property: 'og:image', content: 'https://codecov.io/static/header-logo-pink.png' },

      // Twitter Metas

      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://codecov-ness.netlify.app/' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Code Coverage Done Right | Codecov' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Codecov is the leading, dedicated code coverage solution. Try Codecov for free now to help your developers find untested code and deploy changes with confidence.' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://codecov.io/static/header-logo-pink.png' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
