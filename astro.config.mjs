// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
	output: 'server', // Zmieniamy na tryb SSR
	adapter: node({ mode: 'standalone' }), // Node.js jako serwer
});
