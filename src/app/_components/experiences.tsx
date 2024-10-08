import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { JOBS_DESCRIPTION } from '@/lib/constants';
import { format, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const Experiences = () => {
	return (
		<section
			className="max-w-7xl mx-auto flex w-full items-center flex-col gap-8"
			id="experience"
		>
			<div className="w-full font-bold text-4xl">
				<h2>
					Experiências <span className="text-primary">.</span>
				</h2>
			</div>

			<div className="w-full flex gap-8">
				<Tabs defaultValue="watechnology" className="w-full flex gap-8">
					<TabsList
						className="flex flex-col items-start bg-neutral-800 max-w-[300px]
          "
					>
						<TabsTrigger value="watechnology">WA Technology</TabsTrigger>
						<TabsTrigger value="netec">NETec</TabsTrigger>
						<TabsTrigger value="emprel">EMPREL</TabsTrigger>
					</TabsList>
					<div className="flex flex-1 w-full">
						{JOBS_DESCRIPTION.map((v) => (
							<TabsContent
								value={v.tabId}
								key={v.tabId}
								className="w-full space-y-6 font-bold text-xl"
							>
								<div className="flex justify-between w-full ">
									<h3>{v.title}</h3>

									<div className="space-x-2 text-neutral-500">
										<span>{format(v.dateStart, 'MM/yy')}</span>
										<span>-</span>
										<span>{format(v.dateEnd, 'MM/yy')}</span>

										<span>
											(
											{formatDistance(v.dateStart, v.dateEnd, { locale: ptBR })}
											)
										</span>
									</div>
								</div>
								<div className="text-primary">
									<h4>{v.company}</h4>
								</div>

								<div className="text-neutral-500">
									<p>{v.description}</p>
								</div>
							</TabsContent>
						))}
					</div>
				</Tabs>
			</div>
		</section>
	);
};
