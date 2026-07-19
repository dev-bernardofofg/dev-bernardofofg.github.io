import { projects } from '@/lib/data';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Projetos — Bernardo Filipe',
	description:
		'O que construí, com o contexto técnico: problema, decisões de arquitetura e resultado.',
};

export default function ProjectsPage() {
	const t = useTranslations('projects');

	return (
		<div className="mx-auto w-full max-w-[980px] animate-page-in px-6 pt-14 md:px-8">
			<h1 className="font-extrabold text-[42px] text-foreground tracking-[-0.03em]">
				{t('title')}
			</h1>
			<p className="mt-2.5 max-w-[560px] text-[16px] text-secondary leading-[1.6]">
				{t('description')}
			</p>
			<div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
				{projects.map((project) => (
					<Link
						key={project.id}
						href={`/projetos/${project.id}`}
						className="glass-card hover:-translate-y-0.5 flex flex-col rounded-[20px] px-7 py-[26px] shadow-card transition-[transform,box-shadow] duration-150 hover:shadow-card-hover"
					>
						<div className="flex items-baseline justify-between">
							<span className="font-extrabold text-[20px] text-foreground tracking-[-0.015em]">
								{project.name}
							</span>
							<span className="font-mono text-[11px] text-accent-a">
								{project.year}
							</span>
						</div>
						<div className="mt-1.5 flex-1 text-[14px] text-secondary leading-[1.6]">
							{project.summary}
						</div>
						<div className="mt-4 flex flex-wrap gap-1.5">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-tag px-2.5 py-1 font-mono text-[10.5px] text-secondary"
								>
									{tag}
								</span>
							))}
						</div>
						<div className="mt-4 font-bold text-[13px] text-accent-a">
							{t('caseStudy')} →
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
