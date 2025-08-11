import type { prefetchComponents } from "nuxt/app";
import { onServerPrefetch } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/apollo'
  ],
  ssr: true,
  nitro: {
    preset: 'netlify',
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql',
      }
    }
  }
})
