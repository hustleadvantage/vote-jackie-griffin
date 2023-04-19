import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
// import netlify from '@astrojs/netlify/functions';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    image(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  // output: 'server',
  // adapter: netlify(),
});
