'use client';

import { type Locale, localeFlags, localeNames, locales } from '@/i18n/config';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export const LanguageSwitcher = () => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setIsOpen] = useState(false);

	const handleLocaleChange = (newLocale: Locale) => {
		// Salva no cookie
		document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

		startTransition(() => {
			router.refresh();
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
				aria-haspopup="listbox"
				className={cn(
					'flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-medium text-sm backdrop-blur-md transition-all',
					'hover:border-primary/50 hover:bg-white/10',
					isPending && 'opacity-50',
				)}
			>
				<span>{localeFlags[locale]}</span>
				<span className="hidden md:inline">{localeNames[locale]}</span>
			</button>

			{isOpen && (
				<>
					{/* Overlay para fechar */}
					<div
						role="presentation"
						className="fixed inset-0 z-40"
						onClick={() => setIsOpen(false)}
						onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
					/>

					{/* Dropdown */}
					<div className="absolute top-full right-0 z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-white/10 bg-neutral-900/95 p-1 shadow-xl backdrop-blur-xl">
						{locales.map((loc) => (
							<button
								key={loc}
								type="button"
								aria-current={locale === loc}
								onClick={() => handleLocaleChange(loc)}
								className={cn(
									'flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors',
									locale === loc
										? 'bg-primary/20 text-primary'
										: 'text-neutral-300 hover:bg-white/10 hover:text-white',
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
