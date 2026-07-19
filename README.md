# bernardo.dev\_

Portfólio pessoal de Bernardo Filipe — design "Aurora": tema claro com glassmorphism, variante dark, gradiente `#F05353 → #F97316` e marca `bf_`.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19 + TypeScript
- **TailwindCSS v4** — tokens do design system como CSS variables em `globals.css`
- **next-intl** — UI em pt-BR/en/es via cookie (sem rotas por locale); conteúdo de posts e projetos é pt-only
- **Shiki** — syntax highlighting server-side nos code blocks do blog
- **Playwright** — smoke tests e2e
- **Biome** — lint/format, com husky + lint-staged

## Estrutura

```
src/
  lib/data.ts          # camada de dados única (perfil, stack, posts, projetos)
  lib/site.ts          # URL canônica (NEXT_PUBLIC_SITE_URL)
  app/
    page.tsx           # home: hero, stack, blog preview, projetos, sobre, contato
    blog/              # lista com filtros + /blog/[slug]
    projetos/          # grid + /projetos/[slug] (estudos de caso)
    _components/       # componentes do design Aurora
    sitemap.ts         # sitemap gerado do data layer
    robots.ts
```

Conteúdo vive em `src/lib/data.ts` — tipado, sem CMS. Quando houver backend, os tipos viram o contrato da API.

## Rodando

```bash
pnpm install
pnpm dev          # dev server
pnpm build        # build de produção
pnpm lint         # biome
pnpm typecheck    # tsc --noEmit
pnpm test:e2e     # playwright (usa o dev server local)
```
