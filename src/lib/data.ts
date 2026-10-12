// Camada de dados única do portfólio.
// Hoje os dados vivem aqui; quando houver backend real, troque o corpo de getDb()
// por um fetch para a API e mantenha os tipos como contrato.

import readingTimes from '../../content/reading-times.json';
import type { Translated } from './i18n';

const readingMinutes = (slug: string): number => {
	const value = (readingTimes as Record<string, number>)[slug];
	if (typeof value !== 'number') {
		throw new Error(
			`No reading time for post "${slug}". Run \`node scripts/compute-reading-times.mjs\`.`,
		);
	}
	return value;
};

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

export const posts: Post[] = [
	{
		id: 'zod',
		cat: 'PATTERN',
		dateIso: '2026-07-08',
		min: readingMinutes('zod'),
		title: {
			'pt-BR': 'Zod como fonte única do contrato: parse, não validate',
			en: 'Zod as the single source of the contract: parse, not validate',
			es: 'Zod como fuente única del contrato: parse, no validate',
		},
		excerpt: {
			'pt-BR':
				'O tipo já existe no schema — inferir em vez de duplicar mudou como eu desenho APIs. DTOs duplicados eram a fonte nº 1 de drift entre front e back.',
			en: 'The type already lives in the schema — inferring instead of duplicating changed how I design APIs. Duplicated DTOs were the #1 source of drift between front and back.',
			es: 'El tipo ya existe en el schema — inferirlo en vez de duplicarlo cambió cómo diseño APIs. Los DTOs duplicados eran la fuente nº 1 de drift entre front y back.',
		},
		teaser:
			'const CreateUser = z.object({ email: z.string().email() });\ntype CreateUser = z.infer<typeof CreateUser>; // um só lugar',
	},
	{
		id: 'supertest',
		cat: 'TIL',
		dateIso: '2026-07-03',
		min: readingMinutes('supertest'),
		title: {
			'pt-BR': 'supertest aceita o app do Express direto, sem listen()',
			en: 'supertest accepts the Express app directly, no listen() needed',
			es: 'supertest acepta la app de Express directo, sin listen()',
		},
		excerpt: {
			'pt-BR':
				'Testes de integração sem porta ocupada, sem beforeAll de servidor, sem flakiness de porta em uso no CI.',
			en: 'Integration tests with no busy port, no server beforeAll, no port-in-use flakiness in CI.',
			es: 'Tests de integración sin puerto ocupado, sin beforeAll de servidor, sin flakiness de puerto en uso en CI.',
		},
		teaser: null,
	},
	{
		id: 'drizzle-tx',
		cat: 'DEEP DIVE',
		dateIso: '2026-06-30',
		min: readingMinutes('drizzle-tx'),
		title: {
			'pt-BR': 'Transações no Drizzle: onde o rollback silencioso mora',
			en: 'Drizzle transactions: where silent rollback lives',
			es: 'Transacciones en Drizzle: dónde vive el rollback silencioso',
		},
		excerpt: {
			'pt-BR':
				'Um bug de produção, três linhas de fix, uma lição sobre isolation levels.',
			en: 'A production bug, a three-line fix, one lesson about isolation levels.',
			es: 'Un bug de producción, tres líneas de fix, una lección sobre niveles de aislamiento.',
		},
		teaser:
			'await db.transaction(async (tx) => {\n  // use SEMPRE tx aqui — não db\n});',
	},
	{
		id: 'jwt',
		cat: 'PATTERN',
		dateIso: '2026-06-19',
		min: readingMinutes('jwt'),
		title: {
			'pt-BR': 'Refresh tokens sem sessão: rotação com JWT em 80 linhas',
			en: 'Sessionless refresh tokens: JWT rotation in 80 lines',
			es: 'Refresh tokens sin sesión: rotación con JWT en 80 líneas',
		},
		excerpt: {
			'pt-BR':
				'O trade-off entre stateless puro e revogação imediata — e o meio-termo que uso em produção.',
			en: 'The trade-off between pure stateless and instant revocation — and the middle ground I use in production.',
			es: 'El trade-off entre stateless puro y revocación inmediata — y el término medio que uso en producción.',
		},
		teaser: null,
	},
	{
		id: 'pg-index',
		cat: 'DEEP DIVE',
		dateIso: '2026-06-11',
		min: readingMinutes('pg-index'),
		title: {
			'pt-BR': 'Índices parciais no Postgres que cortaram 40% do p95',
			en: 'Partial indexes in Postgres that cut 40% of p95',
			es: 'Índices parciales en Postgres que recortaron 40% del p95',
		},
		excerpt: {
			'pt-BR': 'Quando o WHERE do índice importa mais que a coluna.',
			en: "When the index's WHERE matters more than the column.",
			es: 'Cuando el WHERE del índice importa más que la columna.',
		},
		teaser: null,
	},
];

