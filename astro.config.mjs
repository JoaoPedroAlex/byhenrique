// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://byhenrique.pt',
  
  server: {
  host: true,
  port: 80,
},

  vite: {
  server: {
    allowedHosts: ['byhenrique.pt'],
  },
},

  integrations: [sitemap()],
});