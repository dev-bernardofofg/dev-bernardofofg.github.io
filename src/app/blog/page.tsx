import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { BlogList } from '../_components/blog-list';

export const metadata: Metadata = {
	title: 'Blog — Bernardo Filipe',
	description:
		'Curiosidades de desenvolvimento, padrões de código e boas práticas — com os snippets que provam o ponto.',
};

export default function BlogPage() {
	const t = useTranslations('blog');

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
