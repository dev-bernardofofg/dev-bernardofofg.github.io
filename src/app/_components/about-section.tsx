import { profile } from '@/lib/data';
import { useTranslations } from 'next-intl';

export const AboutSection = () => {
	const t = useTranslations('about');

	return (
		<section
			id="sobre"
			className="mx-auto w-full max-w-[1120px] px-6 pb-16 md:px-8"
		>
			<h2 className="mb-5 font-extrabold text-[22px] text-foreground tracking-[-0.02em] md:text-[26px]">
				{t('title')}
			</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr]">
				<div className="glass-card-strong rounded-[22px] px-8 py-7 shadow-card">
					<p className="text-[15.5px] text-secondary leading-[1.7]">
						{profile.bio1}
					</p>
					<p className="mt-3.5 text-[15.5px] text-secondary leading-[1.7]">
						{profile.bio2}
					</p>
				</div>
				<div className="glass-card-strong flex flex-col justify-center gap-4 rounded-[22px] px-8 py-7 shadow-card">
					{profile.facts.map((fact) => (
						<div
							key={fact.label}
							className="grid grid-cols-[110px_1fr] items-baseline gap-3"
						>
							<span className="font-mono text-[10.5px] text-accent-a tracking-[0.1em]">
								{fact.label}
							</span>
							<span className="font-semibold text-[14px] text-foreground">
								{fact.value}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
