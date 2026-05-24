import { defineConfig } from 'astro/config';
import tailwindcss      from '@tailwindcss/vite';
import sitemap          from '@astrojs/sitemap';
import vercel           from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://dauphinroyal.com',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Static by default; routes with `export const prerender = false`
  // (e.g. /api/contact) are deployed as Vercel serverless functions.
  output: 'hybrid',
  adapter: vercel(),
});
