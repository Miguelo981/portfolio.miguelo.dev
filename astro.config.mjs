import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.miguelo.dev/',
  output: 'hybrid',
  integrations: [
    tailwind({}),
    robotsTxt(),
  ],
  adapter: vercel()
});
