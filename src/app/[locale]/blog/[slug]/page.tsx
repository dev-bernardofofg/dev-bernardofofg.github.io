import { BlocksRenderer } from '@/app/_components/blocks-renderer';
import { type Locale, defaultLocale } from '@/i18n/config';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { getPost, posts, profile } from '@/lib/data';
import { hreflangAlternates, localeUrls, ogLocale, siteUrl } from '@/lib/site';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

type PostPageProps = {
	params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { locale: raw, slug } = await params;
	const post = getPost(slug);
	if (!post) return {};

	const locale: Locale = hasLocale(routing.locales, raw) ? raw : defaultLocale;
	const path = `/blog/${post.id}`;
	const urls = localeUrls(path);
	const title = `${post.title} — ${profile.name}`;

	return {
		title,
		description: post.excerpt,
		openGraph: {
			title,
			description: post.excerpt,
			type: 'article',
			url: urls[locale],
			locale: ogLocale[locale],
			publishedTime: post.dateIso,
			authors: [profile.name],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: post.excerpt,
		},
		alternates: {
			canonical: urls[locale],
			languages: hreflangAlternates(path),
		},
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const { locale, slug } = await params;
	setRequestLocale(locale);

	const post = getPost(slug);
	if (!post) notFound();

	const t = await getTranslations('blog');
	const displayDate = formatDate(post.dateIso, locale);

	const postJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.excerpt,
		datePublished: post.dateIso,
		inLanguage: locale,
		url: localeUrls(`/blog/${post.id}`)[locale as Locale],
		author: { '@type': 'Person', name: profile.name, url: siteUrl },
	};

	return (
		<article className="mx-auto w-full max-w-[760px] animate-page-in px-6 pt-12 md:px-8">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático gerado do data layer
				dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
			/>
			<Link
				href="/blog"
				className="glass-card inline-block rounded-full px-[18px] py-[9px] font-bold text-[13px] text-secondary backdrop-blur-[10px] transition-colors hover:bg-glass-strong hover:text-foreground"
			>
				← {t('backToAll')}
			</Link>
			<div className="mt-7 flex items-baseline gap-2.5 font-mono text-[11.5px] text-faint">
				<span className="font-semibold text-accent-a">{post.cat}</span>
				<span>{displayDate}</span>
				<span>·</span>
				<span>
					{post.min} {t('minRead')}
				</span>
			</div>
			<h1 className="mt-3 font-extrabold text-[30px] text-foreground leading-[1.15] tracking-[-0.025em] md:text-[36px]">
				{post.title}
			</h1>
			<div className="mt-5 mb-2 h-1 w-14 rounded-full accent-gradient" />
			<BlocksRenderer blocks={post.blocks} />
			<div className="mt-10 flex items-center justify-between border-foreground/10 border-t pt-[22px]">
				<Link
					href="/blog"
					className="font-bold text-[14px] text-accent-a hover:text-accent-b"
				>
					← {t('backToBlog')}
				</Link>
				<span className="font-mono text-[12px] text-faint">
					{profile.name} · {displayDate}
				</span>
			</div>
		</article>
	);
}
