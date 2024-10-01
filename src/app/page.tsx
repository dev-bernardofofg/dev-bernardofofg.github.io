import { About } from './_components/about';
import { Hero } from './_components/hero';

export default function Home() {
	return (
		<main className="flex w-full flex-col gap-16 items-center justify-center bg-neutral-900 text-neutral-100">
			<Hero />
			<About />
		</main>
	);
}
