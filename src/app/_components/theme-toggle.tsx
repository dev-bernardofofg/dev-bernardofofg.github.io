'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const ThemeToggle = () => {
	const t = useTranslations('nav');

	const toggle = () => {
		const next = !document.documentElement.classList.contains('dark');
		document.documentElement.classList.toggle('dark', next);
		localStorage.theme = next ? 'dark' : 'light';
	};

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={t('toggleTheme')}
			className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
		>
			<Sun className="hidden size-4 dark:block" />
			<Moon className="size-4 dark:hidden" />
		</button>
	);
};
