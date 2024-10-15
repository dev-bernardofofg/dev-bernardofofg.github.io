import { GridKnowledgeCard } from './grid-knowledge-card';

export const Knowledge = () => {
	return (
		<section
			className="flex base:flex-col md:flex-row justify-between gap-8 max-w-7xl w-full mx-auto mb-4"
			id="knowledge"
		>
			<GridKnowledgeCard />
		</section>
	);
};
