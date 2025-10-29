import jarvisAssistant from "@/assets/images/jarvis-assistant.png";
import unityGame from "@/assets/images/unity-educational-game.png";
import readmeJournal from "@/assets/images/readme-journal.png";
import portfolioSite from "@/assets/images/portfolio-site.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    year: "2024",
    title: "Jeu Éducatif 2D (Unity & C#)",
    results: [
      { title: "Développement d’un jeu éducatif 2D multiplateforme (PC, Android & IOS)" },
      { title: "Base de données SQL intégrée pour gérer les questions et résultats" },
      { title: "Projet sur GitHub, réalisé avec Unity et C#" },
    ],
    link: "https://github.com/Marwan-10/ProjetJeux2D", 
    image: unityGame,
  },
  {
    year: "2025",
    title: "Portfolio en ligne — React, Next.js & Tailwind",
    results: [
      { title: "Création du site personnel avec animations CSS et interface responsive" },
      { title: "Déploiement moderne sous Next.js avec TailwindCSS" },
      { title: "Design sobre et clair pour valoriser mes projets" },
    ],
    link: "https://github.com/Marwan-10/MonPortfolio", 
    image: portfolioSite,
  },
  {
    year: "2024",
    title: "README Journal — Notes de Cybersécurité et Linux",
    results: [
      { title: "Compilation de connaissances issues de cours Udemy" },
      { title: "Outils étudiés : Nmap, Metasploit, Wireshark, Kali Linux" },
      { title: "Documentation claire et organisée sous forme de README.md" },
    ],
    link: "https://github.com/Marwan-10/JournalCyberSecurity", 
    image: readmeJournal,
  },
  {
    year: "2023",
    title: "Assistant Jarvis (Python + API ChatGPT)",
    results: [
      { title: "Assistant vocal inspiré d’Iron Man, codé en Python" },
      { title: "Utilisation de l’API ChatGPT pour la compréhension du langage" },
      { title: "Reconnaissance vocale, synthèse et commandes système" },
    ],
    link: "https://github.com/Marwan-10/AssistantJarvis", 
    image: jarvisAssistant,
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects'>
      <section className="pb-16 lg:py-24">
        <div className="container ">
          <SectionHeader eyebrow="Voici quelques projets :" title="Projets" description="Chaque projet met en avant mes compétences en développement et en conception." />
          <div className="flex flex-col mt-10 gap-10 md:mt-20">
            {portfolioProjects.map((project, projectIndex) => (
              <Card key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky  " style={{
                top: `calc(64px +  ${projectIndex * 80}px`,
              }}>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map(result => (
                        <li className="flex gap-2 text-sm text-white/50 md:text-base" key={result.title}>
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Voir le projet</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image src={project.image} alt={project.title} className="mt-8 mb-1 mx-auto w-95 h-95 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
