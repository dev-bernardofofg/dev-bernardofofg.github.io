import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { type Locale, defaultLocale, locales } from './config';

export default getRequestConfig(async () => {
  // Tenta pegar do cookie primeiro
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value as Locale | undefined;

  if (localeCookie && locales.includes(localeCookie)) {
    return {
      locale: localeCookie,
      messages: (await import(`./messages/${localeCookie}.json`)).default,
    };
  }

  // Fallback para Accept-Language header
  const headerStore = await headers();
  const acceptLanguage = headerStore.get('accept-language');

  if (acceptLanguage) {
    const browserLocale = acceptLanguage.split(',')[0].split('-')[0];

    if (browserLocale === 'pt') {
      return {
        locale: 'pt-BR',
        messages: (await import('./messages/pt-BR.json')).default,
      };
    }

    if (browserLocale === 'es') {
      return {
        locale: 'es',
        messages: (await import('./messages/es.json')).default,
      };
    }

    if (browserLocale === 'en') {
      return {
        locale: 'en',
        messages: (await import('./messages/en.json')).default,
      };
    }
  }

  // Default
  return {
    locale: defaultLocale,
    messages: (await import(`./messages/${defaultLocale}.json`)).default,
  };
});
