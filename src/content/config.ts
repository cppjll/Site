import { z, defineCollection } from 'astro:content';

const eventsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        location: z.string(),
        image: image(),
        imageAlt: z.string(),
    }),
});

const boardCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        position: z.string(),
        image: image(),
        imageAlt: z.string(),
        bio: z.string(),
    }),
});

export const collections = {
    events: eventsCollection,
    board: boardCollection,
};