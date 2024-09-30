import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBigUpDashIcon } from 'lucide-react';
export const Hero = () => {
	return (
		<section className="max-w-7xl mx-auto flex w-full items-center">
			<div className="flex flex-col flex-1 gap-4 text-center items-center">
				<div className="flex flex-col gap-2 font-bold">
					<h1 className="base:text-4xl md:text-7xl">Bernardo Filipe</h1>
					<h3 className="base:text-xl md:text-4xl">
						Desenvolvedor <span className="text-primary">Full-Stack</span>
					</h3>
					<p className="max-w-md text-neutral-400">
						Especializado em front-end e focado para trazer resultado para sua
						empresa.
					</p>
				</div>
				<div className="flex gap-4 items-center">
					<Button className="text-base">Entre em contato</Button>
					<Link
						href="#projects"
						className="text-primary flex items-center gap-2 h-12 transition-all hover:opacity-70"
					>
						<span className="font-bold">Projetos</span>
						<ArrowBigUpDashIcon className="rotate-45 size-7" />
					</Link>
				</div>
			</div>
			<div className="relative w-full flex-1 h-[500px] base:hidden md:flex animate-levitate">
				<Image src="/element/wrapper.svg" fill alt="hero element" />
			</div>
		</section>
	);
};
