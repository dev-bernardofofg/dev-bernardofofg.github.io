import { Link } from '@/i18n/navigation';
import { projects } from '@/lib/data';
import { useTranslations } from 'next-intl';

export const ProjectsPreview = () => {
	const t = useTranslations('projects');

	return (
		<section
			id="projetos"
			className="mx-auto w-full max-w-[1120px] px-6 pb-16 md:px-8"
		>
			<div className="mb-5 flex items-baseline gap-3.5">
				<h2 className="font-extrabold text-[22px] text-foreground tracking-[-0.02em] md:text-[26px]">
					{t('selectedTitle')}
				</h2>
				<Link
					href="/projetos"
					className="font-bold text-[13px] text-accent-a hover:text-accent-b"
				>
					{t('viewAll')} →
				</Link>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{projects.slice(0, 2).map((project) => (
					<div
						key={project.id}
						className="glass-card-strong rounded-[22px] px-7 py-7 shadow-card"
					>
						<div className="flex items-baseline justify-between">
							<span className="font-extrabold text-[20px] text-foreground tracking-[-0.015em]">
								{project.name}
							</span>
							<span className="font-mono text-[11px] text-accent-a">
								{project.tech}
							</span>
						</div>
						<div className="mt-[18px] grid grid-cols-[92px_1fr] gap-x-3.5 gap-y-2.5 text-[14px] leading-[1.55]">
							<span className="pt-[3px] font-mono text-[10.5px] text-faint">
								{t('problem')}
							</span>
							<span className="text-secondary">{project.problem}</span>
							<span className="pt-[3px] font-mono text-[10.5px] text-faint">
								{t('decision')}
							</span>
							<span className="text-secondary">{project.decision}</span>
							<span className="pt-[3px] font-mono text-[10.5px] text-faint">
								{t('result')}
							</span>
							<span className="font-bold text-foreground">
								{project.result}
							</span>
						</div>
						<Link
							href={`/projetos/${project.id}`}
							className="mt-[18px] inline-block font-bold text-[13.5px] text-accent-a hover:text-accent-b"
						>
							{t('caseStudy')} →
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};
