import { useState } from "react";

interface Artwork {
  file: string;
  title: string;
  dimensions: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    file: "tableau mounir 2 copie.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 3 copie.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 4.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 6.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 8 copie 1.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 9.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 10.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 11.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 13.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 14.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 15.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 17.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 19.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  },
  {
    file: "tableau mounir 20.png",
    title: "UNNAMED",
    dimensions: "30×40cm",
    description: "peinture acrylique et pastel gras sur toile"
  }
];

interface GalerieProps {
  scrollToSection?: (id: string) => void;
}

export default function Galerie({ scrollToSection }: GalerieProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20">
        {/* Texte d'introduction */}
        <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mb-12 md:mb-16">
          Je peins pour toucher ce qui ne se dit pas. Le visage est mon
          territoire. Parce que tout passe par lui : l'émotion, la mémoire, le
          silence, le doute, l'éclair. Je cherche ces micro-glissements. Je les
          entremêle, je les disloque. Je veux montrer que l'humain n'est jamais
          un bloc fini — il est composite, stratifié, instable.
        </p>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {artworks.map((artwork, i) => (
            <div 
              key={i} 
              className="aspect-[3/4] overflow-hidden cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <img
                src={`/src/img/tableaux/${artwork.file}`}
                alt={`${artwork.title} ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Texte de conclusion */}
        <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
          Ma matière principale est le pastel gras. J'aime son côté brut,
          immédiat, ses saturations franches, ses impuretés. C'est un outil qui
          laisse de la place au hasard. 
          <br />
          <br />
          Je ne veux pas tout maîtriser, je veux
          être traversé. 
          <br />
          <br />
          Je superpose, je brouille, j'expérimente.
          <br />
          <br />
          Je travaille
          sur le tas, je me laisse surprendre. Je cherche ce moment où l'image
          bascule : où un visage cesse d'être représentation pour devenir
          présence.
        </p>
      </div>

      {/* Modal pour afficher l'œuvre en détail */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="bg-white w-full max-w-6xl max-h-[90vh] overflow-auto rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image à gauche */}
              <div className="lg:w-1/2 p-6 md:p-10 flex items-center justify-center bg-gray-50">
                <img
                  src={`/src/img/tableaux/${selectedArtwork.file}`}
                  alt={selectedArtwork.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Informations à droite */}
              <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                {/* Logo en haut */}
                <div className="flex justify-center mb-8">
                  <img 
                    src="/src/img/logo.svg" 
                    alt="zon'art logo" 
                    className="h-8 md:h-10"
                  />
                </div>

                {/* Informations de l'œuvre */}
                <div className="flex-1 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {selectedArtwork.title}
                  </h2>
                  <p className="text-xl md:text-2xl">
                    {selectedArtwork.dimensions}
                  </p>
                  <p className="text-base md:text-lg text-gray-700">
                    {selectedArtwork.description}
                  </p>
                </div>

                {/* Bouton en bas */}
                <button
                  onClick={() => {
                    setSelectedArtwork(null);
                    if (scrollToSection) {
                      scrollToSection("contact");
                    }
                  }}
                  className="w-full mt-8 border-2 border-black rounded-full px-6 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  JE VEUX CE TABLEAU CHEZ MOI
                </button>

                {/* Bouton fermer */}
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-100 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}