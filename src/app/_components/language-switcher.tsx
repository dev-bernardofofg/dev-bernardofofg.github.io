'use client';

import { type Locale, localeNames, locales } from '@/i18n/config';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { BR, ES, US } from 'country-flag-icons/react/3x2';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

const localeFlags: Record<
	Locale,
	React.ComponentType<{ className?: string }>
> = {
	'pt-BR': BR,
	en: US,
	es: ES,
};

export const LanguageSwitcher = () => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [isOpen]);

	const CurrentFlag = localeFlags[locale];

	const handleLocaleChange = (newLocale: Locale) => {
		const query = searchParams.toString();
		const href = query ? `${pathname}?${query}` : pathname;

		startTransition(() => {
			router.replace(href, { locale: newLocale });
		});

		setIsOpen(false);
	};

	return (
		<div className="relative">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				disabled={isPending}
				aria-expanded={isOpen}
				aria-label={localeNames[locale]}
				className={cn(
					'flex size-9 items-center justify-center rounded-full transition-colors hover:bg-tag',
					isPending && 'opacity-50',
				)}
			>
				<CurrentFlag className="w-5 rounded-[3px]" />
			</button>

			{isOpen && (
				<>
					<button
						type="button"
						aria-label="Close language menu"
						tabIndex={-1}
						className="fixed inset-0 z-40 cursor-default"
						onClick={() => setIsOpen(false)}
					/>

					<div className="glass-card-strong absolute top-full right-0 z-50 mt-2 min-w-[150px] overflow-hidden rounded-2xl p-1 shadow-card-hover">
						{locales.map((loc) => {
							const Flag = localeFlags[loc];
							return (
								<button
									key={loc}
									type="button"
									aria-current={locale === loc}
									onClick={() => handleLocaleChange(loc)}
									className={cn(
										'flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors',
										locale === loc
											? 'bg-tag font-bold text-accent-a'
											: 'text-secondary hover:bg-tag hover:text-foreground',
									)}
								>
									<Flag className="w-5 rounded-[3px]" />
									<span>{localeNames[loc]}</span>
								</button>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};
