import {
	HoverCardContent,
	HoverCardTrigger,
	HoverCard as ShadcnHoverCard,
} from '@/components/ui/hover-card';
import type { ReactNode } from 'react';

interface HoverCardProps {
	children: ReactNode;
	description: string;
}

export const HoverCard = ({ children, description }: HoverCardProps) => {
	return (
		<ShadcnHoverCard>
			<HoverCardTrigger>{children}</HoverCardTrigger>
			<HoverCardContent>{description} </HoverCardContent>
		</ShadcnHoverCard>
	);
};
