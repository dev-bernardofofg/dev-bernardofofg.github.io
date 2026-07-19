import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(iso: string, locale: string) {
	const parts = new Intl.DateTimeFormat(locale, {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).formatToParts(new Date(`${iso}T00:00:00`));
	const part = (type: Intl.DateTimeFormatPartTypes) =>
		parts.find((p) => p.type === type)?.value ?? '';
	return `${part('day')} ${part('month').replace('.', '')} ${part('year')}`;
}
