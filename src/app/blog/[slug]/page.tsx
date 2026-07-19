import { getPost, posts, profile } from '@/lib/data';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlocksRenderer } from '../../_components/blocks-renderer';

type PostPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) return {};

	return {
		title: `${post.title} — ${profile.name}`,
		description: post.excerpt,
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) notFound();

	const t = await getTranslations('blog');

	return (
		<article className="mx-auto w-full max-w-[760px] animate-page-in px-6 pt-12 md:px-8">
			<Link
				href="/blog"
				className="glass-card inline-block rounded-full px-[18px] py-[9px] font-bold text-[13px] text-secondary backdrop-blur-[10px] transition-colors hover:bg-glass-strong hover:text-foreground"
			>
				← {t('backToAll')}
			</Link>
			<div className="mt-7 flex items-baseline gap-2.5 font-mono text-[11.5px] text-faint">
				<span className="font-semibold text-accent-a">{post.cat}</span>
				<span>{post.date}</span>
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
					{profile.name} · {post.date}
				</span>
			</div>
		</article>
	);
}
