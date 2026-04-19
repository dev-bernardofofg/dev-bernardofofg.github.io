import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Chakra_Petch } from 'next/font/google';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import './globals.css';

const chakra = Chakra_Petch({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Portfólio - Bernardo Filipe',
	description: 'Portfólio de Bernardo Filipe, desenvolvedor frontend.',
	openGraph: {
		title: 'Portfólio - Bernardo Filipe',
		description: 'Portfólio de Bernardo Filipe, desenvolvedor frontend.',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Portfólio - Bernardo Filipe',
		description: 'Portfólio de Bernardo Filipe, desenvolvedor frontend.',
	},
	icons: { icon: '/icon.svg' },
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body
				className={`${chakra.className} dark bg-neutral-950`}
				suppressHydrationWarning
			>
				<NextIntlClientProvider messages={messages}>
					<div className="min-h-svh w-full">
						<Header />
						<main className="px-4 md:px-6">{children}</main>
						<Toaster />
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
