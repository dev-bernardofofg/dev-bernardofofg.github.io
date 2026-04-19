'use client';

import { useScrollProgress } from '../_hooks/use-scroll-progress';

export const ScrollProgress = () => {
	const progress = useScrollProgress();

	return (
		<div
			style={{ width: `${progress}%` }}
			className="fixed top-0 left-0 z-50 h-[3px] bg-primary transition-all duration-100"
		/>
	);
};
