import type { Locale } from '@/i18n/config';

export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ??
	'https://bernardofofg-github-io.vercel.app';

// localePrefix 'as-needed': pt-BR sem prefixo, en/es com.
export const localeUrls = (path: string): Record<Locale, string> => {
	const suffix = path === '/' ? '' : path;
	return {
		'pt-BR': `${siteUrl}${suffix}`,
		en: `${siteUrl}/en${suffix}`,
		es: `${siteUrl}/es${suffix}`,
	};
};

export const ogLocale: Record<Locale, string> = {
	'pt-BR': 'pt_BR',
	en: 'en_US',
	es: 'es_ES',
};

export const hreflangAlternates = (path: string) => {
	const urls = localeUrls(path);
	return {
		'pt-BR': urls['pt-BR'],
		en: urls.en,
		es: urls.es,
		'x-default': urls['pt-BR'],
	};
};
