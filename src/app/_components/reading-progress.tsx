'use client';

import { useEffect, useState } from 'react';

export const ReadingProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const update = () => {
			const scrolled = window.scrollY;
			const height = document.documentElement.scrollHeight - window.innerHeight;
			if (height <= 0) {
				setProgress(0);
				return;
			}
			setProgress(Math.min(100, Math.max(0, (scrolled / height) * 100)));
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, []);

	return (
		<div
			aria-hidden
			className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
		>
			<div
				className="h-full origin-left accent-gradient transition-transform duration-75"
				style={{ transform: `scaleX(${progress / 100})` }}
			/>
		</div>
	);
};
