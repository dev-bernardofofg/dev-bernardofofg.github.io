import { Footer } from '@/app/_components/footer';
import { Header } from '@/app/_components/header';
import { ThemeProvider } from '@/app/_components/theme-provider';
import { routing } from '@/i18n/routing';
import { siteUrl } from '@/lib/site';
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

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: 'Bernardo Filipe — Full-stack',
	description:
		'Full-stack especializado em front-end: React, Next.js e TypeScript em produção — do componente ao deploy.',
	openGraph: {
		title: 'Bernardo Filipe — Full-stack',
		description:
			'Full-stack especializado em front-end: React, Next.js e TypeScript em produção — do componente ao deploy.',
		type: 'website',
		images: ['/og-image.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Bernardo Filipe — Full-stack',
		description:
			'Full-stack especializado em front-end: React, Next.js e TypeScript em produção — do componente ao deploy.',
		images: ['/og-image.png'],
	},
	icons: { icon: '/favicon.svg' },
	alternates: {
		types: { 'application/rss+xml': '/feed.xml' },
	},
};

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
