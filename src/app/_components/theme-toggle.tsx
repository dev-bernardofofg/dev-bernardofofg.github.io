'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
	const t = useTranslations('nav');
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			aria-label={t('toggleTheme')}
			className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
		>
			<Sun className="hidden size-4 dark:block" />
			<Moon className="size-4 dark:hidden" />
		</button>
	);
};
