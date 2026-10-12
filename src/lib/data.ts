// Camada de dados única do portfólio.
// Hoje os dados vivem aqui; quando houver backend real, troque o corpo de getDb()
// por um fetch para a API e mantenha os tipos como contrato.

import type { Translated } from './i18n';

export type PostCategory = 'PATTERN' | 'TIL' | 'DEEP DIVE';

export type ContentBlock = {
	heading?: Translated<string>;
	text?: Translated<string>;
	file?: string;
	code?: string;
	note?: Translated<string>;
};

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
	blocks: ContentBlock[];
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
	blocks: ContentBlock[];
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
		min: 6,
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
		blocks: [
			{
				text: {
					'pt-BR':
						'Durante muito tempo eu mantinha três versões do mesmo contrato: a interface TypeScript, o validador do request e o DTO que o front consumia. Toda mudança de campo era caça ao tesouro — e o drift entre eles era a causa nº 1 de bug bobo em produção.',
					en: 'For a long time I kept three versions of the same contract: the TypeScript interface, the request validator and the DTO consumed by the front-end. Every field change was a treasure hunt — and the drift between them was the #1 cause of silly bugs in production.',
					es: 'Durante mucho tiempo mantenía tres versiones del mismo contrato: la interfaz TypeScript, el validador del request y el DTO que consumía el front. Cada cambio de campo era una caza del tesoro — y el drift entre ellos era la causa nº 1 de bugs tontos en producción.',
				},
			},
			{
				file: 'schemas/user.ts',
				code: "import { z } from 'zod';\n\nexport const CreateUser = z.object({\n  email: z.string().email(),\n  name: z.string().min(2),\n});\n\nexport type CreateUser = z.infer<typeof CreateUser>;",
			},
			{
				text: {
					'pt-BR':
						'A virada de chave é tratar o schema como a fonte única: o tipo é inferido dele, nunca escrito à mão. E no handler, parse — não validate. O parse devolve um valor novo, tipado e limpo; validar e seguir usando o objeto original deixa passar campo extra e coerção silenciosa.',
					en: 'The key shift is treating the schema as the single source: the type is inferred from it, never written by hand. And in the handler, parse — not validate. Parse returns a new value, typed and clean; validating and keeping the original object lets extra fields and silent coercion slip through.',
					es: 'El giro clave es tratar el schema como la fuente única: el tipo se infiere de él, nunca se escribe a mano. Y en el handler, parse — no validate. Parse devuelve un valor nuevo, tipado y limpio; validar y seguir usando el objeto original deja pasar campos extra y coerción silenciosa.',
				},
			},
			{
				file: 'routes/users.ts',
				code: "app.post('/users', (req, res) => {\n  const input = CreateUser.parse(req.body); // lança 400 se inválido\n  // input é CreateUser — garantido em runtime E em compile-time\n});",
			},
			{
				note: {
					'pt-BR':
						'Bônus: publique os schemas num pacote compartilhado e o front valida formulários com exatamente o mesmo contrato — React Hook Form + zodResolver fecham o ciclo.',
					en: 'Bonus: publish the schemas in a shared package and the front validates forms with exactly the same contract — React Hook Form + zodResolver close the loop.',
					es: 'Bonus: publica los schemas en un paquete compartido y el front valida formularios con exactamente el mismo contrato — React Hook Form + zodResolver cierran el ciclo.',
				},
			},
		],
	},
	{
		id: 'supertest',
		cat: 'TIL',
		dateIso: '2026-07-03',
		min: 2,
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
		blocks: [
			{
				text: {
					'pt-BR':
						'Eu subia o servidor num beforeAll, escolhia porta aleatória e rezava para o CI não colidir. Descobri que o supertest aceita a instância do app diretamente — ele mesmo faz o bind numa porta efêmera por request.',
					en: 'I used to spin up the server in a beforeAll, pick a random port and pray CI did not collide. I found out supertest accepts the app instance directly — it binds to an ephemeral port per request on its own.',
					es: 'Levantaba el servidor en un beforeAll, elegía puerto aleatorio y rezaba para que CI no colisionara. Descubrí que supertest acepta la instancia de la app directamente — él mismo hace el bind a un puerto efímero por request.',
				},
			},
			{
				file: 'users.test.ts',
				code: "import request from 'supertest';\nimport { app } from '../src/app'; // sem app.listen()\n\nit('rejeita email inválido', async () => {\n  const res = await request(app).post('/users').send({ email: 'x' });\n  expect(res.status).toBe(400);\n});",
			},
			{
				note: {
					'pt-BR':
						'O requisito: exportar o app separado do listen(). Essa separação também facilita serverless e testes de carga.',
					en: 'The requirement: export the app separately from listen(). That split also makes serverless and load testing easier.',
					es: 'El requisito: exportar la app separada del listen(). Esa separación también facilita serverless y pruebas de carga.',
				},
			},
		],
	},
	{
		id: 'drizzle-tx',
		cat: 'DEEP DIVE',
		dateIso: '2026-06-30',
		min: 9,
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
		blocks: [
			{
				text: {
					'pt-BR':
						'O bug: dentro de db.transaction, uma das queries usava db em vez de tx. Ela rodava fora da transação — commitava sozinha mesmo quando o resto sofria rollback. Nenhum erro, nenhum log. Só dado inconsistente dias depois.',
					en: 'The bug: inside db.transaction, one query used db instead of tx. It ran outside the transaction — it committed on its own even when the rest rolled back. No error, no log. Just inconsistent data days later.',
					es: 'El bug: dentro de db.transaction, una de las queries usaba db en vez de tx. Corría fuera de la transacción — hacía commit sola incluso cuando el resto sufría rollback. Ningún error, ningún log. Solo datos inconsistentes días después.',
				},
			},
			{
				file: 'services/transfer.ts',
				code: 'await db.transaction(async (tx) => {\n  await tx.insert(entries).values(debit);\n  await db.insert(entries).values(credit); // 🐛 fora da transação!\n});',
			},
			{
				text: {
					'pt-BR':
						'O fix é trivial (usar tx), mas a lição maior foi sobre isolation: o default do Postgres é READ COMMITTED, e para um ledger isso permite anomalias de leitura entre as duas pernas do lançamento. Transações financeiras pedem SERIALIZABLE — e retry no conflito.',
					en: 'The fix is trivial (use tx), but the bigger lesson was about isolation: Postgres defaults to READ COMMITTED, and for a ledger that allows read anomalies between the two legs of the entry. Financial transactions call for SERIALIZABLE — plus retry on conflict.',
					es: 'El fix es trivial (usar tx), pero la lección más grande fue sobre aislamiento: el default de Postgres es READ COMMITTED, y para un ledger eso permite anomalías de lectura entre las dos patas del asiento. Las transacciones financieras piden SERIALIZABLE — y retry en conflicto.',
				},
			},
			{
				file: 'services/transfer.ts',
				code: "await db.transaction(\n  async (tx) => {\n    await tx.insert(entries).values(debit);\n    await tx.insert(entries).values(credit);\n  },\n  { isolationLevel: 'serializable' },\n);",
			},
			{
				note: {
					'pt-BR':
						'Regra de lint que adotei: proibir referência a db dentro de callbacks de transaction. Um no-restricted-syntax resolve.',
					en: 'A lint rule I adopted: forbid references to db inside transaction callbacks. A no-restricted-syntax rule does the job.',
					es: 'Regla de lint que adopté: prohibir la referencia a db dentro de callbacks de transaction. Un no-restricted-syntax lo resuelve.',
				},
			},
		],
	},
	{
		id: 'jwt',
		cat: 'PATTERN',
		dateIso: '2026-06-19',
		min: 7,
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
		blocks: [
			{
				text: {
					'pt-BR':
						'JWT stateless puro tem um problema famoso: não dá para revogar. O meio-termo que uso: access token curto (15 min) totalmente stateless + refresh token opaco, persistido e rotacionado a cada uso.',
					en: 'Pure stateless JWT has a famous problem: you cannot revoke it. The middle ground I use: a short access token (15 min), fully stateless, plus an opaque refresh token, persisted and rotated on every use.',
					es: 'JWT stateless puro tiene un problema famoso: no se puede revocar. El término medio que uso: access token corto (15 min) totalmente stateless + refresh token opaco, persistido y rotado en cada uso.',
				},
			},
			{
				file: 'auth/refresh.ts',
				code: 'export async function refresh(oldToken: string) {\n  const stored = await findRefreshToken(hash(oldToken));\n  if (!stored || stored.usedAt) {\n    // reuso de token = possível roubo: derruba a família inteira\n    if (stored) await revokeFamily(stored.familyId);\n    throw new UnauthorizedError();\n  }\n  await markUsed(stored.id);\n  return issuePair(stored.userId, stored.familyId);\n}',
			},
			{
				text: {
					'pt-BR':
						'O detalhe que quase ninguém implementa: detecção de reuso. Se um refresh token já usado aparece de novo, alguém o roubou — revogar a família inteira desloga o atacante e o usuário legítimo, que simplesmente faz login de novo.',
					en: 'The detail almost no one implements: reuse detection. If an already-used refresh token shows up again, someone stole it — revoking the whole family logs out the attacker and the legit user, who simply logs in again.',
					es: 'El detalle que casi nadie implementa: detección de reuso. Si un refresh token ya usado aparece de nuevo, alguien lo robó — revocar la familia entera desloga al atacante y al usuario legítimo, que simplemente vuelve a loguearse.',
				},
			},
			{
				note: {
					'pt-BR':
						'Custo real: uma leitura no banco por refresh (a cada ~15 min por usuário), não por request. O access token continua 100% stateless.',
					en: 'Real cost: one database read per refresh (every ~15 min per user), not per request. The access token stays 100% stateless.',
					es: 'Costo real: una lectura a la base por refresh (cada ~15 min por usuario), no por request. El access token sigue 100% stateless.',
				},
			},
		],
	},
	{
		id: 'pg-index',
		cat: 'DEEP DIVE',
		dateIso: '2026-06-11',
		min: 8,
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
		blocks: [
			{
				text: {
					'pt-BR':
						"A query mais quente do sistema filtrava sempre por status = 'pending' — menos de 2% das linhas. O índice cheio em status era quase inútil: o planner preferia seq scan porque o índice indexava 98% de lixo.",
					en: "The hottest query in the system always filtered by status = 'pending' — less than 2% of the rows. The full index on status was almost useless: the planner preferred seq scan because the index was indexing 98% junk.",
					es: "La query más caliente del sistema siempre filtraba por status = 'pending' — menos del 2% de las filas. El índice completo sobre status era casi inútil: el planner prefería seq scan porque el índice indexaba 98% basura.",
				},
			},
			{
				file: 'migrations/0042_partial_idx.sql',
				code: "CREATE INDEX CONCURRENTLY idx_jobs_pending\n  ON jobs (created_at)\n  WHERE status = 'pending';",
			},
			{
				text: {
					'pt-BR':
						'Um índice parcial indexa só as linhas que a query realmente busca: 50x menor, sempre em cache, e o planner passa a usá-lo. O p95 do endpoint caiu 40% sem tocar em uma linha de código de aplicação.',
					en: 'A partial index indexes only the rows the query actually looks for: 50x smaller, always in cache, and the planner starts using it. The endpoint p95 dropped 40% without touching a single line of application code.',
					es: 'Un índice parcial indexa solo las filas que la query realmente busca: 50x más pequeño, siempre en caché, y el planner pasa a usarlo. El p95 del endpoint cayó 40% sin tocar una sola línea de código de aplicación.',
				},
			},
			{
				note: {
					'pt-BR':
						'Drizzle suporta índices parciais no schema via .where() no index builder — dá para versionar isso junto do resto.',
					en: 'Drizzle supports partial indexes in the schema via .where() on the index builder — you can version it alongside the rest.',
					es: 'Drizzle soporta índices parciales en el schema vía .where() en el index builder — se puede versionar junto con el resto.',
				},
			},
		],
	},
];

