// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const docsCollection = defineCollection({
	/* ... */
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	docs: docsCollection,
	type: "content", // v2.5.0 and later
	schema: z.object({
		title: z.string().optional(),
	}),
};
