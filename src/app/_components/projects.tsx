'use client';

import { PROJECTS } from '@/lib/constants';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { AnimatedSection } from './animate-section';
import { CardProject } from './card-project';

export const Projects = () => {
  const t = useTranslations('projects');

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Mapeamento de projetos para chaves de tradução
  const projectKeys = ['alvo', 'converseia', 'fe', 'devstore'] as const;

  return (
    <AnimatedSection
      className="mx-auto mb-4 flex w-full max-w-7xl scroll-mt-32 flex-col gap-8"
      id="projects"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-4xl">
          {t('title')} <span className="text-primary">.</span>
        </h2>

        {/* Navegação */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="flex size-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 disabled:opacity-30"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="flex size-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 disabled:opacity-30"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {PROJECTS.map((project, index) => (
            <div
              key={project.link}
              className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] last:pr-4"
            >
              <CardProject
                title={t(`items.${projectKeys[index]}.title`)}
                paragraph={t(`items.${projectKeys[index]}.description`)}
                link={project.link}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicadores */}
      <div className="flex justify-center gap-2">
        {PROJECTS.map((_, index) => (
          <button
            key={`dot-${PROJECTS[index].link}`}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`size-2 rounded-full transition-all ${index === selectedIndex
              ? 'w-6 bg-primary'
              : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};
