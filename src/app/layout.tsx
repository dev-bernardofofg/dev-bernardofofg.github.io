import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';
import './globals.css';
import { Header } from './_components/header';
import { Footer } from './_components/footer';
import { Toaster } from '@/components/ui/toaster';

const chakra = Chakra_Petch({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Portfólio - Bernardo Filipe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={`${chakra.className} dark bg-neutral-800`}>
				<div className="h-screen w-full base:p-0 lg:p-4">
					<div className="size-full space-y-16 overflow-y-auto base:rounded-none bg-neutral-900 shadow-lg md:rounded-2xl [&::-webkit-scrollbar]:hidden">
						<Header />
						<div className="base:px-2 md:px-4">{children}</div>
						<Toaster />
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
