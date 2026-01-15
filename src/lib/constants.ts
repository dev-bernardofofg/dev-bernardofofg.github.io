type SOCIAL_LINK_TYPE = {
  name: string;
  href: string;
  icon: string;
};

export const SOCIAL_LINK: SOCIAL_LINK_TYPE[] = [
  {
    name: "Github",
    href: "https://github.com/dev-bernardofofg",
    icon: "/icon/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/bernardofofg",
    icon: "/icon/linkedin.svg",
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
    title: "Estágio em Desenvolvimento",
    company: "EMPREL",
    description:
      "Trabalhei como estagiário na EMPREL, onde trabalhei diretamente com alguns projetos do estado de Pernambuco, e basicamente meu trabalho no período foi dar manutenção em sistemas legados utilizando principalmente PHP e Symfony.",
    dateStart: new Date("2023/04/12"),
    dateEnd: new Date("2023/07/21"),
    tabId: "emprel",
  },
  {
    title: "Desenvolvedor Front-end Junior",
    company: "NETec",
    description:
      "Desenvolvimento de websites utilizando HTML, CSS e Javascript, destacando-se o uso predominante do framework React.JS/Next.JS e a integração de diversas bibliotecas, tais como Date-fns, React Hook Form e Chakra.UI. Além de estar sempre tendo que transformar protótipos do Figma em código de forma fiel, garantindo uma implementação idêntica e eficiente.",
    dateStart: new Date("2023/07/21"),
    dateEnd: new Date(),
    tabId: "netec",
  },
  {
    title: "Desenvolvedor Front-end Pleno",
    company: "WA Technology",
    description:
      "Fui integrado a esta empresa após um projeto desenvolvido pela NETec alcançar escala global, o que abriu novas oportunidades de mercado. Nesse projeto, atuei como líder do desenvolvimento front-end, utilizando principalmente as seguintes tecnologias: React.JS, Next.JS, Chakra UI e Context API.",
    dateStart: new Date("2024/01/01"),
    dateEnd: new Date("2025/08/13"),
    tabId: "watechnology",
  },
  {
    title: "Desenvolvedor Front-end Pleno",
    company: "Senfio",
    description:
      "Desenvolvimento de backoffices para o setor de monitoramento de saúde utilizando principalmente as seguintes tecnologias: React.JS, Next.JS, TailwindCSS, ShadcnUI e Context API.",
    dateStart: new Date("2025/08/13"),
    dateEnd: new Date("2026/01/06"),
    tabId: "senfio",
  },
];

type PROJECTS_TYPE = {
  title: string;
  paragraph: string;
  link: string;
};

export const PROJECTS: PROJECTS_TYPE[] = [
  {
    title: "Alvo - Landing Page",
    paragraph:
      "Landing page desenvolvida para uma empresa de terceirização de serviços, oferecendo uma apresentação profissional e eficiente.",
    link: "https://lp-alvo.vercel.app/",
  },
  {
    title: "ConverseIA - Landing Page",
    paragraph:
      "Landing page desenvolvida para uma empresa de gerenciamento de clientes que utiliza inteligência artificial para otimizar a comunicação e a experiência do usuário.",
    link: "https://www.converseia.com/",
  },
  {
    title: "FE (Front-end) - Perguntas de Entrevista",
    paragraph:
      "Projeto desenvolvido após vários dias de pesquisa sobre entrevistas de emprego para desenvolvedores front-end. Neste projeto, compilei as principais perguntas feitas durante as entrevistas.",
    link: "https://github.com/BernardoFOFG/fe-interview-questions",
  },
  {
    title: "Devstore - Rocketseat",
    paragraph:
      "Este projeto foi desenvolvido durante o curso Ignite da Rocketseat, que explora em profundidade as melhores práticas e estratégias para aumentar as taxas de conversão em e-commerces.",
    link: "https://github.com/BernardoFOFG/ignite-devstore-api",
  },
];

export type KnowledgeCategory = "frontend" | "backend" | "tools";

type KNOWLEDGE_TYPE = {
  icon: string;
  description: string;
  technology: string;
  category: KnowledgeCategory;
  level: 1 | 2 | 3 | 4 | 5;
};

