import { type Locale, defaultLocale, locales } from '@/i18n/config';

export type Translated<T> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export function localize<T>(field: Translated<T>, locale: string): T {
	const key: Locale = isLocale(locale) ? locale : defaultLocale;
	return field[key] ?? field[defaultLocale];
}
