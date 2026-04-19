import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

import { SOCIAL_LINK } from '@/lib/constants';

import { SocialLink } from './social-link';

const NAV_LINKS = [
	{ href: '/#hero', key: 'home' },
	{ href: '/#about', key: 'about' },
	{ href: '/#experience', key: 'experiences' },
	{ href: '/#projects', key: 'projects' },
	{ href: '/#knowledge', key: 'knowledge' },
	{ href: '/#contact', key: 'contact' },
] as const;

export const Footer = async () => {
	const tFooter = await getTranslations('footer');
	const tNav = await getTranslations('nav');

	return (
		<footer className="mt-4 border-t pt-8 border-white/10 bg-neutral-950">
			{/* 3 colunas */}
			<div className="mx-auto max-w-7xl  px-4 pb-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					{/* Coluna 1 — Branding */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<div className="relative size-10 shrink-0">
								<Image src="/element/sm-logo.svg" fill alt="logo" />
							</div>
							<div className="flex flex-col">
								<span className="font-bold text-white">Bernardo Filipe</span>
								<span className="text-sm text-neutral-400">
									Full-Stack Developer
								</span>
							</div>
						</div>
					</div>

					{/* Coluna 2 — Navegação */}
					<div className="flex flex-col gap-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
							{tFooter('navigation')}
						</h3>
						<nav>
							<ul className="flex flex-col gap-2">
								{NAV_LINKS.map(({ href, key }) => (
									<li key={key}>
										<Link
											href={href}
											className="text-sm text-neutral-300 transition-colors duration-200 hover:text-white"
										>
											{tNav(key)}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* Coluna 3 — Redes Sociais */}
					<div className="flex flex-col gap-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
							{tFooter('social')}
						</h3>
						<div className="flex flex-row gap-3">
							{SOCIAL_LINK.map((social) => (
								<SocialLink
									key={social.name}
									href={social.href}
									icon={social.icon}
									name={social.name}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Rodapé inferior */}
			<div className="border-t border-white/10 p-2">
				<div className="mx-auto max-w-7xl">
					<p className="rounded-full text-center text-sm text-neutral-500">
						{tFooter('madeBy')}
					</p>
				</div>
			</div>
		</footer>
	);
};
