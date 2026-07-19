'use client';

import { posts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { type CategoryFilter, CategoryFilters } from './category-filters';

export const BlogPreview = () => {
	const t = useTranslations('blog');
	const locale = useLocale();
	const [filter, setFilter] = useState<CategoryFilter>('tudo');

	const [featured, ...rest] = posts;
	if (!featured) return null;

	const filtered =
		filter === 'tudo'
			? rest
			: rest.filter((post) => post.cat === filter.toUpperCase());

	return (
		<section
			id="blog"
			className="mx-auto w-full max-w-[1120px] px-6 pb-16 md:px-8"
		>
			<div className="mb-5 flex flex-wrap items-center justify-between gap-3">
				<div className="flex items-baseline gap-3.5">
					<h2 className="font-extrabold text-[26px] text-foreground tracking-[-0.02em]">
						{t('title')}
					</h2>
					<Link
						href="/blog"
						className="font-bold text-[13px] text-accent-a hover:text-accent-b"
					>
						{t('viewAll')} →
					</Link>
				</div>
				<CategoryFilters value={filter} onChange={setFilter} />
			</div>

			<Link
				href={`/blog/${featured.id}`}
				className="glass-card-strong mb-4 block rounded-[22px] px-6 py-[30px] text-foreground shadow-card transition-shadow hover:shadow-card-hover md:px-[34px]"
			>
				<div className="flex items-baseline gap-2.5 font-mono text-[11px] text-faint">
					<span className="font-semibold text-accent-a">{featured.cat}</span>
					<span>{formatDate(featured.dateIso, locale)}</span>
					<span>·</span>
					<span>
						{featured.min} {t('min')}
					</span>
				</div>
				<div className="mt-2.5 font-extrabold text-[24px] tracking-[-0.015em]">
					{featured.title}
				</div>
				<p className="mt-2 mb-[18px] max-w-[640px] text-[15px] text-secondary leading-[1.6]">
					{featured.excerpt}
				</p>
				{featured.teaser && (
					<div className="overflow-x-auto whitespace-pre rounded-2xl bg-code px-6 py-5 font-mono text-[13px] text-code-text leading-[1.85]">
						{featured.teaser}
					</div>
				)}
				<span className="mt-4 inline-block font-bold text-[13.5px] text-accent-a">
					{t('continueReading')} →
				</span>
			</Link>

			<div className="flex flex-col gap-2.5">
				{filtered.map((post) => (
					<Link
						key={post.id}
						href={`/blog/${post.id}`}
						className="glass-card grid grid-cols-1 items-baseline gap-2 rounded-2xl px-6 py-4 transition-colors hover:bg-glass-strong md:grid-cols-[110px_1fr_auto] md:gap-4"
					>
						<span className="font-mono font-semibold text-[11px] text-accent-a">
							{post.cat}
						</span>
						<div>
							<div className="font-bold text-[15.5px] text-foreground">
								{post.title}
							</div>
							<div className="mt-0.5 text-[13px] text-muted">
								{post.excerpt}
							</div>
						</div>
						<span className="whitespace-nowrap font-mono text-[11px] text-faint">
							{formatDate(post.dateIso, locale)} · {post.min} {t('min')}
						</span>
					</Link>
				))}
			</div>
		</section>
	);
};
