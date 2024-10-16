'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../_animations/animations';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	id: string;
}

export const AnimatedSection = ({
	children,
	className,
	id,
}: AnimatedSectionProps) => (
	<motion.section
		variants={fadeInUp}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.2 }}
		className={className}
		id={id}
	>
		{children}
	</motion.section>
);
