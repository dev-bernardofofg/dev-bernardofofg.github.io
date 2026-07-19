import { getProject, profile, projects } from '@/lib/data';
import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.id }));
}

export default async function Image({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = getProject(slug);

	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				padding: '72px 88px',
				background: '#F4F6FB',
				backgroundImage:
					'radial-gradient(ellipse 700px 440px at 10% -10%, rgba(240,83,83,0.25), transparent 60%), radial-gradient(ellipse 640px 400px at 95% 5%, rgba(251,146,60,0.20), transparent 60%)',
				fontFamily: 'sans-serif',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<div
					style={{
						width: 110,
						height: 110,
						borderRadius: 26,
						background: 'linear-gradient(135deg, #F05353, #F97316)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: '#FFFFFF',
						fontSize: 44,
						fontWeight: 600,
					}}
				>
					bf_
				</div>
				<div style={{ display: 'flex', fontSize: 26, color: '#F05353' }}>
					{project?.tech ?? 'PROJETO'}
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div
					style={{
						display: 'flex',
						fontSize: 64,
						fontWeight: 800,
						color: '#1E293B',
						letterSpacing: '-0.025em',
						lineHeight: 1.15,
					}}
				>
					{project?.name ?? profile.name}
				</div>
				<div
					style={{
						display: 'flex',
						fontSize: 28,
						color: '#64748B',
						marginTop: 24,
						maxWidth: 900,
					}}
				>
					{project?.summary ?? 'bernardo.dev_'}
				</div>
			</div>
		</div>,
		size,
	);
}
