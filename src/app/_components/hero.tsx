import { Link } from '@/i18n/navigation';
import { getCv } from '@/lib/data';
import { useLocale, useTranslations } from 'next-intl';

export const Hero = () => {
	const t = useTranslations('hero');
	const locale = useLocale();

	return (
		<section
			id="inicio"
			className="mx-auto w-full max-w-[1120px] animate-page-in px-6 pt-16 pb-14 md:px-8 md:pt-18"
		>
			<div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-[7px] font-bold text-[12.5px] text-accent-a backdrop-blur-[10px]">
				<span className="size-[7px] rounded-full bg-emerald-500" />
				{t('available')}
			</div>
			<h1 className="mt-5 max-w-[760px] font-extrabold text-[38px] text-foreground leading-[1.12] tracking-[-0.032em] md:text-[54px]">
				{t.rich('title', {
					highlight: (chunks) => (
						<span className="text-accent-gradient">{chunks}</span>
					),
				})}
			</h1>
			<p className="mt-[18px] max-w-[560px] text-[17px] text-secondary leading-[1.65]">
				{t('description')}
			</p>
			<div className="mt-7 flex flex-wrap gap-3">
				<Link
					href="/projetos"
					className="rounded-[14px] px-6 py-[13px] font-bold text-[14.5px] text-white accent-gradient shadow-[0_8px_22px_rgba(240,83,83,0.25)] transition-[filter] hover:brightness-[1.08]"
				>
					{t('viewProjects')}
				</Link>
				<Link
					href="/blog"
					className="glass-card rounded-[14px] px-6 py-[13px] font-bold text-[14.5px] text-foreground shadow-card backdrop-blur-[10px] transition-colors hover:bg-glass-strong"
				>
					{t('readBlog')}
				</Link>
				<a
					href={getCv(locale)}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center rounded-[14px] border border-foreground/15 px-6 py-[13px] font-bold text-[14.5px] text-secondary transition-colors hover:bg-glass hover:text-foreground"
				>
					{t('downloadCv')} ↓
				</a>
			</div>
		</section>
	);
};
