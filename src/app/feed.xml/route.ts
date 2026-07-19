import { posts, profile } from '@/lib/data';
import { siteUrl } from '@/lib/site';

const escapeXml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');

export function GET() {
	const items = posts
		.map(
			(post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.id}</link>
      <guid>${siteUrl}/blog/${post.id}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.cat)}</category>
      <pubDate>${new Date(`${post.dateIso}T12:00:00Z`).toUTCString()}</pubDate>
    </item>`,
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog — ${profile.name}</title>
    <link>${siteUrl}/blog</link>
    <description>Curiosidades de desenvolvimento, padrões de código e boas práticas.</description>
    <language>pt-BR</language>
${items}
  </channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
