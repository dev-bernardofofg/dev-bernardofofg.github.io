type SOCIAL_LINK_TYPE = {
	name: string;
	href: string;
	icon: string;
};

export const SOCIAL_LINK: SOCIAL_LINK_TYPE[] = [
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/bernardofofg/',
		icon: '/icon/instagram.svg',
	},
	{
		name: 'Github',
		href: 'https://github.com/bernardofofg',
		icon: '/icon/github.svg',
	},
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/bernardofofg',
		icon: '/icon/linkedin.svg',
	},
	{
		name: 'Youtube',
		href: 'https://www.youtube.com/@BernardoTuba',
		icon: '/icon/youtube.svg',
	},
];

type JOBS_DESCRIPTION_TYPE = {
	title: string;
	company: string;
	description: string;
	dateStart: Date;
	dateEnd: Date;
	tabId: string;
};

export const JOBS_DESCRIPTION: JOBS_DESCRIPTION_TYPE[] = [
	{
		title: 'Estágio em Desenvolvimento',
		company: 'EMPREL',
		description:
			'Trabalhei como estagiário na EMPREL, onde trabalhei diretamente com alguns projetos do estado de Pernambuco, e basicamente meu trabalho no período foi dar manutenção em sistemas legados utilizando principalmente PHP e Symfony.',
		dateStart: new Date('2023/04/12'),
		dateEnd: new Date('2023/07/21'),
		tabId: 'emprel',
	},
	{
		title: 'Desenvolvedor Front-end Junior',
		company: 'NETec',
		description:
			'Desenvolvimento de websites utilizando HTML, CSS e Javascript, destacando-se o uso predominante do framework React.JS/Next.JS e a integração de diversas bibliotecas, tais como Date-fns, React Hook Form e Chakra.UI. Além de estar sempre tendo que transformar protótipos do Figma em código de forma fiel, garantindo uma implementação idêntica e eficiente.',
		dateStart: new Date('2023/07/21'),
		dateEnd: new Date(),
		tabId: 'netec',
	},
	{
		title: 'Desenvolvedor Front-end Pleno',
		company: 'WA Technology',
		description:
			'Fui integrado a esta empresa após um projeto desenvolvido pela NETec alcançar escala global, o que abriu novas oportunidades de mercado. Nesse projeto, atuei como líder do desenvolvimento front-end, utilizando principalmente as seguintes tecnologias: React.JS, Next.JS, Chakra UI e Context API.',
		dateStart: new Date('2024/01/01'),
		dateEnd: new Date(),
		tabId: 'watechnology',
	},
];

type PROJECTS_TYPE = {
	title: string;
	paragraph: string;
	link: string;
};

export const PROJECTS: PROJECTS_TYPE[] = [
	{
		title: 'Alvo - Landing Page',
		paragraph:
			'Landing page desenvolvida para uma empresa de terceirização de serviços, oferecendo uma apresentação profissional e eficiente.',
		link: 'https://lp-alvo.vercel.app/',
	},
	{
		title: 'ConverseIA - Landing Page',
		paragraph:
			'Landing page desenvolvida para uma empresa de gerenciamento de clientes que utiliza inteligência artificial para otimizar a comunicação e a experiência do usuário.',
		link: 'https://www.converseia.com/',
	},
	{
		title: 'FE (Front-end) - Perguntas de Entrevista',
		paragraph:
			'Projeto desenvolvido após vários dias de pesquisa sobre entrevistas de emprego para desenvolvedores front-end. Neste projeto, compilei as principais perguntas feitas durante as entrevistas.',
		link: 'https://github.com/BernardoFOFG/fe-interview-questions',
	},
	{
		title: 'Devstore - Rocketseat',
		paragraph:
			'Este projeto foi desenvolvido durante o curso Ignite da Rocketseat, que explora em profundidade as melhores práticas e estratégias para aumentar as taxas de conversão em e-commerces.',
		link: 'https://github.com/BernardoFOFG/ignite-devstore-api',
	},
];

type KNOWLEDGE_TYPE = {
	icon: string;
	description: string;
	technology: string;
};

export const KNOWLEDGE: KNOWLEDGE_TYPE[] = [
	{
		technology: 'HTML',
		description:
			'HTML (Hypertext Markup Language): Linguagem de marcação utilizada para estruturar o conteúdo da web, definindo elementos como textos, imagens, links e botões.',
		icon: '/knowledge/html.svg',
	},
	{
		technology: 'CSS',
		description:
			'CSS (Cascading Style Sheets): Linguagem usada para estilizar páginas web, controlando a aparência dos elementos HTML, como cores, fontes, espaçamentos e layout.',
		icon: '/knowledge/css.svg',
	},
	{
		technology: 'Javascript',
		description:
			'Linguagem de programação que permite adicionar interatividade às páginas web. Executa no navegador e pode manipular HTML, CSS e outras APIs.',
		icon: '/knowledge/javascript.svg',
	},
	{
		technology: 'Typescript',
		description:
			'Superset do JavaScript que adiciona tipagem estática opcional, permitindo detectar erros de tipo durante o desenvolvimento e melhorar a manutenção de grandes aplicações.',
		icon: '/knowledge/typescript.svg',
	},
	{
		technology: 'ReactJS',
		description:
			'Biblioteca JavaScript para construir interfaces de usuário baseadas em componentes, permitindo a criação de UIs dinâmicas e reativas.',
		icon: '/knowledge/reactjs.svg',
	},
	{
		technology: 'TailwindCSS',
		description:
			'Framework de CSS utilitário que facilita o desenvolvimento de layouts e estilos personalizados diretamente no HTML, usando classes pré-definidas.',
		icon: '/knowledge/tailwindcss.svg',
	},
	{
		technology: 'NextJS',
		description:
			'Framework React focado em funcionalidades de servidor, como renderização do lado do servidor (SSR), geração estática de páginas e API routes, tornando o desenvolvimento full-stack mais eficiente.',
		icon: '/knowledge/nextjs.svg',
	},
	{
		technology: 'ShadcnUI',
		description:
			'Coleção de componentes de UI altamente customizáveis para React, construída com integração ao TailwindCSS, proporcionando flexibilidade no design.',
		icon: '/knowledge/shadcn.svg',
	},
	{
		technology: 'NodeJS',
		description:
			'Ambiente de execução JavaScript no lado do servidor que permite criar aplicações escaláveis e de alta performance, baseado no motor V8 do Google.',
		icon: '/knowledge/nodejs.svg',
	},
	{
		technology: 'ExpressJS',
		description:
			'Framework minimalista para Node.js que simplifica o desenvolvimento de APIs e aplicações web com uma estrutura robusta e flexível.',
		icon: '/knowledge/express.svg',
	},
	{
		technology: 'Fastify',
		description:
			'Framework web para Node.js focado em alta performance e baixa sobrecarga, projetado para ser rápido e eficiente, com uma arquitetura modular.',
		icon: '/knowledge/fastify.svg',
	},
];
