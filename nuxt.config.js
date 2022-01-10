import axios from "axios"

let dynamicRoutes = () => {
return axios
  .get("http://blacksj6.beget.tech//wp-json/wp/v2/posts?page=1&per_page=20")
  .then(res => {
    return res.data.map(post => `/investor/${post.slug}`)
  })
}


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hdls-wrdprss-rest-api',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js"},
      { src: "https://unpkg.com/survey-vue"},
      { href: "https://unpkg.com/survey-vue/survey.min.css", type:"text/css", rel: "stylesheet"},
      { href: "https://unpkg.com/pattern.css", rel: "stylesheet"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/tags.server.js",
    "~/plugins/investors.js",
    "~/plugins/CustomPages.js",
    "~/plugins/swiper-component.js",
  ],

  generate: {
    routes: dynamicRoutes
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  target: 'static' // default is 'server'
}
