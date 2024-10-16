'use client';

import Link from 'next/link';
import { NavigateMobile } from './navigate-mobile';
import { useMediaQuery } from '../_hooks/use-media-query';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const LINKS_NAVIGATE = [
	{ name: 'Início', href: '/#hero' },
	{ name: 'Sobre', href: '/#about' },
	{ name: 'Experiências', href: '/#experience' },
	{ name: 'Projetos', href: '/#projects' },
	{ name: 'Conhecimentos', href: '/#knowledge' },
];

export const Header = () => {
	const isDesktop = useMediaQuery('(min-width: 998px)');
	const pathName = usePathname();
	const [pathNameActive, setPathNameActive] = useState(pathName);

	useEffect(() => {
		setPathNameActive(window.location.hash);

		const handleHashChange = () => {
			setPathNameActive(window.location.hash);
		};

		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, []);

	const hoverLineAnimation = {
		hover: { width: '100%', opacity: 1, transition: { duration: 0.3 } },
		rest: { width: '0%', opacity: 0 },
	};

	const handleGetPathName = (href: string) => {
		setPathNameActive(href);
	};

	return (
		<header className="sticky top-0 z-50 flex base:justify-between base:rounded-full base:bg-white/5 p-4 backdrop-blur-md transition-all md:justify-center md:rounded-xl md:bg-transparent">
			{/* Navegação desktop */}
			{isDesktop ? (
				<nav className="flex items-center gap-4 rounded-lg bg-neutral-800 p-4 shadow-xl">
					{LINKS_NAVIGATE.map(({ name, href }) => (
						<Link
							href={href}
							key={name}
							className={`relative transition-colors ${
								pathNameActive === href ? 'text-primary' : 'text-white'
							}`}
							onClick={() => handleGetPathName(href)}
						>
							<motion.span initial="rest" whileHover="hover" animate="rest">
								{name}
								<motion.span
									className="absolute bottom-0 left-0 h-[2px] bg-primary"
									variants={hoverLineAnimation}
									style={{ right: 0 }}
								/>
							</motion.span>
						</Link>
					))}
				</nav>
			) : (
				// Navegação mobile
				<div className="flex w-full justify-between">
					<div className="flex flex-col">
						<h1 className="text-2xl text-neutral-50">Bernardo Filipe</h1>
						<h3 className="text-neutral-400 text-sm">
							Desenvolvedor Fullstack
						</h3>
					</div>
					<NavigateMobile />
				</div>
			)}
		</header>
	);
};
