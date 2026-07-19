// Camada de dados única do portfólio.
// Hoje os dados vivem aqui; quando houver backend real, troque o corpo de getDb()
// por um fetch para a API e mantenha os tipos como contrato.

export type PostCategory = 'PATTERN' | 'TIL' | 'DEEP DIVE';

export type ContentBlock = {
	heading?: string;
	text?: string;
	file?: string;
	code?: string;
	note?: string;
};

export type StackItem = {
	layer: string;
	tools: string;
	proof: string;
	level: number;
	since: string;
};

export type Post = {
	id: string;
	cat: PostCategory;
	dateIso: string;
	min: number;
	title: string;
	excerpt: string;
	teaser: string | null;
	blocks: ContentBlock[];
};

export type RepoLink = {
	label: string;
	url: string;
};

export type Project = {
	id: string;
	name: string;
	year: string;
	tech: string;
	link: string;
	linkLabel: string;
	repos?: RepoLink[];
	tags: string[];
	summary: string;
	problem: string;
	decision: string;
	result: string;
	blocks: ContentBlock[];
};

export type ProfileFact = {
	label: string;
	value: string;
};

export const profile = {
	name: 'Bernardo Filipe',
	role: 'Full-stack Developer',
	location: 'Brasil',
	bio1: 'Sou desenvolvedor full-stack com foco em front-end. Trabalho com React, Next.js e TypeScript no dia a dia, construindo interfaces rápidas e bem estruturadas — e no back-end com Node.js, Express e Fastify quando o produto pede a stack inteira.',
	bio2: 'Acredito que profundidade técnica se demonstra em público: cada projeto aqui tem o contexto das decisões, e o blog documenta o que aprendo construindo. Código limpo, contratos claros e performance não são detalhes — são o produto.',
	facts: [
		{ label: 'FOCO', value: 'Front-end com React/Next.js' },
		{ label: 'TAMBÉM', value: 'Node.js, Express, Fastify' },
		{ label: 'EXPERIÊNCIA', value: 'Em produção desde 2022' },
		{ label: 'ABERTO A', value: 'CLT, PJ e freelance' },
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
		layer: 'FRONT',
		tools: 'React · Next.js · Tailwind',
		proof: 'Backoffices e landing pages em produção (Senfio, Alvo)',
		level: 92,
		since: '2022',
	},
	{
		layer: 'ESTADO & FORMS',
		tools: 'TanStack Query · Zustand · RHF',
		proof: 'Dashboards com cache e formulários validados com Zod',
		level: 86,
		since: '2023',
	},
	{
		layer: 'BACK-END',
		tools: 'Node · Express · Fastify',
		proof: 'APIs com Drizzle/Prisma sobre PostgreSQL e MongoDB',
		level: 78,
		since: '2022',
	},
	{
		layer: 'FERRAMENTAS',
		tools: 'Docker · GH Actions · Playwright',
		proof: 'CI, containers e testes e2e no fluxo de entrega',
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
		title: 'Zod como fonte única do contrato: parse, não validate',
		excerpt:
			'O tipo já existe no schema — inferir em vez de duplicar mudou como eu desenho APIs. DTOs duplicados eram a fonte nº 1 de drift entre front e back.',
		teaser:
			'const CreateUser = z.object({ email: z.string().email() });\ntype CreateUser = z.infer<typeof CreateUser>; // um só lugar',
		blocks: [
			{
				text: 'Durante muito tempo eu mantinha três versões do mesmo contrato: a interface TypeScript, o validador do request e o DTO que o front consumia. Toda mudança de campo era caça ao tesouro — e o drift entre eles era a causa nº 1 de bug bobo em produção.',
			},
			{
				file: 'schemas/user.ts',
				code: "import { z } from 'zod';\n\nexport const CreateUser = z.object({\n  email: z.string().email(),\n  name: z.string().min(2),\n});\n\nexport type CreateUser = z.infer<typeof CreateUser>;",
			},
			{
				text: 'A virada de chave é tratar o schema como a fonte única: o tipo é inferido dele, nunca escrito à mão. E no handler, parse — não validate. O parse devolve um valor novo, tipado e limpo; validar e seguir usando o objeto original deixa passar campo extra e coerção silenciosa.',
			},
			{
				file: 'routes/users.ts',
				code: "app.post('/users', (req, res) => {\n  const input = CreateUser.parse(req.body); // lança 400 se inválido\n  // input é CreateUser — garantido em runtime E em compile-time\n});",
			},
			{
				note: 'Bônus: publique os schemas num pacote compartilhado e o front valida formulários com exatamente o mesmo contrato — React Hook Form + zodResolver fecham o ciclo.',
			},
		],
	},
	{
		id: 'supertest',
		cat: 'TIL',
		dateIso: '2026-07-03',
		min: 2,
		title: 'supertest aceita o app do Express direto, sem listen()',
		excerpt:
			'Testes de integração sem porta ocupada, sem beforeAll de servidor, sem flakiness de porta em uso no CI.',
		teaser: null,
		blocks: [
			{
				text: 'Eu subia o servidor num beforeAll, escolhia porta aleatória e rezava para o CI não colidir. Descobri que o supertest aceita a instância do app diretamente — ele mesmo faz o bind numa porta efêmera por request.',
			},
			{
				file: 'users.test.ts',
				code: "import request from 'supertest';\nimport { app } from '../src/app'; // sem app.listen()\n\nit('rejeita email inválido', async () => {\n  const res = await request(app).post('/users').send({ email: 'x' });\n  expect(res.status).toBe(400);\n});",
			},
			{
				note: 'O requisito: exportar o app separado do listen(). Essa separação também facilita serverless e testes de carga.',
			},
		],
	},
	{
		id: 'drizzle-tx',
		cat: 'DEEP DIVE',
		dateIso: '2026-06-30',
		min: 9,
		title: 'Transações no Drizzle: onde o rollback silencioso mora',
		excerpt:
			'Um bug de produção, três linhas de fix, uma lição sobre isolation levels.',
		teaser:
			'await db.transaction(async (tx) => {\n  // use SEMPRE tx aqui — não db\n});',
		blocks: [
			{
				text: 'O bug: dentro de db.transaction, uma das queries usava db em vez de tx. Ela rodava fora da transação — commitava sozinha mesmo quando o resto sofria rollback. Nenhum erro, nenhum log. Só dado inconsistente dias depois.',
			},
			{
				file: 'services/transfer.ts',
				code: 'await db.transaction(async (tx) => {\n  await tx.insert(entries).values(debit);\n  await db.insert(entries).values(credit); // 🐛 fora da transação!\n});',
			},
			{
				text: 'O fix é trivial (usar tx), mas a lição maior foi sobre isolation: o default do Postgres é READ COMMITTED, e para um ledger isso permite anomalias de leitura entre as duas pernas do lançamento. Transações financeiras pedem SERIALIZABLE — e retry no conflito.',
			},
			{
				file: 'services/transfer.ts',
				code: "await db.transaction(\n  async (tx) => {\n    await tx.insert(entries).values(debit);\n    await tx.insert(entries).values(credit);\n  },\n  { isolationLevel: 'serializable' },\n);",
			},
			{
				note: 'Regra de lint que adotei: proibir referência a db dentro de callbacks de transaction. Um no-restricted-syntax resolve.',
			},
		],
	},
	{
		id: 'jwt',
		cat: 'PATTERN',
		dateIso: '2026-06-19',
		min: 7,
		title: 'Refresh tokens sem sessão: rotação com JWT em 80 linhas',
		excerpt:
			'O trade-off entre stateless puro e revogação imediata — e o meio-termo que uso em produção.',
		teaser: null,
		blocks: [
			{
				text: 'JWT stateless puro tem um problema famoso: não dá para revogar. O meio-termo que uso: access token curto (15 min) totalmente stateless + refresh token opaco, persistido e rotacionado a cada uso.',
			},
			{
				file: 'auth/refresh.ts',
				code: 'export async function refresh(oldToken: string) {\n  const stored = await findRefreshToken(hash(oldToken));\n  if (!stored || stored.usedAt) {\n    // reuso de token = possível roubo: derruba a família inteira\n    if (stored) await revokeFamily(stored.familyId);\n    throw new UnauthorizedError();\n  }\n  await markUsed(stored.id);\n  return issuePair(stored.userId, stored.familyId);\n}',
			},
			{
				text: 'O detalhe que quase ninguém implementa: detecção de reuso. Se um refresh token já usado aparece de novo, alguém o roubou — revogar a família inteira desloga o atacante e o usuário legítimo, que simplesmente faz login de novo.',
			},
			{
				note: 'Custo real: uma leitura no banco por refresh (a cada ~15 min por usuário), não por request. O access token continua 100% stateless.',
			},
		],
	},
	{
		id: 'pg-index',
		cat: 'DEEP DIVE',
		dateIso: '2026-06-11',
		min: 8,
		title: 'Índices parciais no Postgres que cortaram 40% do p95',
		excerpt: 'Quando o WHERE do índice importa mais que a coluna.',
		teaser: null,
		blocks: [
			{
				text: "A query mais quente do sistema filtrava sempre por status = 'pending' — menos de 2% das linhas. O índice cheio em status era quase inútil: o planner preferia seq scan porque o índice indexava 98% de lixo.",
			},
			{
				file: 'migrations/0042_partial_idx.sql',
				code: "CREATE INDEX CONCURRENTLY idx_jobs_pending\n  ON jobs (created_at)\n  WHERE status = 'pending';",
			},
			{
				text: 'Um índice parcial indexa só as linhas que a query realmente busca: 50x menor, sempre em cache, e o planner passa a usá-lo. O p95 do endpoint caiu 40% sem tocar em uma linha de código de aplicação.',
			},
			{
				note: 'Drizzle suporta índices parciais no schema via .where() no index builder — dá para versionar isso junto do resto.',
			},
		],
	},
];

