import type { ContentBlock } from '@/lib/data';
import { CodeBlock } from './code-block';

type BlocksRendererProps = {
	blocks: ContentBlock[];
};

export const BlocksRenderer = ({ blocks }: BlocksRendererProps) => (
	<>
		{blocks.map((block, index) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: lista estática, sem reordenação
			<div key={index}>
				{block.heading && (
					<h2 className="mt-[34px] font-extrabold font-mono text-[13px] text-accent-a tracking-[0.12em]">
						{block.heading}
					</h2>
				)}
				{block.text && (
					<p className="mt-4 text-[16.5px] text-secondary leading-[1.75]">
						{block.text}
					</p>
				)}
				{block.code && <CodeBlock file={block.file} code={block.code} />}
				{block.note && (
					<div className="glass-card mt-[22px] rounded-xl border-l-[3px] border-l-accent-a px-[22px] py-4 text-[15px] text-secondary leading-[1.65]">
						{block.note}
					</div>
				)}
			</div>
		))}
	</>
);
