#!/usr/bin/env node
// Reads content/posts/<slug>.pt-BR.mdx, counts prose words
// (excluding frontmatter, Snippet/Callout JSX, and fenced code blocks),
// then writes content/reading-times.json consumed by src/lib/data.ts.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const WORDS_PER_MINUTE = 200;
const root = resolve(process.cwd(), 'content/posts');
const output = resolve(process.cwd(), 'content/reading-times.json');

const stripFrontmatter = (raw) =>
	raw.startsWith('---') ? raw.replace(/^---[\s\S]*?---\n?/, '') : raw;

const stripJsxBlocks = (text) =>
	text
		.replace(/<Snippet[\s\S]*?<\/Snippet>/g, '')
		.replace(/<Callout[\s\S]*?<\/Callout>/g, '')
		.replace(/```[\s\S]*?```/g, '')
		.replace(/`[^`]+`/g, '');

const countWords = (text) =>
	text
		.split(/\s+/)
		.filter((token) => /[a-zA-ZÀ-ÿ0-9]/.test(token)).length;

const files = readdirSync(root).filter((f) => f.endsWith('.pt-BR.mdx'));
const times = {};

for (const file of files) {
	const slug = file.replace('.pt-BR.mdx', '');
	const raw = readFileSync(join(root, file), 'utf8');
	const prose = stripJsxBlocks(stripFrontmatter(raw));
	const words = countWords(prose);
	times[slug] = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

writeFileSync(output, `${JSON.stringify(times, null, 2)}\n`);
console.log(`Reading times written for ${Object.keys(times).length} posts.`);
