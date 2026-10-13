// Perfil + stack ficam aqui (não vêm de MDX).
// Posts e projects são gerados em content-index.generated.ts a partir dos
// arquivos content/<kind>/<slug>.<locale>.mdx. Rodar `pnpm content:build`
// (ou qualquer build) depois de editar o conteúdo.

import type { Translated } from './i18n';

export type PostCategory = 'PATTERN' | 'TIL' | 'DEEP DIVE';

export type StackItem = {
	layer: Translated<string>;
	tools: string;
	proof: Translated<string>;
	level: number;
	since: string;
};

export type Post = {
	id: string;
	cat: PostCategory;
	dateIso: string;
	min: number;
	title: Translated<string>;
	excerpt: Translated<string>;
	teaser: string | null;
};

export type RepoLink = {
	label: Translated<string>;
	url: string;
};

export type Project = {
	id: string;
	name: string;
	year: string;
	tech: string;
	link: string;
	linkLabel: Translated<string>;
	repos?: RepoLink[];
	tags: string[];
	summary: Translated<string>;
	problem: Translated<string>;
	decision: Translated<string>;
	result: Translated<string>;
};

export type ProfileFact = {
	label: Translated<string>;
	value: Translated<string>;
};

export const profile = {
	name: 'Bernardo Filipe',
	role: {
		'pt-BR': 'Desenvolvedor Full-stack',
		en: 'Full-stack Developer',
		es: 'Desarrollador Full-stack',
	} satisfies Translated<string>,
	location: {
		'pt-BR': 'Brasil',
		en: 'Brazil',
		es: 'Brasil',
	} satisfies Translated<string>,
	bio1: {
		'pt-BR':
			'Sou desenvolvedor full-stack com foco em front-end. Trabalho com React, Next.js e TypeScript no dia a dia, construindo interfaces rápidas e bem estruturadas — e no back-end com Node.js, Express e Fastify quando o produto pede a stack inteira.',
		en: "I'm a full-stack developer focused on front-end. I work with React, Next.js and TypeScript day to day, building fast, well-structured interfaces — and on the back-end with Node.js, Express and Fastify when the product needs the whole stack.",
		es: 'Soy desarrollador full-stack enfocado en front-end. Trabajo con React, Next.js y TypeScript en el día a día, construyendo interfaces rápidas y bien estructuradas — y en el back-end con Node.js, Express y Fastify cuando el producto pide el stack completo.',
	} satisfies Translated<string>,
	bio2: {
		'pt-BR':
			'Acredito que profundidade técnica se demonstra em público: cada projeto aqui tem o contexto das decisões, e o blog documenta o que aprendo construindo. Código limpo, contratos claros e performance não são detalhes — são o produto.',
		en: "I believe technical depth shows in public: every project here carries the context of the decisions, and the blog documents what I learn by building. Clean code, clear contracts and performance aren't details — they're the product.",
		es: 'Creo que la profundidad técnica se demuestra en público: cada proyecto aquí trae el contexto de las decisiones, y el blog documenta lo que aprendo construyendo. Código limpio, contratos claros y rendimiento no son detalles — son el producto.',
	} satisfies Translated<string>,
	facts: [
		{
			label: {
				'pt-BR': 'FOCO',
				en: 'FOCUS',
				es: 'ENFOQUE',
			},
			value: {
				'pt-BR': 'Front-end com React/Next.js',
				en: 'Front-end with React/Next.js',
				es: 'Front-end con React/Next.js',
			},
		},
		{
			label: {
				'pt-BR': 'TAMBÉM',
				en: 'ALSO',
				es: 'TAMBIÉN',
			},
			value: {
				'pt-BR': 'Node.js, Express, Fastify',
				en: 'Node.js, Express, Fastify',
				es: 'Node.js, Express, Fastify',
			},
		},
		{
			label: {
				'pt-BR': 'EXPERIÊNCIA',
				en: 'EXPERIENCE',
				es: 'EXPERIENCIA',
			},
			value: {
				'pt-BR': 'Em produção desde 2022',
				en: 'In production since 2022',
				es: 'En producción desde 2022',
			},
		},
		{
			label: {
				'pt-BR': 'ABERTO A',
				en: 'OPEN TO',
				es: 'ABIERTO A',
			},
			value: {
				'pt-BR': 'CLT, PJ e freelance',
				en: 'Full-time, contract and freelance',
				es: 'Tiempo completo, contrato y freelance',
			},
		},
	] satisfies ProfileFact[],
	email: 'dev.bernardofofg@gmail.com',
	github: 'https://github.com/dev-bernardofofg',
	linkedin: 'https://linkedin.com/in/bernardofofg',
	cv: '/Bernardo%20Filipe%20-%20Curriculo.pdf',
	cvEn: '/Bernardo%20Filipe%20-%20Resume.pdf',
};

export function getCv(locale: string) {
	return locale.startsWith('pt') ? profile.cv : profile.cvEn;
}

export const stack: StackItem[] = [
	{
		layer: {
			'pt-BR': 'FRONT',
			en: 'FRONT',
			es: 'FRONT',
		},
		tools: 'React · Next.js · Tailwind',
		proof: {
			'pt-BR': 'Backoffices e landing pages em produção (Senfio, Alvo)',
			en: 'Backoffices and landing pages in production (Senfio, Alvo)',
			es: 'Backoffices y landing pages en producción (Senfio, Alvo)',
		},
		level: 92,
		since: '2022',
	},
	{
		layer: {
			'pt-BR': 'ESTADO & FORMS',
			en: 'STATE & FORMS',
			es: 'ESTADO Y FORMS',
		},
		tools: 'TanStack Query · Zustand · RHF',
		proof: {
			'pt-BR': 'Dashboards com cache e formulários validados com Zod',
			en: 'Dashboards with cache and forms validated with Zod',
			es: 'Dashboards con caché y formularios validados con Zod',
		},
		level: 86,
		since: '2023',
	},
	{
		layer: {
			'pt-BR': 'BACK-END',
			en: 'BACK-END',
			es: 'BACK-END',
		},
		tools: 'Node · Express · Fastify',
		proof: {
			'pt-BR': 'APIs com Drizzle/Prisma sobre PostgreSQL e MongoDB',
			en: 'APIs with Drizzle/Prisma over PostgreSQL and MongoDB',
			es: 'APIs con Drizzle/Prisma sobre PostgreSQL y MongoDB',
		},
		level: 78,
		since: '2022',
	},
	{
		layer: {
			'pt-BR': 'FERRAMENTAS',
			en: 'TOOLS',
			es: 'HERRAMIENTAS',
		},
		tools: 'Docker · GH Actions · Playwright',
		proof: {
			'pt-BR': 'CI, containers e testes e2e no fluxo de entrega',
			en: 'CI, containers and e2e tests in the delivery flow',
			es: 'CI, contenedores y pruebas e2e en el flujo de entrega',
		},
		level: 72,
		since: '2023',
	},
];

export const postCategories = ['PATTERN', 'DEEP DIVE', 'TIL'] as const;

export {
	postsIndex as posts,
	projectsIndex as projects,
} from './content-index.generated';

import {
	postsIndex as _postsIndex,
	projectsIndex as _projectsIndex,
} from './content-index.generated';

export function getPost(id: string) {
	return _postsIndex.find((p) => p.id === id);
}

export function getProject(id: string) {
	return _projectsIndex.find((p) => p.id === id);
}
