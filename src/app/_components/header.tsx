'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../_hooks/use-media-query';
import { NavigateMobile } from './navigate-mobile';

export const LINKS_NAVIGATE = [
  { name: 'Início', href: '/#hero' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Experiências', href: '/#experience' },
  { name: 'Projetos', href: '/#projects' },
  { name: 'Conhecimentos', href: '/#knowledge' },
  { name: 'Contato', href: '/#contact' },
];

export const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 998px)');
  const [pathNameActive, setPathNameActive] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setPathNameActive(window.location.hash || '/#hero');

    const handleHashChange = () => {
      setPathNameActive(window.location.hash);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <Link href="/#hero" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-primary bg-neutral-900 shadow-md shadow-primary/20">
            <span className="font-bold text-lg text-primary">B</span>
          </div>
          {!isDesktop && (
            <div className="flex flex-col">
              <span className="font-bold text-white">Bernardo Filipe</span>
              <span className="text-neutral-500 text-xs">Full-Stack Dev</span>
            </div>
          )}
        </Link>

        {/* Navegação desktop */}
        {isDesktop ? (
          <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
            {LINKS_NAVIGATE.map(({ name, href }) => {
              const isActive = pathNameActive === href;

              return (
                <Link
                  href={href}
                  key={name}
                  onClick={() => setPathNameActive(href)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-primary/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{name}</span>
                </Link>
              );
            })}
          </nav>
        ) : (
          <NavigateMobile />
        )}

        {/* CTA desktop */}
        {isDesktop && (
          <Link
            href="/#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Fale comigo
          </Link>
        )}
      </div>
    </motion.header>
  );
};
