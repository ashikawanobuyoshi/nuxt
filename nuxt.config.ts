// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
      // Public keys that are exposed to the client
      public: {
          apiBase: 'https://studio-malias.g.kuroco.app'
      }
  },

  compatibilityDate: '2024-11-01',
})