export const projects: Project[] = [
	{
		id: 'moneyly',
		name: 'Moneyly',
		year: '2025',
		tech: 'next · express · drizzle',
		link: 'https://moneyly-front.vercel.app/',
		linkLabel: 'Ver projeto ao vivo ↗',
		repos: [
			{
				label: 'Front no GitHub ↗',
				url: 'https://github.com/dev-bernardofofg/moneyly-front',
			},
			{
				label: 'Back no GitHub ↗',
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
		summary:
			'Aplicação completa de gestão financeira pessoal: dashboard inteligente, transações, orçamentos e metas de poupança.',
		problem: 'Gestão financeira pessoal espalhada em planilhas.',
		decision:
			'Front Next.js + API Express com Drizzle/PostgreSQL e contrato OpenAPI.',
		result: 'App completo: transações, orçamentos e metas de poupança.',
		blocks: [
			{ heading: 'PROBLEMA' },
			{
				text: 'Gestão financeira pessoal espalhada em planilhas: sem visão consolidada, sem alertas de orçamento e nenhum incentivo para manter metas de poupança.',
			},
			{ heading: 'DECISÕES DE ARQUITETURA' },
			{
				text: 'Front em Next.js e API em Express com Drizzle sobre PostgreSQL, em repositórios separados. O contrato vive nos schemas Zod: eles geram a spec OpenAPI e, a partir dela, kubb e orval geram os hooks tipados que o front consome — mudou o schema, o front quebra em compile-time, não em produção. TanStack Query cuida do cache e da invalidação.',
			},
			{
				file: 'db/schema.ts',
				code: "export const transactions = pgTable('transactions', {\n  id: uuid('id').primaryKey().defaultRandom(),\n  amount: numeric('amount').notNull(),\n  categoryId: uuid('category_id').references(() => categories.id),\n  occurredAt: timestamp('occurred_at').notNull(),\n});",
			},
			{ heading: 'RESULTADO' },
			{
				text: 'App completo em produção: dashboard com visão mensal, controle de transações por categoria, orçamentos com progresso e metas de poupança.',
			},
		],
	},
	{
		id: 'fortuba',
		name: 'Fortuba',
		year: '2025',
		tech: 'next · prisma · pg',
		link: 'https://github.com/dev-bernardofofg/fortuba-fe',
		linkLabel: 'Ver no GitHub ↗',
		repos: [
			{
				label: 'Front no GitHub ↗',
				url: 'https://github.com/dev-bernardofofg/fortuba-fe',
			},
			{
				label: 'Back no GitHub ↗',
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
		summary:
			'Rede social para músicos compartilharem e descobrirem partituras, com feed, comentários e perfis de artistas.',
		problem: 'Músicos sem um lugar para compartilhar e descobrir partituras.',
		decision: 'Rede social com feed, comentários e perfis de artistas.',
		result: 'Full-stack do schema ao front, com Prisma e PostgreSQL.',
		blocks: [
			{ heading: 'PROBLEMA' },
			{
				text: 'Músicos não têm um lugar dedicado para compartilhar e descobrir partituras — o material circula em PDFs soltos, sem contexto, autoria ou discussão.',
			},
			{ heading: 'DECISÕES DE ARQUITETURA' },
			{
				text: 'Full-stack com front e back separados: API em Express com Prisma sobre PostgreSQL, front em Next.js com TanStack Query. O feed usa paginação por cursor — mais estável que offset quando novos posts chegam no meio da rolagem.',
			},
			{
				file: 'server/feed.ts',
				code: "const posts = await prisma.post.findMany({\n  take: 20,\n  ...(cursor && { skip: 1, cursor: { id: cursor } }),\n  orderBy: { createdAt: 'desc' },\n  include: { author: true, _count: { select: { comments: true } } },\n});",
			},
			{ heading: 'RESULTADO' },
			{
				text: 'Rede funcional com feed, comentários e perfis de artistas — do schema ao front, com front e back públicos no GitHub.',
			},
		],
	},
	{
		id: 'alvo',
		name: 'Alvo — Landing Page',
		year: '2024',
		tech: 'html · css · js',
		link: 'https://lp-alvo.vercel.app/',
		linkLabel: 'Ver projeto ao vivo ↗',
		repos: [
			{
				label: 'Repositório ↗',
				url: 'https://github.com/dev-bernardofofg/LP-Alvo',
			},
		],
		tags: ['HTML', 'CSS', 'JavaScript'],
		summary:
			'Landing page para empresa de terceirização de serviços, com apresentação profissional e foco em conversão.',
		problem: 'Empresa de terceirização sem apresentação digital profissional.',
		decision: 'Landing estática em HTML/CSS, focada em clareza e conversão.',
		result: 'Em produção em lp-alvo.vercel.app.',
		blocks: [
			{ heading: 'PROBLEMA' },
			{
				text: 'Empresa de terceirização sem presença digital profissional — a apresentação dos serviços dependia de PDF enviado por e-mail.',
			},
			{ heading: 'DECISÕES' },
			{
				text: 'Landing estática em HTML, CSS e JavaScript puro — zero framework, zero build: carrega instantâneo em qualquer conexão. Hierarquia clara: proposta de valor acima da dobra, serviços escaneáveis e um único CTA de contato repetido nos pontos de decisão.',
			},
			{ heading: 'RESULTADO' },
			{
				text: 'Página em produção servindo como cartão de visita comercial da empresa.',
			},
		],
	},
	{
		id: 'devstore',
		name: 'Devstore',
		year: '2024',
		tech: 'react · next · ts',
		link: 'https://github.com/BernardoFOFG/ignite-devstore-api',
		linkLabel: 'Ver no GitHub ↗',
		tags: ['React', 'Next.js', 'TypeScript'],
		summary:
			'E-commerce do curso Ignite (Rocketseat), explorando estratégias de performance e conversão.',
		problem: 'E-commerce com baixa taxa de conversão (Ignite/Rocketseat).',
		decision: 'Melhores práticas de performance e conversão em Next.js.',
		result: 'API pública no GitHub como material de estudo.',
		blocks: [
			{ heading: 'CONTEXTO' },
			{
				text: 'Projeto desenvolvido durante o Ignite da Rocketseat, focado nas práticas que aumentam conversão em e-commerce: render no servidor, cache agressivo e busca instantânea.',
			},
			{ heading: 'DECISÕES' },
			{
				text: 'App Router do Next.js com Server Components e cache por rota: páginas de produto são estáticas com revalidação, a busca roda no servidor e o carrinho vive em Context no cliente — cada coisa na camada mais barata possível.',
			},
			{
				file: 'app/product/[slug]/page.tsx',
				code: "export async function generateStaticParams() {\n  const products = await api('/products/featured');\n  return products.map((p) => ({ slug: p.slug }));\n}\n// revalida a cada 1h — preço atualizado sem rebuild\nexport const revalidate = 3600;",
			},
			{ heading: 'RESULTADO' },
			{
				text: 'API publicada no GitHub como material de estudo de SSR, cache e conversão.',
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
