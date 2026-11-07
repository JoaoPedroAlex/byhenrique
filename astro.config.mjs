// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://byhenrique.pt",

  redirects: {
    "/en/order": "/en/book/",
  },

  server: {
    host: true,
    port: 80,
  },

  vite: {
    server: {
      allowedHosts: ["byhenrique.pt"],
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !["/menus/", "/en/menus/"].includes(new URL(page).pathname),
    }),
  ],
});
