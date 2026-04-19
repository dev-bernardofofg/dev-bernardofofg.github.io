'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp } from '../_animations/animations';

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
