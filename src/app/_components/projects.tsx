import { PROJECTS } from '@/lib/constants';
import { CardProject } from './card-project';

export const Projects = () => {
	return (
		<section
			className="flex flex-col gap-8 max-w-7xl w-full mx-auto mb-4"
			id="projects"
		>
			<h2 className="font-bold text-4xl text-center">
				Projetos <span className="text-primary">.</span>
			</h2>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 base:grid-cols-1 gap-4">
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
