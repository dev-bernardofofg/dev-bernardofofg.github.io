'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigaTeLinkProps {
	href: string;
	title: string;
	onClick: () => void;
}

export const NavigateLink = ({ title, href, onClick }: NavigaTeLinkProps) => {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			onClick={onClick}
			className={`h-10 
    ${pathname ? 'border-primary' : 'border-transparent'} border-l-4 w-full flex items-center pl-2`}
		>
			{title}
		</Link>
	);
};
