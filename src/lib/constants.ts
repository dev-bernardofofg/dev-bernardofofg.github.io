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
			'Fui integrado nessa empresa, pois um projeto desenvolvido da NETec acabou indo para escala global, e lá tivemos espaço de mercado. Nesse projeto, fui o lider do desenvolvimento front-end, e a principais tecnologias utilizadas foram: React.JS, ChakraUI, ContextAPI.',
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
		link: '/',
		paragraph: '/',
		title: '/',
	},
];
