
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
      
      { name: 'description', content: 'Codecov is the leading, dedicated code coverage solution. Try Codecov for free now to help your developers find untested code and deploy changes with confidence.' },
      { name: 'title', content: 'Code Coverage Done Right | Codecov' },

      // OG Metas

      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://codecov.io/static/header-logo-pink.png' },
      { property: 'og:title', content: 'Code Coverage Done Right | Codecov' },
      { property: 'og:url', content: 'https://codecov-ness.netlify.app/' },
      { property: 'og:description', content: 'Codecov is the leading, dedicated code coverage solution. Try Codecov for free now to help your developers find untested code and deploy changes with confidence.' },
      { property: 'og:image', content: 'https://codecov.io/static/header-logo-pink.png' },

      // Twitter Metas

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://codecov-ness.netlify.app/' },
      { property: 'twitter:title', content: 'Code Coverage Done Right | Codecov' },
      { property: 'twitter:description', content: 'Codecov is the leading, dedicated code coverage solution. Try Codecov for free now to help your developers find untested code and deploy changes with confidence.' },
      { property: 'twitter:image', content: 'https://codecov.io/static/header-logo-pink.png' },

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
