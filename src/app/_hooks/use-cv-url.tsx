'use client';

import { useLocale } from 'next-intl';

export const useCvUrl = () => {
  const locale = useLocale();
  return locale === 'en'
    ? '/Bernardo Filipe - Resume.pdf'
    : '/Bernardo Filipe - Curriculo.pdf';
};
