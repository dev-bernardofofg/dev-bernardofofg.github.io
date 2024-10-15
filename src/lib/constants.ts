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
			'Desenvolvimento de websites utilizando HTML, CSS e Javascript, destacando-se o uso predominante do framework ReactJS e a integração de diversas bibliotecas, tais como Date-fns, React Hook Form e Chakra.UI. Além de estar sempre tendo que transformar protótipos do Figma em código de forma fiel, garantindo uma implementação idêntica e eficiente.',
		dateStart: new Date('2023/07/21'),
		dateEnd: new Date(),
		tabId: 'netec',
	},
	{
		title: 'Desenvolvedor Front-end Pleno',
		company: 'WA Technology',
		description:
			'Fui integrado a esta empresa após um projeto desenvolvido pela NETec alcançar escala global, o que abriu novas oportunidades de mercado. Nesse projeto, atuei como líder do desenvolvimento front-end, utilizando principalmente as seguintes tecnologias: React.JS, Chakra UI e Context API.',
		dateStart: new Date('2024/01/01'),
		dateEnd: new Date(),
		tabId: 'watechnology',
	},
];

type JOBS_TYPE = {
	title: string;
	paragraph: string;
	link: string;
};

export const PROJECTS: JOBS_TYPE[] = [
	{
		title: 'Alvo - Landing Page',
		paragraph:
			'Projeto desenvolvido para uma empresa de terceiração de serviços.',
		link: 'https://github.com/BernardoFOFG/LP-Alvo',
	},
	{
		title: 'EldenRing - API',
		paragraph: 'Projeto para melhorar a prática de consumir API Rest.',
		link: 'https://github.com/BernardoFOFG/elden-ring-api',
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
