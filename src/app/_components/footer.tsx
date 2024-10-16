import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className="mx-auto flex base:flex-col-reverse items-center justify-between gap-4 bg-neutral-950 p-8 md:flex-row">
			<h2 className="font-bold text-neutral-400">Feito por Bernardo Filipe</h2>

			<div className="relative size-10">
				<Image src="/element/sm-logo.svg" fill alt="logo" />
			</div>
		</footer>
	);
};
