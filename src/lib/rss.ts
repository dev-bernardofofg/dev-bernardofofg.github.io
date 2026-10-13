import type { Locale } from '@/i18n/config';
import { posts, profile } from '@/lib/data';
import { localize } from '@/lib/i18n';
import { localeUrls } from '@/lib/site';

const escapeXml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');

const channelDescription: Record<Locale, string> = {
	'pt-BR':
		'Curiosidades de desenvolvimento, padrões de código e boas práticas.',
	en: 'Development insights, code patterns and best practices.',
	es: 'Curiosidades de desarrollo, patrones de código y buenas prácticas.',
};

const channelTitle: Record<Locale, string> = {
	'pt-BR': `Blog — ${profile.name}`,
	en: `Blog — ${profile.name}`,
	es: `Blog — ${profile.name}`,
};

export function buildFeedXml(locale: Locale): string {
	const urls = (slug: string) => localeUrls(`/blog/${slug}`)[locale];
	const items = posts
		.map(
			(post) => `    <item>
      <title>${escapeXml(localize(post.title, locale))}</title>
      <link>${urls(post.id)}</link>
      <guid>${urls(post.id)}</guid>
      <description>${escapeXml(localize(post.excerpt, locale))}</description>
      <category>${escapeXml(post.cat)}</category>
      <pubDate>${new Date(`${post.dateIso}T12:00:00Z`).toUTCString()}</pubDate>
    </item>`,
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${channelTitle[locale]}</title>
    <link>${localeUrls('/blog')[locale]}</link>
    <description>${channelDescription[locale]}</description>
    <language>${locale}</language>
${items}
  </channel>
</rss>`;
}

export const rssHeaders = {
	'Content-Type': 'application/rss+xml; charset=utf-8',
	'Cache-Control': 'public, max-age=3600',
} as const;

export const feedPathFor = (locale: Locale): string =>
	locale === 'pt-BR' ? '/feed.xml' : `/${locale}/feed.xml`;
