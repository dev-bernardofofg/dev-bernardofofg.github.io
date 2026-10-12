import { codeToHtml } from 'shiki';
import { CodeBlock } from '../code-block';

type SnippetProps = {
	file?: string;
	lang?: 'ts' | 'tsx' | 'sql' | 'js';
	children: string;
};

const inferLang = (file?: string, explicit?: SnippetProps['lang']) => {
	if (explicit) return explicit;
	if (file?.endsWith('.sql')) return 'sql';
	if (file?.endsWith('.tsx')) return 'tsx';
	if (file?.endsWith('.js')) return 'js';
	return 'ts';
};

export const Snippet = async ({ file, lang, children }: SnippetProps) => {
	const code = typeof children === 'string' ? children : String(children);
	const html = await codeToHtml(code.trim(), {
		lang: inferLang(file, lang),
		theme: 'one-dark-pro',
		colorReplacements: { '#282c34': '#0f172a' },
	});
	return <CodeBlock file={file} code={code.trim()} html={html} />;
};
