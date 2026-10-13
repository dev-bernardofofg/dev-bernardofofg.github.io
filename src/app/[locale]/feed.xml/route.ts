import { type Locale, defaultLocale, locales } from '@/i18n/config';
import { buildFeedXml, rssHeaders } from '@/lib/rss';

export const dynamic = 'force-static';

export function generateStaticParams() {
	return locales
		.filter((locale) => locale !== defaultLocale)
		.map((locale) => ({ locale }));
}

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ locale: string }> },
) {
	const { locale: raw } = await params;
	const locale: Locale = locales.includes(raw as Locale)
		? (raw as Locale)
		: defaultLocale;
	return new Response(buildFeedXml(locale), { headers: rssHeaders });
}
