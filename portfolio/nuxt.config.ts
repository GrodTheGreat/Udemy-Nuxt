// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-20",
  devtools: { enabled: true, timeline: { enabled: true } },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    config: {
      darkMode: "class",
      plugins: [require("@tailwindcss/typography")],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "min-light",
            dark: "min-dark",
          },
        },
      },
    },
  },
});
