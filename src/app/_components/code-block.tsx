'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type CodeBlockProps = {
	file?: string;
	code: string;
	html?: string;
};

export const CodeBlock = ({ file, code, html }: CodeBlockProps) => {
	const t = useTranslations('blog');
	const [copied, setCopied] = useState(false);

	const copy = () => {
		navigator.clipboard?.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 1600);
	};

	return (
		<div className="mt-[22px] overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(15,23,42,0.18)]">
			<div className="flex items-center justify-between bg-code-header px-[18px] py-[9px]">
				<span className="font-mono text-[11.5px] text-faint">{file}</span>
				<button
					type="button"
					onClick={copy}
					className="cursor-pointer rounded-lg bg-white/8 px-2.5 py-1 font-mono text-[10.5px] text-slate-300 transition-colors hover:bg-white/16"
				>
					{copied ? t('copied') : t('copy')}
				</button>
			</div>
			{html ? (
				<div
					className="code-highlight"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: HTML gerado pelo Shiki no servidor a partir do data layer
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			) : (
				<div className="overflow-x-auto whitespace-pre bg-code px-[22px] py-[18px] font-mono text-[13px] text-code-text leading-[1.85]">
					{code}
				</div>
			)}
		</div>
	);
};
