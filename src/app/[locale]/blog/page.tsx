import { BlogList } from '@/app/_components/blog-list';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'blog' });
	return {
		title: `${t('title')} — Bernardo Filipe`,
		description: t('description'),
	};
}

export default async function BlogPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations('blog');

	return (
		<div className="mx-auto w-full max-w-[880px] animate-page-in px-6 pt-14 md:px-8">
			<h1 className="font-extrabold text-[34px] text-foreground tracking-[-0.03em] md:text-[42px]">
				{t('title')}
			</h1>
			<p className="mt-2.5 max-w-[560px] text-[16px] text-secondary leading-[1.6]">
				{t('description')}
			</p>
			<Suspense>
				<BlogList />
			</Suspense>
		</div>
	);
}
