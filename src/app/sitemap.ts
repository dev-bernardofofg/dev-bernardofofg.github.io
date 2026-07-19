import { posts, projects } from '@/lib/data';
import { siteUrl } from '@/lib/site';
import type { MetadataRoute } from 'next';

// localePrefix 'as-needed': pt-BR sem prefixo, en/es com.
const localized = (path: string) => ({
	'pt-BR': `${siteUrl}${path === '/' ? '' : path}`,
	en: `${siteUrl}/en${path === '/' ? '' : path}`,
	es: `${siteUrl}/es${path === '/' ? '' : path}`,
});

const entry = (
	path: string,
	extra: Partial<MetadataRoute.Sitemap[number]> = {},
): MetadataRoute.Sitemap[number] => ({
	url: localized(path)['pt-BR'],
	alternates: { languages: localized(path) },
	...extra,
});

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
