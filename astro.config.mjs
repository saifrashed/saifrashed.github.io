// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


const googleAnalyticsId = 'G-RPEB73M72F'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.saifrashed.com',

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
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Photography',
					autogenerate: { directory: 'photography' },
				},
			],
			head: [
				// Adding google analytics
				{
					tag: 'script',
					attrs: {
						src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
					},
				},
				{
					tag: 'script',
					content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');
          `,
				},
			],
		}),
	],
});
