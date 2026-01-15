'use client';

import { KNOWLEDGE, type KnowledgeCategory } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useMediaQuery } from '../_hooks/use-media-query';

type CategoryFilter = KnowledgeCategory | 'all';

// Componente de indicador de proficiência
const ProficiencyIndicator = ({ level }: { level: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((dot) => (
      <div
        key={dot}
        className={cn(
          'size-2 rounded-full transition-colors',
          dot <= level ? 'bg-primary' : 'bg-neutral-700',
        )}
      />
    ))}
  </div>
);

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export const GridKnowledgeCard = () => {
  const t = useTranslations('knowledge');
  const [selected, setSelected] = useState<string | null>(null);
  const [category, setCategory] = useState<CategoryFilter>('all');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const CATEGORY_LABELS: Record<CategoryFilter, string> = {
    all: t('categories.all'),
    frontend: t('categories.frontend'),
    backend: t('categories.backend'),
    tools: t('categories.tools'),
  };

  const LEVEL_LABELS: Record<number, string> = {
    1: t('levels.1'),
    2: t('levels.2'),
    3: t('levels.3'),
    4: t('levels.4'),
    5: t('levels.5'),
  };

  // Filtra conhecimentos por categoria
  const filteredKnowledge = useMemo(
    () =>
      category === 'all'
        ? KNOWLEDGE
        : KNOWLEDGE.filter((k) => k.category === category),
    [category],
  );

  // Handler para interação (hover no desktop, tap no mobile)
  const handleInteraction = (technology: string) => {
    if (isMobile) {
      setSelected((prev) => (prev === technology ? null : technology));
    } else {
      setSelected(technology);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setSelected(null);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Header com título */}
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-4xl">
          {t('title')} <span className="text-primary">.</span>
        </h2>
        <p className="text-neutral-500 text-sm">
          {isMobile ? t('tapHint') : t('hoverHint')}
        </p>
      </div>

      {/* Tabs de categorias */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(CATEGORY_LABELS) as CategoryFilter[]).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all',
              category === cat
                ? 'bg-primary text-primary-foreground'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-200',
            )}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Grid de cards */}
      <motion.div
        key={category}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredKnowledge.map((know) => {
          const isActive = selected === know.technology;

          return (
            <motion.div
              key={know.technology}
              variants={cardVariants}
              onClick={() => handleInteraction(know.technology)}
              onMouseEnter={() => !isMobile && handleInteraction(know.technology)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleInteraction(know.technology)}
              tabIndex={0}
              className={cn(
                'group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 p-4 transition-all duration-300',
                isActive
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20'
                  : 'border-neutral-800 hover:border-primary/50',
              )}
            >
              {/* Ícone */}
              <motion.div
                className="relative size-14 md:size-16"
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Image src={know.icon} fill alt={know.technology} />
              </motion.div>

              {/* Nome da tecnologia */}
              <span
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-primary' : 'text-neutral-400',
                )}
              >
                {know.technology}
              </span>

              {/* Indicador de proficiência no card */}
              <ProficiencyIndicator level={know.level} />

              {/* Descrição expandida quando ativo */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full overflow-hidden"
                  >
                    <div className="border-t border-neutral-700 pt-3 mt-2">
                      <p className="text-center text-neutral-400 text-xs leading-relaxed">
                        {know.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-neutral-500 text-xs">
                          {LEVEL_LABELS[know.level]}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
