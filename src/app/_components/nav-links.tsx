'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export type NavItem = {
	href: '/' | '/blog' | '/projetos';
	label: string;
};

const matches: Record<NavItem['href'], (path: string) => boolean> = {
	'/': (p) => p === '/',
	'/blog': (p) => p.startsWith('/blog'),
	'/projetos': (p) => p.startsWith('/projetos'),
};

export const NavLinks = ({ items }: { items: NavItem[] }) => {
	const pathname = usePathname();

	return (
		<>
			{items.map((item) => {
				const active = matches[item.href](pathname);
				return (
					<Link
						key={item.href}
						href={item.href}
						aria-current={active ? 'page' : undefined}
						className={cn(
							'rounded-full px-2.5 py-2 transition-colors md:px-4',
							active
								? 'nav-pill-active text-foreground'
								: 'text-muted hover:text-foreground',
						)}
					>
						{item.label}
					</Link>
				);
			})}
		</>
	);
};
