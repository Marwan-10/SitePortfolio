import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return ( 
    <section id='contact'>
      <div className="py-16 p-12 lg:py-24 lg:pt-20 ">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0" >
            <div className="absolute inset-0 opacity-5 -z-10" style={
              {backgroundImage: 'url(${grainImage.src})',}}> 
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text:text-3xl "> Prêt à relever de nouveaux défis </h2>
                <p className="text-sm mt-2 md:text-base">
                  Actuellement en Master 2 Informatique (parcours ARIAS), je recherche un stage à partir d’avril 2025 pour mettre mes compétences en pratique et pouvoir contribuer à des projets.
                </p>
              </div>
              <div>
                <a
                  href="mailto:marwan.laag@gmail.com?subject=Contact%20-%20Stage%20Informatique&body=Bonjour%20M,%0D%0A%0D%0AJe%20souhaite%20échanger%20avec%20vous%20à%20propos%20de%20votre%20profil.%0D%0A%0D%0ACordialement,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition"
                >
                  <span className="font-semibold">Me Contacter</span>
                  <ArrowUpRightIcon className="size-4 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
