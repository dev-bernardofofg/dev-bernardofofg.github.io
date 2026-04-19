'use client';

import { containerVariants, itemVariants } from '@/app/_animations/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FormContact } from './form-contact';

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
				<div className="-right-20 -top-20 pointer-events-none absolute size-60 rounded-full bg-primary/10 blur-3xl" />
				<div className="-bottom-20 -left-20 pointer-events-none absolute size-40 rounded-full bg-primary/5 blur-3xl" />

				{/* Título */}
				<motion.div variants={itemVariants} className="space-y-2 text-center">
					<span className="text-sm font-medium text-primary">{t('label')}</span>
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
