import Image from 'next/image';
import Link from 'next/link';

interface SocialLinkProps {
	href: string;
	icon: string;
	name: string;
}

export const SocialLink = ({ href, icon, name }: SocialLinkProps) => {
	return (
		<Link href={href} target="_blank" aria-label={name}>
			<div className="rounded-xl border-2 border-white/10 p-2 transition-all duration-500 hover:border-primary">
				<div className="relative base:size-6 md:size-8">
					<Image src={icon} fill alt="" className="text-primary" />
				</div>
			</div>
		</Link>
	);
};
