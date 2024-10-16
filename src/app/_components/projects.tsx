import { PROJECTS } from '@/lib/constants';
import { CardProject } from './card-project';

export const Projects = () => {
	return (
		<section
			className="mx-auto mb-4 flex w-full max-w-7xl flex-col gap-8"
			id="projects"
		>
			<h2 className="text-center font-bold text-4xl">
				Projetos <span className="text-primary">.</span>
			</h2>

			<div className="grid base:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{PROJECTS.map((project) => (
					<CardProject
						title={project.title}
						paragraph={project.paragraph}
						link={project.link}
						key={project.link}
					/>
				))}
			</div>
		</section>
	);
};