const linkLabelLive: Translated<string> = {
	'pt-BR': 'Ver projeto ao vivo ↗',
	en: 'View live project ↗',
	es: 'Ver proyecto en vivo ↗',
};
const linkLabelGithub: Translated<string> = {
	'pt-BR': 'Ver no GitHub ↗',
	en: 'View on GitHub ↗',
	es: 'Ver en GitHub ↗',
};
const repoFront: Translated<string> = {
	'pt-BR': 'Front no GitHub ↗',
	en: 'Front on GitHub ↗',
	es: 'Front en GitHub ↗',
};
const repoBack: Translated<string> = {
	'pt-BR': 'Back no GitHub ↗',
	en: 'Back on GitHub ↗',
	es: 'Back en GitHub ↗',
};
const repoRepository: Translated<string> = {
	'pt-BR': 'Repositório ↗',
	en: 'Repository ↗',
	es: 'Repositorio ↗',
};

export const projects: Project[] = [
	{
		id: 'moneyly',
		name: 'Moneyly',
		year: '2025',
		tech: 'next · express · drizzle',
		link: 'https://moneyly-front.vercel.app/',
		linkLabel: linkLabelLive,
		repos: [
			{
				label: repoFront,
				url: 'https://github.com/dev-bernardofofg/moneyly-front',
			},
			{
				label: repoBack,
				url: 'https://github.com/dev-bernardofofg/moneyly-back',
			},
		],
		tags: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'TanStack Query',
			'Express',
			'Drizzle ORM',
			'PostgreSQL',
		],
		summary: {
			'pt-BR':
				'Aplicação completa de gestão financeira pessoal: dashboard inteligente, transações, orçamentos e metas de poupança.',
			en: 'Full personal finance app: smart dashboard, transactions, budgets and savings goals.',
			es: 'Aplicación completa de gestión financiera personal: dashboard inteligente, transacciones, presupuestos y metas de ahorro.',
		},
		problem: {
			'pt-BR': 'Gestão financeira pessoal espalhada em planilhas.',
			en: 'Personal finance scattered across spreadsheets.',
			es: 'Gestión financiera personal dispersa en hojas de cálculo.',
		},
		decision: {
			'pt-BR':
				'Front Next.js + API Express com Drizzle/PostgreSQL e contrato OpenAPI.',
			en: 'Next.js front + Express API with Drizzle/PostgreSQL and an OpenAPI contract.',
			es: 'Front Next.js + API Express con Drizzle/PostgreSQL y contrato OpenAPI.',
		},
		result: {
			'pt-BR': 'App completo: transações, orçamentos e metas de poupança.',
			en: 'Full app: transactions, budgets and savings goals.',
			es: 'App completa: transacciones, presupuestos y metas de ahorro.',
		},
	},
	{
		id: 'fortuba',
		name: 'Fortuba',
		year: '2025',
		tech: 'next · prisma · pg',
		link: 'https://github.com/dev-bernardofofg/fortuba-fe',
		linkLabel: linkLabelGithub,
		repos: [
			{
				label: repoFront,
				url: 'https://github.com/dev-bernardofofg/fortuba-fe',
			},
			{
				label: repoBack,
				url: 'https://github.com/dev-bernardofofg/fortuba-be',
			},
		],
		tags: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'TanStack Query',
			'Prisma',
			'PostgreSQL',
		],
		summary: {
			'pt-BR':
				'Rede social para músicos compartilharem e descobrirem partituras, com feed, comentários e perfis de artistas.',
			en: 'Social network for musicians to share and discover sheet music, with feed, comments and artist profiles.',
			es: 'Red social para que los músicos compartan y descubran partituras, con feed, comentarios y perfiles de artistas.',
		},
		problem: {
			'pt-BR': 'Músicos sem um lugar para compartilhar e descobrir partituras.',
			en: 'Musicians with no place to share and discover sheet music.',
			es: 'Músicos sin un lugar para compartir y descubrir partituras.',
		},
		decision: {
			'pt-BR': 'Rede social com feed, comentários e perfis de artistas.',
			en: 'Social network with feed, comments and artist profiles.',
			es: 'Red social con feed, comentarios y perfiles de artistas.',
		},
		result: {
			'pt-BR': 'Full-stack do schema ao front, com Prisma e PostgreSQL.',
			en: 'Full-stack from schema to front, with Prisma and PostgreSQL.',
			es: 'Full-stack del schema al front, con Prisma y PostgreSQL.',
		},
	},
	{
		id: 'alvo',
		name: 'Alvo — Landing Page',
		year: '2024',
		tech: 'html · css · js',
		link: 'https://lp-alvo.vercel.app/',
		linkLabel: linkLabelLive,
		repos: [
			{
				label: repoRepository,
				url: 'https://github.com/dev-bernardofofg/LP-Alvo',
			},
		],
		tags: ['HTML', 'CSS', 'JavaScript'],
		summary: {
			'pt-BR':
				'Landing page para empresa de terceirização de serviços, com apresentação profissional e foco em conversão.',
			en: 'Landing page for a services outsourcing company, with a professional presentation and conversion focus.',
			es: 'Landing page para empresa de tercerización de servicios, con presentación profesional y foco en conversión.',
		},
		problem: {
			'pt-BR':
				'Empresa de terceirização sem apresentação digital profissional.',
			en: 'Outsourcing company with no professional digital presence.',
			es: 'Empresa de tercerización sin presentación digital profesional.',
		},
		decision: {
			'pt-BR': 'Landing estática em HTML/CSS, focada em clareza e conversão.',
			en: 'Static landing in HTML/CSS, focused on clarity and conversion.',
			es: 'Landing estática en HTML/CSS, enfocada en claridad y conversión.',
		},
		result: {
			'pt-BR': 'Em produção em lp-alvo.vercel.app.',
			en: 'In production at lp-alvo.vercel.app.',
			es: 'En producción en lp-alvo.vercel.app.',
		},
	},
	{
		id: 'devstore',
		name: 'Devstore',
		year: '2024',
		tech: 'react · next · ts',
		link: 'https://github.com/BernardoFOFG/ignite-devstore-api',
		linkLabel: linkLabelGithub,
		tags: ['React', 'Next.js', 'TypeScript'],
		summary: {
			'pt-BR':
				'E-commerce do curso Ignite (Rocketseat), explorando estratégias de performance e conversão.',
			en: 'E-commerce from the Ignite course (Rocketseat), exploring performance and conversion strategies.',
			es: 'E-commerce del curso Ignite (Rocketseat), explorando estrategias de rendimiento y conversión.',
		},
		problem: {
			'pt-BR': 'E-commerce com baixa taxa de conversão (Ignite/Rocketseat).',
			en: 'E-commerce with a low conversion rate (Ignite/Rocketseat).',
			es: 'E-commerce con baja tasa de conversión (Ignite/Rocketseat).',
		},
		decision: {
			'pt-BR': 'Melhores práticas de performance e conversão em Next.js.',
			en: 'Performance and conversion best practices in Next.js.',
			es: 'Buenas prácticas de rendimiento y conversión en Next.js.',
		},
		result: {
			'pt-BR': 'API pública no GitHub como material de estudo.',
			en: 'Public API on GitHub as study material.',
			es: 'API pública en GitHub como material de estudio.',
		},
	},
];

export const postCategories = ['PATTERN', 'DEEP DIVE', 'TIL'] as const;

export function getPost(id: string) {
	return posts.find((p) => p.id === id);
}

export function getProject(id: string) {
	return projects.find((p) => p.id === id);
}
