import { Footer } from '@/app/_components/footer';
import { Header } from '@/app/_components/header';
import { ThemeProvider } from '@/app/_components/theme-provider';
import { type Locale, defaultLocale } from '@/i18n/config';
import { routing } from '@/i18n/routing';
import { hreflangAlternates, localeUrls, ogLocale, siteUrl } from '@/lib/site';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Fira_Code, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

const jakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-jakarta',
});

const fira = Fira_Code({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-fira',
});

const title = 'Bernardo Filipe — Full-stack';
const description =
	'Full-stack especializado em front-end: React, Next.js e TypeScript em produção — do componente ao deploy.';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale: raw } = await params;
	const locale: Locale = hasLocale(routing.locales, raw) ? raw : defaultLocale;
	const urls = localeUrls('/');

	return {
		metadataBase: new URL(siteUrl),
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: urls[locale],
			locale: ogLocale[locale],
			alternateLocale: routing.locales
				.filter((l) => l !== locale)
				.map((l) => ogLocale[l]),
			images: ['/og-image.png'],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: ['/og-image.png'],
		},
		icons: { icon: '/favicon.svg' },
		alternates: {
			canonical: urls[locale],
			languages: hreflangAlternates('/'),
			types: { 'application/rss+xml': '/feed.xml' },
		},
	};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) notFound();
	setRequestLocale(locale);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={cn(jakarta.variable, fira.variable, 'font-sans')}>
				<ThemeProvider>
					<NextIntlClientProvider>
						<div className="flex min-h-svh flex-col pb-10">
							<Header />
							<main className="flex-1">{children}</main>
							<Footer />
						</div>
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
