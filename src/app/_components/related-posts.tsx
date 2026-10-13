import { Link } from '@/i18n/navigation';
import { type Post, posts } from '@/lib/data';
import { localize } from '@/lib/i18n';
import { getLocale, getTranslations } from 'next-intl/server';

type Props = { current: Post; limit?: number };

const sameCategoryFirst = (current: Post): Post[] =>
	posts
		.filter((p) => p.id !== current.id)
		.sort((a, b) => {
			const aSameCat = a.cat === current.cat ? 0 : 1;
			const bSameCat = b.cat === current.cat ? 0 : 1;
			if (aSameCat !== bSameCat) return aSameCat - bSameCat;
			return a.dateIso < b.dateIso ? 1 : -1;
		});

export const RelatedPosts = async ({ current, limit = 2 }: Props) => {
	const related = sameCategoryFirst(current).slice(0, limit);
	if (related.length === 0) return null;

	const locale = await getLocale();
	const t = await getTranslations('blog');

	return (
		<aside className="mt-12">
			<h2 className="font-extrabold font-mono text-[13px] text-accent-a tracking-[0.12em]">
				{t('relatedTitle')}
			</h2>
			<div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
				{related.map((post) => (
					<Link
						key={post.id}
						href={`/blog/${post.id}`}
						className="glass-card block rounded-2xl px-5 py-4 transition-colors hover:bg-glass-strong"
					>
						<div className="flex items-baseline gap-2 font-mono text-[11px] text-faint">
							<span className="font-semibold text-accent-a">{post.cat}</span>
							<span>·</span>
							<span>
								{post.min} {t('min')}
							</span>
						</div>
						<div className="mt-1.5 font-bold text-[15px] text-foreground leading-[1.3]">
							{localize(post.title, locale)}
						</div>
					</Link>
				))}
			</div>
		</aside>
	);
};
