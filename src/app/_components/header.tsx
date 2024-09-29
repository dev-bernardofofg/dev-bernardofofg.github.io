'use client';

import Link from 'next/link';
import { NavigateMobile } from './navigate-mobile';
import { useMediaQuery } from '../_hooks/use-media-query';

export const LINKS_NAVIGATE = [
	{
		name: 'Início',
		href: '/#teste',
	},
	{
		name: 'Sobre',
		href: '/#',
	},
	{
		name: 'Experiências',
		href: '/#',
	},
	{
		name: 'Projetos',
		href: '/#',
	},
	{
		name: 'Conhecimentos',
		href: '/#',
	},
];

export const Header = () => {
	const isDesktop = useMediaQuery('(min-width: 998px)');

	return (
		<header className="flex justify-between">
			<nav className="items-center gap-4 base:hidden md:flex">
				{LINKS_NAVIGATE.map((v) => (
					<Link href={v.href} key={v.name}>
						{v.name}
					</Link>
				))}
			</nav>

			{!isDesktop && (
				<>
					<div className="flex flex-col">
						<h1 className="text-neutral-50">Bernardo Filipe</h1>
						<h3 className="text-neutral-400">Desenvolvedor Fullstack</h3>
					</div>{' '}
					<NavigateMobile />
				</>
			)}
		</header>
	);
};
