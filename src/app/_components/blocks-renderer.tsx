import type { ContentBlock } from '@/lib/data';
import { localize } from '@/lib/i18n';
import { getLocale } from 'next-intl/server';
import { codeToHtml } from 'shiki';
import { CodeBlock } from './code-block';

type BlocksRendererProps = {
	blocks: ContentBlock[];
};

const langFromFile = (file?: string) => {
	if (file?.endsWith('.sql')) return 'sql';
	if (file?.endsWith('.tsx')) return 'tsx';
	return 'ts';
};

const highlight = (code: string, file?: string) =>
	codeToHtml(code, {
		lang: langFromFile(file),
		theme: 'one-dark-pro',
		colorReplacements: { '#282c34': '#0f172a' },
	});

export const BlocksRenderer = async ({ blocks }: BlocksRendererProps) => {
	const locale = await getLocale();
	const highlighted = await Promise.all(
		blocks.map((block) =>
			block.code ? highlight(block.code, block.file) : null,
		),
	);

	return (
		<>
			{blocks.map((block, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: lista estática, sem reordenação
				<div key={index}>
					{block.heading && (
						<h2 className="mt-[34px] font-extrabold font-mono text-[13px] text-accent-a tracking-[0.12em]">
							{localize(block.heading, locale)}
						</h2>
					)}
					{block.text && (
						<p className="mt-4 text-[16.5px] text-secondary leading-[1.75]">
							{localize(block.text, locale)}
						</p>
					)}
					{block.code && (
						<CodeBlock
							file={block.file}
							code={block.code}
							html={highlighted[index] ?? undefined}
						/>
					)}
					{block.note && (
						<div className="glass-card mt-[22px] rounded-xl border-l-[3px] border-l-accent-a px-[22px] py-4 text-[15px] text-secondary leading-[1.65]">
							{localize(block.note, locale)}
						</div>
					)}
				</div>
			))}
		</>
	);
};
