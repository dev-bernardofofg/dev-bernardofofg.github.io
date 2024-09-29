import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from './_components/header';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500'],
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
			<body className={`${poppins.className} dark bg-neutral-800`}>
				<div className="base:p-2 md:p-4 w-full h-screen">
					<div className="bg-neutral-900 rounded-2xl shadow-lg size-full base:p-4 md:p-8">
						<Header />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
