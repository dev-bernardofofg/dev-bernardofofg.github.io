'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { posts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import {
	type CategoryFilter,
	CategoryFilters,
	filterToSlug,
	slugToFilter,
} from './category-filters';

export const BlogList = () => {
	const t = useTranslations('blog');
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const filter = slugToFilter(searchParams.get('cat'));

	const setFilter = (next: CategoryFilter) => {
		const query = next === 'ALL' ? '' : `?cat=${filterToSlug(next)}`;
		router.replace(`${pathname}${query}`, { scroll: false });
	};

	const filtered =
		filter === 'ALL' ? posts : posts.filter((post) => post.cat === filter);

	return (
		<>
			<div className="mt-6">
				<CategoryFilters value={filter} onChange={setFilter} />
			</div>
			<div className="mt-7 flex flex-col gap-3">
				{filtered.map((post) => (
					<Link
						key={post.id}
						href={`/blog/${post.id}`}
						className="glass-card hover:-translate-y-0.5 block rounded-[20px] px-7 py-6 shadow-card transition-[transform,box-shadow] duration-150 hover:shadow-card-hover"
					>
						<div className="flex items-baseline gap-2.5 font-mono text-[11px] text-faint">
							<span className="font-semibold text-accent-a">{post.cat}</span>
							<span>{formatDate(post.dateIso, locale)}</span>
							<span>·</span>
							<span>
								{post.min} {t('min')}
							</span>
						</div>
						<div className="mt-2 font-extrabold text-[20px] text-foreground tracking-[-0.015em]">
							{post.title}
						</div>
						<div className="mt-1.5 text-[14.5px] text-secondary leading-[1.6]">
							{post.excerpt}
						</div>
						{post.teaser && (
							<div className="mt-3.5 overflow-x-auto whitespace-pre rounded-[14px] bg-code px-[18px] py-3.5 font-mono text-[12.5px] text-code-text leading-[1.8]">
								{post.teaser}
							</div>
						)}
						<div className="mt-3.5 font-bold text-[13px] text-accent-a">
							{t('readPost')} →
						</div>
					</Link>
				))}
			</div>
		</>
	);
};
