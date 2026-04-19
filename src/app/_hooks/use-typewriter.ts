'use client';

import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
	text: string;
	speed?: number;
	delay?: number;
}

export function useTypewriter({
	text,
	speed = 80,
	delay = 500,
}: UseTypewriterOptions) {
	const [displayText, setDisplayText] = useState('');
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		setDisplayText('');
		setIsComplete(false);

		let typeInterval: ReturnType<typeof setInterval>;

		const startTimeout = setTimeout(() => {
			let currentIndex = 0;

			typeInterval = setInterval(() => {
				if (currentIndex < text.length) {
					setDisplayText(text.slice(0, currentIndex + 1));
					currentIndex++;
				} else {
					clearInterval(typeInterval);
					setIsComplete(true);
				}
			}, speed);
		}, delay);

		return () => {
			clearTimeout(startTimeout);
			clearInterval(typeInterval);
		};
	}, [text, speed, delay]);

	return { displayText, isComplete };
}
