import Link from 'next/link';

interface CardProjectProps {
	title: string;
	paragraph: string;
	link: string;
}

export const CardProject = ({ link, paragraph, title }: CardProjectProps) => {
	return (
		<div className="border-2 border-primary rounded-lg p-4 flex flex-col justify-between min-h-64 max-h-64 flex-1 shadow-shape hover:scale-105 transition-all duration-200 ">
			<div className="space-y-2">
				<h1 className="font-bold text-xl text-white">{title}</h1>
				<p className="font-medium text-sm text-neutral-400">{paragraph}</p>
			</div>
			<Link
				href={link}
				className="font-bold text-xl text-primary transition-all hover:opacity-70"
				target="_blank"
			>
				Visualizar projeto
			</Link>
		</div>
	);
};