export const KNOWLEDGE: KNOWLEDGE_TYPE[] = [
  // Frontend Core
  {
    technology: "HTML",
    description:
      "Linguagem de marcação para estruturar conteúdo web, definindo elementos semânticos, acessibilidade e SEO.",
    icon: "/knowledge/html.svg",
    category: "frontend",
    level: 5,
  },
  {
    technology: "CSS",
    description:
      "Linguagem para estilização de páginas web, controlando layout, responsividade, animações e design systems.",
    icon: "/knowledge/css.svg",
    category: "frontend",
    level: 5,
  },
  {
    technology: "Javascript",
    description:
      "Linguagem de programação para interatividade web, manipulação do DOM, APIs assíncronas e lógica de aplicação.",
    icon: "/knowledge/javascript.svg",
    category: "frontend",
    level: 5,
  },
  {
    technology: "Typescript",
    description:
      "Superset do JavaScript com tipagem estática em modo strict, garantindo type safety, manutenibilidade e escalabilidade.",
    icon: "/knowledge/typescript.svg",
    category: "frontend",
    level: 5,
  },
  {
    technology: "ReactJS",
    description:
      "Biblioteca para construção de UIs baseadas em componentes, com foco em composição, hooks e padrões modernos de desenvolvimento.",
    icon: "/knowledge/reactjs.svg",
    category: "frontend",
    level: 5,
  },
  {
    technology: "NextJS",
    description:
      "Framework React com App Router e Server Components, SSR, SSG, API routes e otimizações de performance para produção.",
    icon: "/knowledge/nextjs.svg",
    category: "frontend",
    level: 5,
  },
  // UI & Styling
  {
    technology: "TailwindCSS",
    description:
      "Framework CSS utilitário para desenvolvimento rápido de layouts responsivos e design systems consistentes.",
    icon: "/knowledge/tailwindcss.svg",
    category: "tools",
    level: 5,
  },
  {
    technology: "ShadcnUI",
    description:
      "Coleção de componentes acessíveis e customizáveis para React, integrada com TailwindCSS e Radix UI.",
    icon: "/knowledge/shadcn.svg",
    category: "tools",
    level: 5,
  },
  {
    technology: "Framer Motion",
    description:
      "Biblioteca de animações para React, utilizada para criar micro-interações, transições e experiências de UX fluidas.",
    icon: "/knowledge/framer-motion.svg",
    category: "tools",
    level: 4,
  },
  // State & Data
  {
    technology: "TanStack Query",
    description:
      "Gerenciamento de estado servidor com data fetching, caching, revalidação e sincronização automática.",
    icon: "/knowledge/tanstack-query.svg",
    category: "tools",
    level: 5,
  },
  {
    technology: "Zustand",
    description:
      "Biblioteca leve para gerenciamento de estado global em React, com API simples e performance otimizada.",
    icon: "/knowledge/zustand.svg",
    category: "tools",
    level: 4,
  },
  {
    technology: "React Hook Form",
    description:
      "Biblioteca para formulários performáticos em React, com validação integrada via Zod e controle de campos.",
    icon: "/knowledge/react-hook-form.svg",
    category: "tools",
    level: 5,
  },
  {
    technology: "Zod",
    description:
      "Biblioteca de validação de schemas TypeScript-first, usada para validação de formulários e dados de API.",
    icon: "/knowledge/zod.svg",
    category: "tools",
    level: 5,
  },
  // Backend
  {
    technology: "NodeJS",
    description:
      "Runtime JavaScript no servidor para construção de APIs REST, autenticação, regras de negócio e integrações.",
    icon: "/knowledge/nodejs.svg",
    category: "backend",
    level: 4,
  },
  {
    technology: "ExpressJS",
    description:
      "Framework minimalista para Node.js, usado para construção de APIs REST com middlewares e rotas.",
    icon: "/knowledge/express.svg",
    category: "backend",
    level: 4,
  },
  {
    technology: "Fastify",
    description:
      "Framework web de alta performance para Node.js, com arquitetura modular e validação de schemas.",
    icon: "/knowledge/fastify.svg",
    category: "backend",
    level: 3,
  },
  {
    technology: "Drizzle ORM",
    description:
      "ORM TypeScript-first para PostgreSQL, com queries type-safe, migrations e performance otimizada.",
    icon: "/knowledge/drizzle.svg",
    category: "backend",
    level: 4,
  },
  {
    technology: "PostgreSQL",
    description:
      "Banco de dados relacional robusto, usado para persistência de dados com queries complexas e integridade.",
    icon: "/knowledge/postgresql.svg",
    category: "backend",
    level: 4,
  },
  {
    technology: "MongoDB",
    description:
      "Banco de dados NoSQL orientado a documentos, utilizado em projetos MERN para dados flexíveis.",
    icon: "/knowledge/mongodb.svg",
    category: "backend",
    level: 3,
  },
  // DevOps & Testing
  {
    technology: "Docker",
    description:
      "Plataforma de containerização para consistência de ambientes de desenvolvimento e deploy.",
    icon: "/knowledge/docker.svg",
    category: "tools",
    level: 4,
  },
  {
    technology: "Git",
    description:
      "Sistema de controle de versão distribuído para gerenciamento de código e colaboração em equipe.",
    icon: "/knowledge/git.svg",
    category: "tools",
    level: 5,
  },
  {
    technology: "GitHub Actions",
    description:
      "Plataforma de CI/CD para automação de testes, builds e deploys integrada ao GitHub.",
    icon: "/knowledge/github-actions.svg",
    category: "tools",
    level: 4,
  },
  {
    technology: "Playwright",
    description:
      "Framework de testes end-to-end para aplicações web, com suporte a múltiplos navegadores.",
    icon: "/knowledge/playwright.svg",
    category: "tools",
    level: 3,
  },
];
