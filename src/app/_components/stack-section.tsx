import { stack } from '@/lib/data';
import { useTranslations } from 'next-intl';

export const StackSection = () => {
	const t = useTranslations('stack');

	return (
		<section
			id="stack"
			className="mx-auto w-full max-w-[1120px] px-6 pb-16 md:px-8"
		>
			<div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
				<h2 className="font-extrabold text-[26px] text-foreground tracking-[-0.02em]">
					{t('title')}
				</h2>
				<span className="text-[13px] text-muted">{t('subtitle')}</span>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{stack.map((item) => (
					<div
						key={item.layer}
						className="glass-card hover:-translate-y-[3px] rounded-[20px] px-6 py-[22px] shadow-card transition-[transform,box-shadow] duration-200 hover:shadow-card-hover"
					>
						<div className="font-extrabold text-[11px] text-accent-a tracking-[0.12em]">
							{item.layer}
						</div>
						<div className="mt-2.5 font-bold text-[16.5px] text-foreground">
							{item.tools}
						</div>
						<div className="mt-1.5 text-[13px] text-muted leading-[1.55]">
							{item.proof}
						</div>
						<div className="mt-4 flex items-center gap-2">
							<div className="h-[5px] flex-1 rounded-full bg-foreground/8">
								<div
									className="h-[5px] rounded-full accent-gradient"
									style={{ width: `${item.level}%` }}
								/>
							</div>
							<span className="font-mono text-[10.5px] text-muted">
								{item.since}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
