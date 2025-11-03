'use client';

import memojiImages from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return ( 
  <section id="home">
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] '>
        <div 
          className='absolute inset-0 -z-30 opacity-5 ' 
          style={{ backgroundImage: `url(${grainImage.src})`, }}>

        </div>

        <div className='size-[820px] hero-ring '></div>
        <div className='size-[1020px] hero-ring '></div>
        <div className='size-[1220px] hero-ring '></div>
        <div className='size-[1420px] hero-ring '></div>
        <div className='size-[1620px] hero-ring '></div>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='30s'>
              <div className='size-3 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={-14} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='12s'>
              <SparkleIcon className='size-8 text-emerald-300/20'  />
        </HeroOrbit>
        <HeroOrbit size={540} rotation={79} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='12s'>
              <SparkleIcon className='size-5 text-emerald-300/20'  />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={125} shouldOrbit orbitDuration='36s'>
              <div className='size-3 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={630} rotation={178} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='12s'>
              <SparkleIcon className='size-10 text-emerald-300/20'  />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={20} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='8s'>
              <StarIcon className='size-12 text-emerald-300'  />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
              <div className='size-2 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={660} rotation={-48} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='12s'>
              <SparkleIcon className='size-12 text-emerald-300/20'  />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={98} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='8s'>
              <StarIcon className='size-8 text-emerald-300'  />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='48s'>
              <div className='size-4 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit size={810} rotation={144} shouldOrbit orbitDuration='50s' shouldSpin spinDuration='12s'>
              <SparkleIcon className='size-14 text-emerald-300/20'  />
        </HeroOrbit> 
        <HeroOrbit size={900} rotation={-72} shouldOrbit orbitDuration='52s' shouldSpin spinDuration='8s'>
              <StarIcon className='size-28 text-emerald-300'  />
        </HeroOrbit> 

        
        
        
        
      </div>

      <div className="container relative z-10">
        <div className='flex flex-col items-center'>
          <Image src={memojiImages} className='size-[100px]' alt="Moi en train de travailler" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div> 
            </div>
            <div className='text-sm font-medium  '> À la recherche d&#39;un stage (avril 2025) </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide '> Étudiant en M2 Informatique <br></br> Parcours ARIAS <br></br> (Applications Réparties, IA et Sécurité)</h1>
          <p className='text-center mt-4 text-white/60 md:text-lg'> Passionné par l&#39;intelligence artificielle, 
            le développement d&#39;applications et la cybersécurité, 
            je suis actuellement à la recherche d&#39;un stage débutant en avril 2026 
            afin de mettre mes compétences en pratique et contribuer à des projets. 
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'> 
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl' onClick={() => scrollToSection('projects')}>
            <span className='font-semibold' >Voir mes projets </span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl ' onClick={() => scrollToSection('contact')} >
            <span>🤝</span>
            <span className='font-semibold' >Me contacter</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};
