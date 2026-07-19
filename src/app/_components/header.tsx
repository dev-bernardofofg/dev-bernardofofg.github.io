'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Suspense } from 'react';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

const links = [
	{ href: '/', key: 'home', match: (path: string) => path === '/' },
	{
		href: '/blog',
		key: 'blog',
		match: (path: string) => path.startsWith('/blog'),
	},
	{
		href: '/projetos',
		key: 'projects',
		match: (path: string) => path.startsWith('/projetos'),
	},
] as const;

export const Header = () => {
	const t = useTranslations('nav');
	const pathname = usePathname();

	return (
		<div className="sticky top-4 z-50 flex justify-center px-4 pt-5 md:px-6">
			<div className="glass-card flex items-center gap-2 rounded-full py-2 pr-2 pl-4 shadow-card backdrop-blur-lg md:gap-4 md:pl-5">
				<Link
					href="/"
					className="mr-1 flex items-center gap-2 font-extrabold text-[15px] text-foreground tracking-[-0.02em]"
				>
					<Image
						src="/favicon.svg"
						alt="bf_"
						width={26}
						height={26}
						className="rounded-[7px]"
					/>
					<span className="hidden sm:inline">Bernardo Filipe</span>
				</Link>
				<nav className="flex items-center gap-0.5 font-semibold text-[13px]">
					{links.map((link) => {
						const active = link.match(pathname);
						return (
							<Link
								key={link.href}
								href={link.href}
								aria-current={active ? 'page' : undefined}
								className={cn(
									'rounded-full px-3 py-2 transition-colors md:px-4',
									active
										? 'nav-pill-active text-foreground'
										: 'text-muted hover:text-foreground',
								)}
							>
								{t(link.key)}
							</Link>
						);
					})}
					<Link
						href="/#sobre"
						className="hidden rounded-full px-3 py-2 text-muted transition-colors hover:text-foreground md:inline md:px-4"
					>
						{t('about')}
					</Link>
				</nav>
				<Link
					href="/#contato"
					className="hidden rounded-full px-4 py-2 font-bold text-[13px] text-white accent-gradient transition-[filter] hover:brightness-[1.08] sm:inline"
				>
					{t('contact')}
				</Link>
				<div className="flex items-center gap-1">
					<ThemeToggle />
					<Suspense fallback={<div className="size-9" />}>
						<LanguageSwitcher />
					</Suspense>
				</div>
			</div>
		</div>
	);
};
