import { AboutSection } from './_components/about-section';
import { BlogPreview } from './_components/blog-preview';
import { ContactCta } from './_components/contact-cta';
import { Hero } from './_components/hero';
import { ProjectsPreview } from './_components/projects-preview';
import { StackSection } from './_components/stack-section';

export default function Home() {
	return (
		<>
			<Hero />
			<StackSection />
			<BlogPreview />
			<ProjectsPreview />
			<AboutSection />
			<ContactCta />
		</>
	);
}
