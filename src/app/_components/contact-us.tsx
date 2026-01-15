'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FormContact } from './form-contact';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ContactUs = () => {
  const t = useTranslations('contact');

  return (
    <section
      className="mx-auto w-full max-w-7xl scroll-mt-12 px-4"
      id="contact"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12"
      >
        {/* Glow decorativo */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-40 rounded-full bg-primary/5 blur-3xl" />

        {/* Título */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-bold text-4xl">
            {t('title')} <span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Formulário */}
        <motion.div variants={itemVariants}>
          <FormContact />
        </motion.div>
      </motion.div>
    </section>
  );
};
