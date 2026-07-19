'use client';

import { getCv, profile } from '@/lib/data';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export const ContactCta = () => {
	const t = useTranslations('contact');
	const locale = useLocale();
	const [copied, setCopied] = useState(false);

	const copyEmail = () => {
		navigator.clipboard?.writeText(profile.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 1800);
	};

	return (
		<section
			id="contato"
			className="mx-auto w-full max-w-[1120px] px-6 md:px-8"
		>
			<div className="glass-card-strong grid grid-cols-1 items-center gap-8 rounded-3xl p-6 shadow-card sm:p-8 md:grid-cols-[1.4fr_1fr] md:gap-10 md:px-11 md:py-10">
				<div>
					<h2 className="font-extrabold text-[23px] text-foreground tracking-[-0.02em] md:text-[28px]">
						{t('title')}
					</h2>
					<p className="mt-2.5 max-w-[440px] text-[15px] text-secondary leading-[1.6]">
						{t('description')}
					</p>
				</div>
				<div className="flex flex-col items-stretch gap-2.5">
					<button
						type="button"
						onClick={copyEmail}
						className="cursor-pointer truncate rounded-[14px] px-[22px] py-3.5 text-left font-mono font-semibold text-[13px] text-white accent-gradient transition-[filter] hover:brightness-[1.08] sm:text-[14px]"
					>
						{copied ? t('copied') : `${profile.email}  ⧉`}
					</button>
					<div className="flex gap-2.5">
						<a
							href={profile.github}
							target="_blank"
							rel="noopener noreferrer"
							className="glass-card flex-1 rounded-xl py-[11px] text-center font-bold text-[13px] text-foreground transition-colors hover:bg-glass-strong"
						>
							GitHub
						</a>
						<a
							href={profile.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="glass-card flex-1 rounded-xl py-[11px] text-center font-bold text-[13px] text-foreground transition-colors hover:bg-glass-strong"
						>
							LinkedIn
						</a>
						<a
							href={getCv(locale)}
							target="_blank"
							rel="noopener noreferrer"
							className="glass-card flex-1 rounded-xl py-[11px] text-center font-bold text-[13px] text-foreground transition-colors hover:bg-glass-strong"
						>
							{t('cv')}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
