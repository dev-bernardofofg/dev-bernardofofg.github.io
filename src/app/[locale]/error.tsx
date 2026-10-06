'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const t = useTranslations('errors.error');

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="mx-auto flex w-full max-w-[720px] animate-page-in flex-col items-start px-6 pt-16 pb-24 md:px-8">
			<span className="font-mono text-[12px] text-faint">
				{t('label')}
				{error.digest ? ` · ${error.digest}` : ''}
			</span>
			<h1 className="mt-3 font-extrabold text-[32px] text-foreground leading-[1.14] tracking-[-0.025em] md:text-[42px]">
				{t('title')}
			</h1>
			<p className="mt-3 max-w-[520px] text-[15.5px] text-secondary leading-[1.6]">
				{t('description')}
			</p>
			<div className="mt-7 flex flex-wrap gap-2.5">
				<button
					type="button"
					onClick={reset}
					className="inline-block cursor-pointer rounded-[14px] px-[22px] py-3 font-bold text-[14px] text-white accent-gradient transition-[filter] hover:brightness-[1.08]"
				>
					{t('retry')}
				</button>
				<a
					href="/"
					className="glass-card rounded-[14px] px-[22px] py-3 font-bold text-[14px] text-foreground transition-colors hover:bg-glass-strong"
				>
					{t('home')}
				</a>
			</div>
		</section>
	);
}
