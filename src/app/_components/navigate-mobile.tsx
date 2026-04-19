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
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { useCvUrl } from '../_hooks/use-cv-url';
import { useNavigationLinks } from '../_hooks/use-navigation-links';
import { NavigateLink } from './navigate-link';

export const NavigateMobile = () => {
	const [open, setOpen] = useState(false);
	const LINKS_NAVIGATE = useNavigationLinks();
	const tCommon = useTranslations('common');
	const tNav = useTranslations('nav');
	const cvUrl = useCvUrl();

	const handleCloseDrawer = () => {
		setOpen(false);
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
					<DrawerTitle>{tNav('drawerTitle')}</DrawerTitle>
					<DrawerDescription>{tNav('drawerDescription')}</DrawerDescription>
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
					<a
						href={cvUrl}
						download
						className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3 font-medium text-sm text-white transition-all hover:border-primary/50 hover:text-primary"
					>
						<Download className="size-4" />
						{tCommon('downloadCV')}
					</a>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
