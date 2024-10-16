'use client';

import { KNOWLEDGE } from '@/lib/constants';
import Image from 'next/image';
import { useState } from 'react';

export const GridKnowledgeCard = () => {
	const [hovered, setHovered] = useState('');

	const handleHovered = (hover: string) => {
		setHovered(hover);
	};

	// Encontrar o objeto com base no `hovered`
	const hoveredKnowledge = KNOWLEDGE.find(
		(know) => know.technology === hovered,
	);

	return (
		<>
			<div className="flex flex-1 flex-col gap-4">
				<h2 className="font-bold text-4xl">
					Conhecimento <span className="text-primary">.</span>
				</h2>
				{hovered === '' && (
					<span className="text-neutral-400">
						*Passe o mouse para ler a descrição*
					</span>
				)}
				{hovered !== '' && (
					<span className="max-w-4xl text-neutral-400">
						{hoveredKnowledge ? hoveredKnowledge.description : ''}
					</span>
				)}
			</div>

			<div className="grid flex-1 base:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
				{KNOWLEDGE.map((know) => (
					<div
						className="flex items-center justify-center rounded-lg border-2 p-4 shadow-md transition-all hover:border-primary"
						key={know.icon}
						onMouseOver={() => handleHovered(know.technology)}
						onMouseLeave={() => handleHovered('')}
						onFocus={() => handleHovered(know.technology)}
					>
						<div className="relative size-16">
							<Image src={know.icon} fill alt={know.technology} />
						</div>
					</div>
				))}
			</div>
		</>
	);
};
