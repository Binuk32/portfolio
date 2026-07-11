import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // We nest our custom configurations directly inside the integration
      configFile: false, // Tells Astro not to look for a separate config file
      applyBaseStyles: true,
      theme: {
        extend: {
          animation: {
            'slow-blob': 'slow-blob 18s infinite linear alternate',
            'slow-blob-reverse': 'slow-blob-reverse 15s infinite linear alternate',
          },
          keyframes: {
            'slow-blob': {
              '0%': { transform: 'scale(1) translate(0px, 0px)' },
              '33%': { transform: 'scale(1.1) translate(30px, -50px)' },
              '66%': { transform: 'scale(0.9) translate(-20px, 40px)' },
              '100%': { transform: 'scale(1) translate(0px, 0px)' },
            },
            'slow-blob-reverse': {
              '0%': { transform: 'scale(1) translate(0px, 0px)' },
              '33%': { transform: 'scale(0.9) translate(-40px, 30px)' },
              '66%': { transform: 'scale(1.1) translate(50px, -20px)' },
              '100%': { transform: 'scale(1) translate(0px, 0px)' },
            },
          },
        },
      },
    }),
  ],
});