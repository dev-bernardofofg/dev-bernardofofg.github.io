import { getProject, profile, projects } from '@/lib/data';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlocksRenderer } from '../../_components/blocks-renderer';

type ProjectPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) return {};

	return {
		title: `${project.name} — ${profile.name}`,
		description: project.summary,
	};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) notFound();

	const t = await getTranslations('projects');

	return (
		<article className="mx-auto w-full max-w-[760px] animate-page-in px-6 pt-12 md:px-8">
			<Link
				href="/projetos"
				className="glass-card inline-block rounded-full px-[18px] py-[9px] font-bold text-[13px] text-secondary backdrop-blur-[10px] transition-colors hover:bg-glass-strong hover:text-foreground"
			>
				← {t('backToAll')}
			</Link>
			<div className="mt-7 flex items-baseline gap-2.5 font-mono text-[11.5px] text-faint">
				<span className="font-semibold text-accent-a">
					{t('caseStudyLabel')}
				</span>
				<span>{project.year}</span>
			</div>
			<h1 className="mt-3 font-extrabold text-[30px] text-foreground leading-[1.15] tracking-[-0.025em] md:text-[36px]">
				{project.name}
			</h1>
			<div className="mt-3.5 flex flex-wrap gap-1.5">
				{project.tags.map((tag) => (
					<span
						key={tag}
						className="rounded-full bg-tag px-2.5 py-1 font-mono text-[10.5px] text-secondary"
					>
						{tag}
					</span>
				))}
			</div>
			<div className="mt-5 mb-2 h-1 w-14 rounded-full accent-gradient" />
			<BlocksRenderer blocks={project.blocks} />
			<div className="mt-9 flex flex-wrap gap-2.5">
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block rounded-[14px] px-[22px] py-3 font-bold text-[14px] text-white accent-gradient shadow-[0_8px_22px_rgba(240,83,83,0.25)] transition-[filter] hover:brightness-[1.08]"
				>
					{project.linkLabel}
				</a>
				{project.repos
					?.filter((repo) => repo.url !== project.link)
					.map((repo) => (
						<a
							key={repo.url}
							href={repo.url}
							target="_blank"
							rel="noopener noreferrer"
							className="glass-card rounded-[14px] px-[22px] py-3 font-bold text-[14px] text-foreground transition-colors hover:bg-glass-strong"
						>
							{repo.label}
						</a>
					))}
				<Link
					href="/projetos"
					className="glass-card rounded-[14px] px-[22px] py-3 font-bold text-[14px] text-foreground transition-colors hover:bg-glass-strong"
				>
					← {t('back')}
				</Link>
			</div>
		</article>
	);
}
