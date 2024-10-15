import { About } from './_components/about';
import { Experiences } from './_components/experiences';
import { Hero } from './_components/hero';
import { Knowledge } from './_components/knowledge';
import { Projects } from './_components/projects';

export default function Home() {
	return (
		<main className="flex w-full flex-col gap-16 items-center justify-center bg-neutral-900 text-neutral-100">
			<Hero />
			<About />
			<Experiences />
			<Projects />
			<Knowledge />
		</main>
	);
}
