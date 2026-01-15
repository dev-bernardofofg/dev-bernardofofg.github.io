'use client';

import { useTranslations } from 'next-intl';
import { AnimatedSection } from './animate-section';
import { FormContact } from './form-contact';

export const ContactUs = () => {
  const t = useTranslations('contact');

  return (
    <AnimatedSection
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4"
      id="contact"
    >
      <div className="w-full text-center font-bold text-4xl">
        <h2>
          {t('title')} <span className="text-primary">.</span>
        </h2>
      </div>
      <FormContact />
    </AnimatedSection>
  );
};
