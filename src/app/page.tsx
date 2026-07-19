import { profile } from '@/lib/data';
import { siteUrl } from '@/lib/site';
import { AboutSection } from './_components/about-section';
import { BlogPreview } from './_components/blog-preview';
import { ContactCta } from './_components/contact-cta';
import { Hero } from './_components/hero';
import { ProjectsPreview } from './_components/projects-preview';
import { StackSection } from './_components/stack-section';

const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: profile.name,
	jobTitle: profile.role,
	url: siteUrl,
	email: `mailto:${profile.email}`,
	sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
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
