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
      <body className={`${chakra.className} dark bg-neutral-800`}>
        <NextIntlClientProvider messages={messages}>
          <div className="h-svh w-full base:p-0 lg:p-4">
            <div className="size-full space-y-16 overflow-y-auto base:rounded-none bg-neutral-900 shadow-lg md:rounded-2xl [&::-webkit-scrollbar]:hidden">
              <Header />
              <div className="base:px-2 md:px-4">{children}</div>
              <Toaster />
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
