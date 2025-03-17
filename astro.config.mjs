// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
	output: 'server', // Tryb SSR
	adapter: node({
		mode: 'standalone',
	}),
	server: {
		port: process.env.PORT || 3000, // Używaj dynamicznie przypisanego portu przez Railway lub 3000 lokalnie
	},
});
