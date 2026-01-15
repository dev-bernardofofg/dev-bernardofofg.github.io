'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useTypewriter } from '../_hooks/use-typewriter';
import { TechOrbit } from './tech-orbit';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15, delay: 0.6 },
  },
};

export const Hero = () => {
  const t = useTranslations('hero');

  const { displayText, isComplete } = useTypewriter({
    text: t('role'),
    speed: 70,
    delay: 800,
  });

  return (
    <section
      className="relative mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-7xl scroll-mt-64 items-center overflow-hidden px-4"
      id="hero"
    >
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient glow */}
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-primary/10 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm"
        >
          <span className="size-2 animate-pulse rounded-full bg-primary" />
          <span className="text-primary">{t('available')}</span>
        </motion.div>

        {/* Título */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <h1 className="bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text font-bold text-transparent base:text-5xl md:text-7xl">
            {t('name')}
          </h1>

          {/* Subtítulo com typewriter */}
          <h2 className="flex items-center justify-center gap-1 font-bold base:text-2xl md:justify-start md:text-4xl">
            <span className="text-neutral-400">{displayText}</span>
            <span
              className={`inline-block h-8 w-0.5 bg-primary md:h-10 ${isComplete ? 'animate-blink' : ''}`}
            />
          </h2>
        </motion.div>

        {/* Descrição */}
        <motion.p
          variants={itemVariants}
          className="max-w-lg text-neutral-400 base:text-base md:text-lg"
        >
          {t('description')}
        </motion.p>

        {/* Botões */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <Button size="lg" className="group text-base" asChild>
            <Link href="#contact">
              {t('cta')}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Link
            href="#projects"
            className="flex h-12 items-center gap-2 rounded-full border border-neutral-700 px-6 text-neutral-300 transition-all hover:border-primary hover:text-primary"
          >
            <span className="font-medium">{t('viewProjects')}</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Órbita de tecnologias */}
      <motion.div
        className="relative hidden flex-1 items-center justify-center md:flex"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
      >
        <TechOrbit />
      </motion.div>
    </section>
  );
};
