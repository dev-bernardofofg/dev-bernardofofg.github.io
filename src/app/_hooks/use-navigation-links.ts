'use client';

import { useTranslations } from 'next-intl';

export interface NavigationLink {
	name: string;
	href: string;
}

export function useNavigationLinks(): NavigationLink[] {
	const t = useTranslations('nav');

	return [
		{ name: t('home'), href: '/#hero' },
		{ name: t('about'), href: '/#about' },
		{ name: t('experiences'), href: '/#experience' },
		{ name: t('projects'), href: '/#projects' },
		{ name: t('knowledge'), href: '/#knowledge' },
		{ name: t('contact'), href: '/#contact' },
	];
}
