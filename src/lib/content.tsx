import fs from 'node:fs/promises';
import path from 'node:path';
import { Callout } from '@/app/_components/mdx/callout';
import { Snippet } from '@/app/_components/mdx/snippet';
import type { Locale } from '@/i18n/config';
import { defaultLocale } from '@/i18n/config';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentRoot = path.join(process.cwd(), 'content');

const components = {
	Callout,
	Snippet,
	h2: ({ children }: { children?: React.ReactNode }) => (
		<h2 className="mt-[34px] font-extrabold font-mono text-[13px] text-accent-a tracking-[0.12em]">
			{children}
		</h2>
	),
	p: ({ children }: { children?: React.ReactNode }) => (
		<p className="mt-4 text-[16.5px] text-secondary leading-[1.75]">
			{children}
		</p>
	),
	code: ({ children }: { children?: React.ReactNode }) => (
		<code className="rounded bg-tag px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
			{children}
		</code>
	),
};

async function readLocalized(
	kind: 'posts' | 'projects',
	slug: string,
	locale: string,
) {
	const tryLocales: string[] = [locale, defaultLocale as Locale].filter(
		(l, i, arr) => arr.indexOf(l) === i,
	);
	for (const l of tryLocales) {
		const file = path.join(contentRoot, kind, `${slug}.${l}.mdx`);
		try {
			return await fs.readFile(file, 'utf8');
		} catch {
			// try next locale
		}
	}
	throw new Error(`No MDX content for ${kind}/${slug}`);
}

export async function getPostBody(slug: string, locale: string) {
	const raw = await readLocalized('posts', slug, locale);
	const { content } = matter(raw);
	const { content: compiled } = await compileMDX({
		source: content,
		components,
	});
	return compiled;
}

export async function getProjectBody(slug: string, locale: string) {
	const raw = await readLocalized('projects', slug, locale);
	const { content } = matter(raw);
	const { content: compiled } = await compileMDX({
		source: content,
		components,
	});
	return compiled;
}
