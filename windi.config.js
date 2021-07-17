import { defineConfig } from "windicss/helpers"

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        sneakers: "url('./src/assets/img/background-sneakers.webp')",
      }),
    },
  },
})
