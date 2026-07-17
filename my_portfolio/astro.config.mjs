import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite'; // 👈 Imports the Tailwind v4 plugin

export default defineConfig({
  site: 'https://Binuk32.github.io',
  base: '/portfolio',
  output: 'static', // Ensures Astro builds static files
  vite: {
    plugins: [tailwind()], // 👈 Registers the plugin inside Vite's compiler
  }
});