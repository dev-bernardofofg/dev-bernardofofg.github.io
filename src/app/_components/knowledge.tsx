import { AnimatedSection } from './animate-section';
import { GridKnowledgeCard } from './grid-knowledge-card';

export const Knowledge = () => {
	return (
		<AnimatedSection
			className="mx-auto mb-4 flex w-full max-w-7xl scroll-mt-28 base:flex-col gap-8 px-4"
			id="knowledge"
		>
			<GridKnowledgeCard />
		</AnimatedSection>
	);
};
