import { AboutSection } from '@/app/_components/about-section';
import { BlogPreview } from '@/app/_components/blog-preview';
import { ContactCta } from '@/app/_components/contact-cta';
import { Hero } from '@/app/_components/hero';
import { ProjectsPreview } from '@/app/_components/projects-preview';
import { StackSection } from '@/app/_components/stack-section';
import { profile } from '@/lib/data';
import { localize } from '@/lib/i18n';
import { siteUrl } from '@/lib/site';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const personJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		jobTitle: localize(profile.role, locale),
		description: localize(profile.bio1, locale),
		url: siteUrl,
		email: `mailto:${profile.email}`,
		sameAs: [profile.github, profile.linkedin],
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático gerado do data layer
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
			/>
			<Hero />
			<StackSection />
			<BlogPreview />
			<ProjectsPreview />
			<AboutSection />
			<ContactCta />
		</>
	);
}
