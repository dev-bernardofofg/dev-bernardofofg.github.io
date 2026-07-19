import { BlogList } from '@/app/_components/blog-list';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Blog — Bernardo Filipe',
	description:
		'Curiosidades de desenvolvimento, padrões de código e boas práticas — com os snippets que provam o ponto.',
};

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
			<h1 className="font-extrabold text-[42px] text-foreground tracking-[-0.03em]">
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
