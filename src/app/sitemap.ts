import { posts, projects } from '@/lib/data';
import { siteUrl } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: siteUrl, changeFrequency: 'monthly', priority: 1 },
		{ url: `${siteUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
		{ url: `${siteUrl}/projetos`, changeFrequency: 'monthly', priority: 0.8 },
		...posts.map((post) => ({
			url: `${siteUrl}/blog/${post.id}`,
			lastModified: post.dateIso,
			priority: 0.6,
		})),
		...projects.map((project) => ({
			url: `${siteUrl}/projetos/${project.id}`,
			priority: 0.6,
		})),
	];
}