const headingProblem: Translated<string> = {
	'pt-BR': 'PROBLEMA',
	en: 'PROBLEM',
	es: 'PROBLEMA',
};
const headingArchitecture: Translated<string> = {
	'pt-BR': 'DECISÕES DE ARQUITETURA',
	en: 'ARCHITECTURE DECISIONS',
	es: 'DECISIONES DE ARQUITECTURA',
};
const headingDecisions: Translated<string> = {
	'pt-BR': 'DECISÕES',
	en: 'DECISIONS',
	es: 'DECISIONES',
};
const headingResult: Translated<string> = {
	'pt-BR': 'RESULTADO',
	en: 'RESULT',
	es: 'RESULTADO',
};
const headingContext: Translated<string> = {
	'pt-BR': 'CONTEXTO',
	en: 'CONTEXT',
	es: 'CONTEXTO',
};

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
		blocks: [
			{ heading: headingProblem },
			{
				text: {
					'pt-BR':
						'Gestão financeira pessoal espalhada em planilhas: sem visão consolidada, sem alertas de orçamento e nenhum incentivo para manter metas de poupança.',
					en: 'Personal finance scattered across spreadsheets: no consolidated view, no budget alerts and no incentive to stick to savings goals.',
					es: 'Gestión financiera personal dispersa en hojas de cálculo: sin visión consolidada, sin alertas de presupuesto y sin incentivo para mantener metas de ahorro.',
				},
			},
			{ heading: headingArchitecture },
			{
				text: {
					'pt-BR':
						'Front em Next.js e API em Express com Drizzle sobre PostgreSQL, em repositórios separados. O contrato vive nos schemas Zod: eles geram a spec OpenAPI e, a partir dela, kubb e orval geram os hooks tipados que o front consome — mudou o schema, o front quebra em compile-time, não em produção. TanStack Query cuida do cache e da invalidação.',
					en: 'Front in Next.js and API in Express with Drizzle over PostgreSQL, in separate repos. The contract lives in Zod schemas: they generate the OpenAPI spec and, from it, kubb and orval generate the typed hooks the front consumes — change the schema and the front breaks at compile-time, not in production. TanStack Query handles cache and invalidation.',
					es: 'Front en Next.js y API en Express con Drizzle sobre PostgreSQL, en repositorios separados. El contrato vive en los schemas Zod: generan la spec OpenAPI y, a partir de ella, kubb y orval generan los hooks tipados que consume el front — cambia el schema y el front rompe en compile-time, no en producción. TanStack Query cuida del caché y la invalidación.',
				},
			},
			{
				file: 'db/schema.ts',
				code: "export const transactions = pgTable('transactions', {\n  id: uuid('id').primaryKey().defaultRandom(),\n  amount: numeric('amount').notNull(),\n  categoryId: uuid('category_id').references(() => categories.id),\n  occurredAt: timestamp('occurred_at').notNull(),\n});",
			},
			{ heading: headingResult },
			{
				text: {
					'pt-BR':
						'App completo em produção: dashboard com visão mensal, controle de transações por categoria, orçamentos com progresso e metas de poupança.',
					en: 'Full app in production: monthly dashboard, transactions tracked by category, budgets with progress and savings goals.',
					es: 'App completa en producción: dashboard con visión mensual, control de transacciones por categoría, presupuestos con progreso y metas de ahorro.',
				},
			},
		],
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
		blocks: [
			{ heading: headingProblem },
			{
				text: {
					'pt-BR':
						'Músicos não têm um lugar dedicado para compartilhar e descobrir partituras — o material circula em PDFs soltos, sem contexto, autoria ou discussão.',
					en: 'Musicians lack a dedicated place to share and discover sheet music — the material circulates in loose PDFs, with no context, authorship or discussion.',
					es: 'Los músicos no tienen un lugar dedicado para compartir y descubrir partituras — el material circula en PDFs sueltos, sin contexto, autoría ni discusión.',
				},
			},
			{ heading: headingArchitecture },
			{
				text: {
					'pt-BR':
						'Full-stack com front e back separados: API em Express com Prisma sobre PostgreSQL, front em Next.js com TanStack Query. O feed usa paginação por cursor — mais estável que offset quando novos posts chegam no meio da rolagem.',
					en: 'Full-stack with front and back separated: API in Express with Prisma over PostgreSQL, front in Next.js with TanStack Query. The feed uses cursor pagination — more stable than offset when new posts arrive mid-scroll.',
					es: 'Full-stack con front y back separados: API en Express con Prisma sobre PostgreSQL, front en Next.js con TanStack Query. El feed usa paginación por cursor — más estable que offset cuando llegan nuevos posts a mitad del scroll.',
				},
			},
			{
				file: 'server/feed.ts',
				code: "const posts = await prisma.post.findMany({\n  take: 20,\n  ...(cursor && { skip: 1, cursor: { id: cursor } }),\n  orderBy: { createdAt: 'desc' },\n  include: { author: true, _count: { select: { comments: true } } },\n});",
			},
			{ heading: headingResult },
			{
				text: {
					'pt-BR':
						'Rede funcional com feed, comentários e perfis de artistas — do schema ao front, com front e back públicos no GitHub.',
					en: 'Working network with feed, comments and artist profiles — from schema to front, with front and back public on GitHub.',
					es: 'Red funcional con feed, comentarios y perfiles de artistas — del schema al front, con front y back públicos en GitHub.',
				},
			},
		],
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
		blocks: [
			{ heading: headingProblem },
			{
				text: {
					'pt-BR':
						'Empresa de terceirização sem presença digital profissional — a apresentação dos serviços dependia de PDF enviado por e-mail.',
					en: 'Outsourcing company with no professional digital presence — the services pitch depended on a PDF sent by email.',
					es: 'Empresa de tercerización sin presencia digital profesional — la presentación de servicios dependía de un PDF enviado por email.',
				},
			},
			{ heading: headingDecisions },
			{
				text: {
					'pt-BR':
						'Landing estática em HTML, CSS e JavaScript puro — zero framework, zero build: carrega instantâneo em qualquer conexão. Hierarquia clara: proposta de valor acima da dobra, serviços escaneáveis e um único CTA de contato repetido nos pontos de decisão.',
					en: 'Static landing in plain HTML, CSS and JavaScript — zero framework, zero build: loads instantly on any connection. Clear hierarchy: value proposition above the fold, scannable services and a single contact CTA repeated at the decision points.',
					es: 'Landing estática en HTML, CSS y JavaScript puro — cero framework, cero build: carga instantánea en cualquier conexión. Jerarquía clara: propuesta de valor sobre la primera vista, servicios escaneables y un único CTA de contacto repetido en los puntos de decisión.',
				},
			},
			{ heading: headingResult },
			{
				text: {
					'pt-BR':
						'Página em produção servindo como cartão de visita comercial da empresa.',
					en: "Page in production serving as the company's commercial business card.",
					es: 'Página en producción sirviendo como tarjeta de presentación comercial de la empresa.',
				},
			},
		],
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
		blocks: [
			{ heading: headingContext },
			{
				text: {
					'pt-BR':
						'Projeto desenvolvido durante o Ignite da Rocketseat, focado nas práticas que aumentam conversão em e-commerce: render no servidor, cache agressivo e busca instantânea.',
					en: 'Project built during Rocketseat Ignite, focused on practices that lift e-commerce conversion: server rendering, aggressive cache and instant search.',
					es: 'Proyecto desarrollado durante Ignite de Rocketseat, enfocado en prácticas que aumentan la conversión en e-commerce: render en el servidor, caché agresivo y búsqueda instantánea.',
				},
			},
			{ heading: headingDecisions },
			{
				text: {
					'pt-BR':
						'App Router do Next.js com Server Components e cache por rota: páginas de produto são estáticas com revalidação, a busca roda no servidor e o carrinho vive em Context no cliente — cada coisa na camada mais barata possível.',
					en: 'Next.js App Router with Server Components and per-route cache: product pages are static with revalidation, search runs on the server and the cart lives in Context on the client — each thing on the cheapest possible layer.',
					es: 'App Router de Next.js con Server Components y caché por ruta: las páginas de producto son estáticas con revalidación, la búsqueda corre en el servidor y el carrito vive en Context en el cliente — cada cosa en la capa más barata posible.',
				},
			},
			{
				file: 'app/product/[slug]/page.tsx',
				code: "export async function generateStaticParams() {\n  const products = await api('/products/featured');\n  return products.map((p) => ({ slug: p.slug }));\n}\n// revalida a cada 1h — preço atualizado sem rebuild\nexport const revalidate = 3600;",
			},
			{ heading: headingResult },
			{
				text: {
					'pt-BR':
						'API publicada no GitHub como material de estudo de SSR, cache e conversão.',
					en: 'API published on GitHub as study material on SSR, caching and conversion.',
					es: 'API publicada en GitHub como material de estudio de SSR, caché y conversión.',
				},
			},
		],
	},
];

export const postCategories = ['PATTERN', 'DEEP DIVE', 'TIL'] as const;

export function getPost(id: string) {
	return posts.find((p) => p.id === id);
}

export function getProject(id: string) {
	return projects.find((p) => p.id === id);
}
