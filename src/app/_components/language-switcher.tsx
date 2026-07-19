'use client';

import { type Locale, localeFlags, localeNames, locales } from '@/i18n/config';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';

export const LanguageSwitcher = () => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setIsOpen] = useState(false);

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
				onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
				disabled={isPending}
				aria-expanded={isOpen}
				className={cn(
					'flex size-9 items-center justify-center rounded-full text-sm transition-colors hover:bg-tag',
					isPending && 'opacity-50',
				)}
			>
				<span>{localeFlags[locale]}</span>
			</button>

			{isOpen && (
				<>
					<div
						role="presentation"
						className="fixed inset-0 z-40"
						onClick={() => setIsOpen(false)}
						onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
					/>

					<div className="glass-card-strong absolute top-full right-0 z-50 mt-2 min-w-[150px] overflow-hidden rounded-2xl p-1 shadow-card-hover">
						{locales.map((loc) => (
							<button
								key={loc}
								type="button"
								aria-current={locale === loc}
								onClick={() => handleLocaleChange(loc)}
								className={cn(
									'flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors',
									locale === loc
										? 'bg-tag font-bold text-accent-a'
										: 'text-secondary hover:bg-tag hover:text-foreground',
								)}
							>
								<span>{localeFlags[loc]}</span>
								<span>{localeNames[loc]}</span>
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
};
