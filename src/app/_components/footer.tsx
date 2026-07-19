import { useTranslations } from 'next-intl';

export const Footer = () => {
	const t = useTranslations('footer');

	return (
		<footer className="pt-6 pb-2 text-center text-[12.5px] text-faint">
			{t('madeBy', { year: new Date().getFullYear() })}
		</footer>
	);
};
