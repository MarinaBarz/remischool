
export default {
  mode: 'universal',
  cache: true,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { lang: "ru-RU" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: 'components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/style.scss'
  ],
  server: {
    port: 8009, // default: 3000
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/scroll.js'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
    }
  }
}
