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
import Image from 'next/image';
import { NavigateLink } from './navigate-link';
import { LINKS_NAVIGATE } from './header';
import { useState } from 'react';

export const NavigateMobile = () => {
	const [open, setOpen] = useState(false);

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
					<DrawerTitle>Que sessão vocÊ deseja ir?</DrawerTitle>
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
