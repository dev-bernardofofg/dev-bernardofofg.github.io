import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';
import './globals.css';
import { Header } from './_components/header';

const chakra = Chakra_Petch({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Boilerplate Title',
	description: 'Boilerplate Description',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${chakra.className} dark bg-neutral-800`}>
				<div className="base:p-2 md:p-4 w-full h-screen">
					<div className="bg-neutral-900 rounded-2xl shadow-lg size-full base:p-4 md:p-8 space-y-16 overflow-y-auto  [&::-webkit-scrollbar]:hidden">
						<Header />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
