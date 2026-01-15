'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { NavigateLink } from './navigate-link';

export const NavigateMobile = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const LINKS_NAVIGATE = [
    { name: t('home'), href: '/#hero' },
    { name: t('about'), href: '/#about' },
    { name: t('experiences'), href: '/#experience' },
    { name: t('projects'), href: '/#projects' },
    { name: t('knowledge'), href: '/#knowledge' },
    { name: t('contact'), href: '/#contact' },
  ];

  const handleCloseDrawer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <div className="relative size-6">
          <Image
            src="/icon/menu.svg"
            className="object-contain"
            fill
            alt="icon-menu"
          />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Que sessão você deseja ir?</DrawerTitle>
          <DrawerDescription>
            Clique em uma das opções para ser redirecionado.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          {LINKS_NAVIGATE.map((v) => (
            <NavigateLink
              key={v.name}
              href={v.href}
              title={v.name}
              onClick={handleCloseDrawer}
            />
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
