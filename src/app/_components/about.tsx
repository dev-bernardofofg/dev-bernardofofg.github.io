import { SOCIAL_LINK } from '@/lib/constants';
import Image from 'next/image';
import { AnimatedSection } from './animate-section';
import { SocialLink } from './social-link';

export const About = () => {
  return (
    <AnimatedSection
      className="relative mx-auto flex w-full max-w-7xl scroll-mt-12 items-center rounded-xl border-2 border-white/10 bg-neutral-950 shadow-md"
      id="about"
    >
      <div className="base:absolute relative base:h-[450px] w-full flex-1 animate-levitate base:blur-md md:relative md:h-[720px] md:blur-none">
        <Image src="/element/wrapper.svg" fill alt="wrapper" />
      </div>
      <div className="relative z-10 mx-auto max-w-md flex-1 space-y-6 base:p-6 md:p-2">
        <div className="font-bold">
          <h3 className="text-primary">Quem sou</h3>
          <h1 className="text-4xl">Bernardo Filipe</h1>
          <h2 className="text-neutral-500">Fullstack Developer</h2>
        </div>
        <div className="font-medium text-xl">
          <p className="text-neutral-400">
            Meu nome é Bernardo Filipe, sou um desenvolvedor full-stack, mas sou
            especializado em desenvolvimento front-end. Atualmente estou aberto a novas oportunidades de trabalho.
          </p>
        </div>
        <div className="flex flex-1 base:gap-4 md:gap-8">
          {SOCIAL_LINK.map((v) => (
            <SocialLink
              key={v.name}
              href={v.href}
              name={v.name}
              icon={v.icon}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
