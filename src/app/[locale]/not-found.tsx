import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
	const t = await getTranslations('errors.notFound');

	return (
		<section className="mx-auto flex w-full max-w-[720px] animate-page-in flex-col items-start px-6 pt-16 pb-24 md:px-8">
			<span className="font-mono text-[12px] text-faint">404</span>
			<h1 className="mt-3 font-extrabold text-[32px] text-foreground leading-[1.14] tracking-[-0.025em] md:text-[42px]">
				{t('title')}
			</h1>
			<p className="mt-3 max-w-[520px] text-[15.5px] text-secondary leading-[1.6]">
				{t('description')}
			</p>
			<div className="mt-7 flex flex-wrap gap-2.5">
				<Link
					href="/"
					className="inline-block rounded-[14px] px-[22px] py-3 font-bold text-[14px] text-white accent-gradient transition-[filter] hover:brightness-[1.08]"
				>
					{t('home')}
				</Link>
				<Link
					href="/blog"
					className="glass-card rounded-[14px] px-[22px] py-3 font-bold text-[14px] text-foreground transition-colors hover:bg-glass-strong"
				>
					{t('blog')}
				</Link>
			</div>
		</section>
	);
}
