// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://saifrashed.github.io',

	integrations: [
		starlight({
			title: 'Saif Rashed',
			description: 'Saif Rashed (24) is a programmer. In 2020 he began his bachelor program at the Amsterdam University of Applied Sciences in the field of Software Engineering. During this time he had placements at notable companies such as CERN, AMS-IX, and the Rabobank. After graduating cum laude, he then started his master’s program at the University of Amsterdam where he researched the use of artificial intelligence to improve the software engineering process.',
			social: {
				github: 'https://github.com/saifrashed',
			},
			sidebar: [
				{
					label: 'Blog',
					autogenerate: { directory: 'blog' },
				},
			],
		}),
	],
});
