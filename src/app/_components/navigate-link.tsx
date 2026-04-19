'use client';

import Link from 'next/link';

interface NavigaTeLinkProps {
	href: string;
	title: string;
	onClick: () => void;
}

export const NavigateLink = ({ title, href, onClick }: NavigaTeLinkProps) => {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="flex h-10 w-full items-center border-transparent border-l-4 pl-2"
		>
			{title}
		</Link>
	);
};
