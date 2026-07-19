'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export type CategoryFilter = 'tudo' | 'pattern' | 'deep dive' | 'til';

export const categoryFilters: CategoryFilter[] = [
	'tudo',
	'pattern',
	'deep dive',
	'til',
];

type CategoryFiltersProps = {
	value: CategoryFilter;
	onChange: (filter: CategoryFilter) => void;
};

export const CategoryFilters = ({ value, onChange }: CategoryFiltersProps) => {
	const t = useTranslations('blog');

	return (
		<div className="flex flex-wrap gap-1.5">
			{categoryFilters.map((filter) => {
				const active = value === filter;
				return (
					<button
						key={filter}
						type="button"
						onClick={() => onChange(filter)}
						className={cn(
							'cursor-pointer rounded-full border px-3.5 py-[7px] font-medium font-mono text-[11.5px] transition-colors hover:border-faint',
							active
								? 'border-foreground bg-foreground text-background'
								: 'border-glass-border bg-glass text-muted',
						)}
					>
						{filter === 'tudo' ? t('filterAll') : filter}
					</button>
				);
			})}
		</div>
	);
};
