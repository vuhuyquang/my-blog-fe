// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@@': '<rootDir>',
    'assets': '<srcDir>/assets'
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css'
  ]
})
