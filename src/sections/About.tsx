"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import youtubeImage from '@/assets/images/youtube.png';
import Image from 'next/image';
import PythonIcon from '@/assets/icons/python.svg';
import JavaIcon from '@/assets/icons/java.svg';
import CIcon from '@/assets/icons/c.svg';
import CppIcon from '@/assets/icons/cpp.svg';
import CSharpIcon from '@/assets/icons/csharp.svg';
import RustIcon from '@/assets/icons/rust.svg';
import SQLIcon from '@/assets/icons/sql.svg';
import ReactIcon from '@/assets/icons/react.svg';
import AngularIcon from '@/assets/icons/angular.svg';
import SymfonyIcon from '@/assets/icons/symphony.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import GitIcon from '@/assets/icons/github.svg';
import VSCodeIcon from '@/assets/icons/vscode.svg';
import IntelliJIcon from '@/assets/icons/intellijidea.svg';
import mapImage from '@/assets/images/map.jpg';
import smileEmoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";

const toolboxItems = [
  { 
    title: 'Python',
    iconType: PythonIcon ,
  },
  { 
    title: 'Java',
    iconType: JavaIcon ,
  },
  { 
    title: 'C',
    iconType: CIcon ,
  },
  { 
    title: 'C++',
    iconType: CppIcon,
  },
  { 
    title: 'C#',
    iconType: CSharpIcon,
  },
  { 
    title: 'Rust',
    iconType: RustIcon,
  },
  { 
    title: 'SQL',
    iconType: SQLIcon,
  },
  { 
    title: 'React',
    iconType: ReactIcon,
  },
  { 
    title: 'Angular',
    iconType: AngularIcon,
  },
  { 
    title: 'Symfony',
    iconType: SymfonyIcon,
  },
  { 
    title: 'Docker',
    iconType: DockerIcon,
  },
  { 
    title: 'Git',
    iconType: GitIcon,
  },
  { 
    title: 'VS Code',
    iconType: VSCodeIcon,
  },
  { 
    title: 'Intellij IDEA',
    iconType: IntelliJIcon,
  },
];

const hobbies = [
  {
    title: 'Musique',
    emoji: '🎵',
    left:'5%',
    top:'5%',
  },
  { title : 'Voyages', 
    emoji: '✈️',
    left:'35%',
    top:'5%',
  },
  { title : 'foot', 
    emoji: '⚽',
    left:'5%',
    top:'65%', 
  },
  { title : 'films & séries', 
    emoji: '🎬',
    left:'10%',
    top:'35%', 
  },
  { title : 'Jeux vidéo', 
    emoji: '🎮' ,
    left:'30%',
    top:'65%',
  }, 
  {
    title : 'Nouvelles technologies', 
    emoji: '💡',
    left:'45%',
    top:'35%', 
  },
  {
    title : 'Basket', 
    emoji: '🏀',
    left:'65%',
    top:'5%',
  },
  { title : 'F1', 
    emoji: '🏎️',
    left:'65%',
    top: '65%'
  }
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id='about'>
      <div className="py-20 lg:py-28">
        <div className="container ">
          <SectionHeader eyebrow="À propos de moi" title="Un Regard sur Mon Univers" description="Apprenez-en plus sur qui je suis, ce que je fais et ce qui m’inspire au quotidien." />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader title="Inspiration" description="les créateur de contenu qui partage des vidéos sur la cybersécurité, la technologie et l’univers de l'informatique." />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={youtubeImage} alt="YouTube" />
                </div>
              </Card>
              <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
                <CardHeader className="" title="Mes Outils" description="Les langages, frameworks et outils que j’utilise pour concevoir et sécuriser des applications performantes." />
                <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:40s]"/>
                <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName="animate-move-right [animation-duration:35s]"/>
              </Card>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader className='px-6 py-6' title="Au-delà du Code" description="Mes intérêts au-delà de l’informatique, qui nourrissent ma créativité et mon équilibre." />
                <div className="relative flex-1 " ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div key={hobby.title} style={{top: hobby.top,left: hobby.left, }} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" drag dragConstraints={constraintRef}>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span className="">{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                  <Image src={mapImage} alt="Map" className="h-full w-full object-cover " />
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 " >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                    <Image src={smileEmoji} alt="Smile Emoji" className="size-20" />
                  </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
