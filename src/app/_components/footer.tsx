import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className="flex items-center bg-neutral-950 mx-auto justify-between p-8 base:flex-col-reverse md:flex-row gap-4">
			<h2 className="font-bold text-neutral-400">Feito por Bernardo Filipe</h2>

			<div className="relative size-10">
				<Image src="/element/sm-logo.svg" fill alt="logo" />
			</div>
		</footer>
	);
};
