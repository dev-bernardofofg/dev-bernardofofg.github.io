'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface CardProjectProps {
  title: string;
  paragraph: string;
  link: string;
  technologies: string[];
}

export const CardProject = ({
  link,
  paragraph,
  title,
  technologies,
}: CardProjectProps) => {
  const t = useTranslations('common');

  return (
    <div
      className={cn(
        'group relative flex h-72 flex-col justify-between overflow-hidden rounded-2xl p-6',
        'border border-white/10 bg-white/5 backdrop-blur-md',
        'transition-all duration-300',
        'hover:border-primary/50 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/10',
      )}
    >
      {/* Glow effect no hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 size-40 rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 space-y-3">
        <h3 className="font-bold text-white text-xl transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-neutral-400 text-sm leading-relaxed">
          {paragraph}
        </p>
      </div>

      {/* Tags de tecnologias */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-800/80 px-3 py-1 text-neutral-300 text-xs font-medium transition-colors group-hover:bg-primary/20 group-hover:text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      <Link
        href={link}
        target="_blank"
        className="relative z-10 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
      >
        {t('viewProject')}
        <ArrowUpRight className="size-4" />
      </Link>
    </div>
  );
};
