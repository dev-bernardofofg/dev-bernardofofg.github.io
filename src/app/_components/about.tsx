'use client';

import { Button } from '@/components/ui/button';
import { SOCIAL_LINK } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SocialLink } from './social-link';

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

export const About = () => {
  return (
    <section
      className="mx-auto w-full max-w-7xl scroll-mt-12 px-4"
      id="about"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row md:items-center md:gap-12 md:p-12"
      >
        {/* Glow decorativo */}
        <div className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 size-40 rounded-full bg-primary/5 blur-3xl" />

        {/* Lado esquerdo - Visual */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="relative size-64 animate-levitate md:size-80">
            <Image
              src="/element/wrapper.svg"
              fill
              alt="Elemento decorativo"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Lado direito - Conteúdo */}
        <div className="relative z-10 flex flex-1 flex-col gap-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-sm font-medium text-primary">Quem sou</span>
            <h2 className="font-bold text-4xl text-white">Bernardo Filipe</h2>
            <p className="text-lg text-neutral-400">Full-Stack Developer</p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-neutral-400 leading-relaxed"
          >
            Desenvolvedor full-stack especializado em front-end com React e
            Next.js. Focado em criar experiências digitais de alta qualidade,
            com código limpo e performance otimizada. Atualmente aberto a novas
            oportunidades de trabalho.
          </motion.p>

          {/* Ações */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Links sociais */}
            <div className="flex gap-3">
              {SOCIAL_LINK.map((v) => (
                <SocialLink
                  key={v.name}
                  href={v.href}
                  name={v.name}
                  icon={v.icon}
                />
              ))}
            </div>

            {/* Botão Download CV */}
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/cv.pdf" target="_blank" download>
                <Download className="size-4" />
                Download CV
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
