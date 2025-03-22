import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true
		}),
		// Own directories path aliases
		alias: {
			'@page-fragments': './src/lib/page-fragments',
			'@components': './src/lib/components',
			'@utils': './src/lib/utils',
			'@stores': './src/lib/stores',
			'@styles': './src/lib/styles',
		},
	}
};

export default config;
