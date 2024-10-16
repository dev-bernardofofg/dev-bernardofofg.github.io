import Link from 'next/link';

interface CardProjectProps {
	title: string;
	paragraph: string;
	link: string;
}

export const CardProject = ({ link, paragraph, title }: CardProjectProps) => {
	return (
		<div className="flex max-h-64 min-h-64 flex-1 flex-col justify-between rounded-lg border-2 border-primary p-4 shadow-shape transition-all duration-200 hover:scale-105 ">
			<div className="space-y-2">
				<h1 className="font-bold text-white text-xl">{title}</h1>
				<p className="font-medium text-neutral-400 text-sm">{paragraph}</p>
			</div>
			<Link
				href={link}
				className="font-bold text-primary text-xl transition-all hover:opacity-70"
				target="_blank"
			>
				Visualizar projeto
			</Link>
		</div>
	);
};
