'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { JOBS_DESCRIPTION } from '@/lib/constants';
import { format, formatDistance } from 'date-fns';
import { enUS, es, ptBR } from 'date-fns/locale';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatedSection } from './animate-section';

// Exibe os empregos do mais recente para o mais antigo
const JOBS_SORTED = [...JOBS_DESCRIPTION].reverse();

const dateLocales = {
	'pt-BR': ptBR,
	en: enUS,
	es: es,
};

export const Experiences = () => {
	const t = useTranslations('experiences');
	const locale = useLocale() as keyof typeof dateLocales;
	const dateLocale = dateLocales[locale] || ptBR;

	return (
		<AnimatedSection
			className="mx-auto flex w-full max-w-7xl scroll-mt-28 flex-col items-center gap-8 px-4"
			id="experience"
		>
			<div className="w-full space-y-2 font-bold text-4xl">
				<span className="text-sm font-medium text-primary">{t('label')}</span>
				<h2>
					{t('title')} <span className="text-primary">.</span>
				</h2>
			</div>

			<div className="flex w-full gap-8">
				<Tabs
					defaultValue="senfio"
					className="flex w-full base:flex-col gap-8 md:flex-row"
				>
					<TabsList className="flex base:max-w-full flex-col items-start bg-neutral-800 md:max-w-72 ">
						{JOBS_SORTED.map((job) => (
							<TabsTrigger key={job.tabId} value={job.tabId}>
								{t(`jobs.${job.tabId}.company`)}
							</TabsTrigger>
						))}
					</TabsList>
					<div className="flex w-full flex-1">
						{JOBS_SORTED.map((job) => (
							<TabsContent
								value={job.tabId}
								key={job.tabId}
								className="w-full space-y-6 font-bold text-xl"
							>
								<div className="flex w-full base:flex-col justify-between md:flex-row">
									<h3>{t(`jobs.${job.tabId}.title`)}</h3>

									<div className="space-x-2 text-neutral-500">
										<span>{format(job.dateStart, 'MM/yy')}</span>
										<span>-</span>
										<span>{format(job.dateEnd, 'MM/yy')}</span>

										<span>
											(
											{formatDistance(job.dateStart, job.dateEnd, {
												locale: dateLocale,
											})}
											)
										</span>
									</div>
								</div>
								<div className="text-primary">
									<h4>{t(`jobs.${job.tabId}.company`)}</h4>
								</div>

								<div className="text-neutral-500">
									<p>{t(`jobs.${job.tabId}.description`)}</p>
								</div>
							</TabsContent>
						))}
					</div>
				</Tabs>
			</div>
		</AnimatedSection>
	);
};
