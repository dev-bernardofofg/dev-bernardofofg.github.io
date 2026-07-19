import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Fira_Code, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import './globals.css';

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
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL ??
			'https://bernardofofg-github-io.vercel.app',
	),
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
};

const themeInitScript = `try{if(localStorage.theme==='dark'||(!('theme' in localStorage)&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: script estático anti-FOUC do tema */}
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>
			<body className={cn(jakarta.variable, fira.variable, 'font-sans')}>
				<NextIntlClientProvider messages={messages}>
					<div className="flex min-h-svh flex-col pb-10">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
