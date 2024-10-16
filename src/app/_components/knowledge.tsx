import { AnimatedSection } from './animate-section';
import { GridKnowledgeCard } from './grid-knowledge-card';

export const Knowledge = () => {
	return (
		<AnimatedSection
			className="mx-auto mb-4 flex w-full max-w-7xl base:flex-col justify-between gap-8 md:flex-row scroll-mt-28"
			id="knowledge"
		>
			<GridKnowledgeCard />
		</AnimatedSection>
	);
};
