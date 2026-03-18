import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build', // GitHub Pages usually likes 'docs' or 'build'
      assets: 'build',
      fallback: '404.html' // Best for SPA routing on GitHub
    }),
    paths: {
      // If your URL is jason.github.io/neversus, set base to '/neversus'
      // If using a custom domain, leave as empty string ''
      base: process.env.NODE_ENV === 'production' ? '' : '',
    }
  }
};

export default config;
