// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://plumberlakewoodohio.us',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
