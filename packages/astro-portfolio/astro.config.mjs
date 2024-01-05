import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import { resolve } from 'path';
// import * as url from 'url';
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __components = resolve('../components/src/lib');

const config = defineConfig({
  integrations: [svelte()],
  vite: {
    resolve: {
      alias: [
        {
          find: /\@(components|ui)/,
          replacement: () => __components + '/',
        }
      ]
    }
  }
});

// https://astro.build/config
export default config;
