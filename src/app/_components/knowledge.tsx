import { GridKnowledgeCard } from './grid-knowledge-card';

export const Knowledge = () => {
	return (
		<section
			className="mx-auto mb-4 flex w-full max-w-7xl base:flex-col justify-between gap-8 md:flex-row"
			id="knowledge"
		>
			<GridKnowledgeCard />
		</section>
	);
};
