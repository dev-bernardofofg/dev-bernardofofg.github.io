import Image from 'next/image';
import { SocialLink } from './social-link';
import { SOCIAL_LINK } from '@/lib/constants';

export const About = () => {
	return (
		<section
			className="max-w-7xl mx-auto bg-neutral-950 flex w-full items-center rounded-xl border-2 border-white/10 shadow-md relative"
			id="#about"
		>
			<div className="relative w-full base:h-[450px] md:h-[720px] base:blur-md md:blur-none flex-1 animate-levitate base:absolute md:relative">
				<Image src="/element/wrapper.svg" fill alt="wrapper" />
			</div>
			<div className="flex-1 space-y-6 relative z-10 base:p-6 md:p-2 max-w-md mx-auto">
				<div className="font-bold">
					<h3 className="text-primary">Quem sou</h3>
					<h1 className="text-4xl">Bernardo Filipe</h1>
					<h2 className="text-neutral-500">Fullstack Developer</h2>
				</div>
				<div className="font-medium text-xl">
					<p className="text-neutral-400">
						Meu nome é Bernardo Filipe, sou um desenvolvedor full-stack, mas sou
						especializado em desenvolvimento front-end. Atualmente trabalho como
						desenvolvedor front-end na empresa{' '}
						<span className="text-primary font-bold">WA Technology</span>.
						Desenvolvo interfaces modernas para iGaming, focadas na usabilidades
						dos usuários, com animações, facil interação do usuário,
						responsividade e SEO.
					</p>
				</div>
				<div className="flex flex-1 base:gap-4 md:gap-8">
					{SOCIAL_LINK.map((v) => (
						<SocialLink
							key={v.name}
							href={v.href}
							name={v.name}
							icon={v.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
