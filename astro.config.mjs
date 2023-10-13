import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import vercel from '@astrojs/vercel/serverless'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), partytown(), mdx(), prefetch(), react()],
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: true,
		},
		imageService: true,
	}),
})
