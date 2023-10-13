import { z, defineCollection } from 'astro:content'

const portfolioCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			image: image(),
			price: z.number().optional(),
			size: z.string().optional(),
			typeOfFabric: z.string().optional(),
			description: z.string().optional(),
		}),
})

export const collections = {
	portfolio: portfolioCollection,
}
