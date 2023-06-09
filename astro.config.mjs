import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.miguelo.dev/',
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
});
