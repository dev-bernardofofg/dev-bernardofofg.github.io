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
			<div className="flex flex-col gap-4 flex-1">
				<h2 className="font-bold text-4xl">
					Conhecimento <span className="text-primary">.</span>
				</h2>
				{hovered === '' && (
					<span className="text-neutral-400">
						*Passe o mouse para ler a descrição*
					</span>
				)}
				{hovered !== '' && (
					<span className="text-neutral-400 max-w-4xl">
						{hoveredKnowledge ? hoveredKnowledge.description : ''}
					</span>
				)}
			</div>

			<div className="grid base:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
				{KNOWLEDGE.map((know) => (
					<div
						className="flex justify-center items-center border-2 rounded-lg hover:border-primary p-4 transition-all"
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
