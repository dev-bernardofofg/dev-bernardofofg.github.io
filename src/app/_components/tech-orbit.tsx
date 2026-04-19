'use client';

import Image from 'next/image';

const RADIUS = 125;

const ORBIT_TECHS = [
	{ icon: '/knowledge/reactjs.svg', name: 'React' },
	{ icon: '/knowledge/nextjs.svg', name: 'Next.js' },
	{ icon: '/knowledge/typescript.svg', name: 'TypeScript' },
	{ icon: '/knowledge/tailwindcss.svg', name: 'Tailwind' },
	{ icon: '/knowledge/nodejs.svg', name: 'Node.js' },
	{ icon: '/knowledge/postgresql.svg', name: 'PostgreSQL' },
].map((tech, index, arr) => {
	const angle = (index * 360) / arr.length;
	const radians = (angle * Math.PI) / 180;
	return {
		...tech,
		angle,
		x: Math.round(Math.cos(radians) * RADIUS * 1000) / 1000,
		y: Math.round(Math.sin(radians) * RADIUS * 1000) / 1000,
	};
});

export const TechOrbit = () => {
	return (
		<div className="relative flex size-80 items-center justify-center">
			{/* Glow central */}
			<div className="absolute size-32 rounded-full bg-primary/20 blur-2xl" />

			{/* Anel externo - borda do "olho" */}
			<div className="absolute inset-0 rounded-full border-4 border-primary/30" />
			<div className="absolute inset-2 rounded-full border-2 border-primary/20" />

			{/* Órbita dos tomoes/techs - gira como Sharingan */}
			<div className="absolute inset-4 animate-spin-slow">
				{/* Linhas conectando ao centro (estilo Sharingan) */}
				{ORBIT_TECHS.map(({ angle }) => (
					<div
						key={`line-${angle}`}
						className="absolute top-1/2 left-1/2 h-0.5 w-[45%] origin-left bg-linear-to-r from-primary/60 to-transparent"
						style={{ transform: `rotate(${angle}deg)` }}
					/>
				))}

				{/* Techs como "tomoes" */}
				{ORBIT_TECHS.map(({ icon, name, x, y }) => (
					<div
						key={name}
						className="absolute top-1/2 left-1/2"
						style={{
							transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
						}}
					>
						<div className="animate-counter-spin">
							<div className="flex size-14 items-center justify-center rounded-full border-2 border-primary/50 bg-neutral-950 p-2 shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:border-primary hover:shadow-primary/50">
								<Image src={icon} width={32} height={32} alt={name} />
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Anel interno */}
			<div className="absolute size-28 rounded-full border border-primary/40" />

			{/* Centro - "pupila" */}
			<div className="relative z-10 flex size-20 items-center justify-center rounded-full border-2 border-primary bg-neutral-950 shadow-primary/40 shadow-xl">
				<span className="font-bold text-2xl text-primary">B</span>
			</div>

			{/* Reflexo de luz no "olho" */}
			<div className="absolute top-12 right-16 size-6 rounded-full bg-white/10 blur-sm" />
		</div>
	);
};
