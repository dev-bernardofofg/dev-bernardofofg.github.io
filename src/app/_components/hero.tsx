import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBigUpDashIcon } from 'lucide-react';

export const Hero = () => {
	return (
		<section
			className="mx-auto flex w-full max-w-7xl scroll-mt-64 items-center"
			id="hero"
		>
			<div className="flex flex-1 flex-col items-center gap-4 text-center">
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
				<div className="flex items-center gap-4">
					<Button className="text-base">Entre em contato</Button>
					<Link
						href="#projects"
						className="flex h-12 items-center gap-2 text-primary transition-all hover:opacity-70"
					>
						<span className="font-bold">Projetos</span>
						<ArrowBigUpDashIcon className="size-7 rotate-45" />
					</Link>
				</div>
			</div>
			<div className="relative base:hidden h-[500px] w-full flex-1 animate-levitate md:flex">
				<Image src="/element/wrapper.svg" fill alt="hero element" />
			</div>
		</section>
	);
};
