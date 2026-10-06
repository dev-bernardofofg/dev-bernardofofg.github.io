import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Suspense } from 'react';
import { LanguageSwitcher } from './language-switcher';
import { type NavItem, NavLinks } from './nav-links';
import { ThemeToggle } from './theme-toggle';

export const Header = async () => {
	const t = await getTranslations('nav');

	const navItems: NavItem[] = [
		{ href: '/', label: t('home') },
		{ href: '/blog', label: t('blog') },
		{ href: '/projetos', label: t('projects') },
	];

	return (
		<div className="sticky top-4 z-50 flex justify-center px-4 pt-5 md:px-6">
			<div className="glass-card flex items-center gap-1 rounded-full py-1.5 pr-1.5 pl-3 shadow-card backdrop-blur-lg md:gap-4 md:py-2 md:pr-2 md:pl-5">
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
					<NavLinks items={navItems} />
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
