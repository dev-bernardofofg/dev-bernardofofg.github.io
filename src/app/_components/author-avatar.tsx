import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type AuthorAvatarProps = {
	size?: number;
	className?: string;
	rounded?: 'full' | 'xl' | '2xl';
};

const roundedClass = {
	full: 'rounded-full',
	xl: 'rounded-xl',
	'2xl': 'rounded-2xl',
};

export const AuthorAvatar = ({
	size = 64,
	className,
	rounded = '2xl',
}: AuthorAvatarProps) => {
	// Drop /public/author.jpg later and this component picks it up automatically.
	// Until then, render a branded gradient tile with the "bf_" monogram so no
	// asset is required to ship.
	const src = '/author.jpg';
	const hasPhoto = false;

	if (hasPhoto) {
		return (
			<Image
				src={src}
				alt={profile.name}
				width={size}
				height={size}
				className={cn(roundedClass[rounded], 'object-cover', className)}
			/>
		);
	}

	return (
		<div
			aria-label={profile.name}
			className={cn(
				'flex items-center justify-center font-extrabold text-white accent-gradient shadow-card',
				roundedClass[rounded],
				className,
			)}
			style={{
				width: size,
				height: size,
				fontSize: Math.round(size * 0.38),
				letterSpacing: '-0.02em',
			}}
		>
			<span aria-hidden>bf_</span>
		</div>
	);
};
