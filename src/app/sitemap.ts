import { posts, projects } from '@/lib/data';
import { localeUrls } from '@/lib/site';
import type { MetadataRoute } from 'next';

const entry = (
	path: string,
	extra: Partial<MetadataRoute.Sitemap[number]> = {},
): MetadataRoute.Sitemap[number] => {
	const urls = localeUrls(path);
	return {
		url: urls['pt-BR'],
		alternates: { languages: urls },
		...extra,
	};
};

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		entry('/', { changeFrequency: 'monthly', priority: 1 }),
		entry('/blog', { changeFrequency: 'weekly', priority: 0.8 }),
		entry('/projetos', { changeFrequency: 'monthly', priority: 0.8 }),
		...posts.map((post) =>
			entry(`/blog/${post.id}`, {
				lastModified: post.dateIso,
				priority: 0.6,
			}),
		),
		...projects.map((project) =>
			entry(`/projetos/${project.id}`, { priority: 0.6 }),
		),
	];
}
