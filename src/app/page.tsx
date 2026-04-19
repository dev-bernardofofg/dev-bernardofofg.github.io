import { About } from './_components/about';
import { ContactUs } from './_components/contact-us';
import { Experiences } from './_components/experiences';
import { Hero } from './_components/hero';
import { Knowledge } from './_components/knowledge';
import { Projects } from './_components/projects';
import { SectionDivider } from './_components/section-divider';

export default function Home() {
	return (
		<main className="flex w-full flex-col items-center justify-center gap-16 bg-neutral-900 text-neutral-100">
			<Hero />
			<SectionDivider />
			<About />
			<SectionDivider />
			<Experiences />
			<SectionDivider />
			<Projects />
			<SectionDivider />
			<Knowledge />
			<SectionDivider />
			<ContactUs />
		</main>
	);
}
