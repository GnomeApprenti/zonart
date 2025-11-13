// src/components/Programming.tsx
import React from "react";

const Programming: React.FC = () => {
  return (
    <section id="programming" className="py-20 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Programmation</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Développeur passionné par l’art numérique et les technologies interactives, 
          j’aime utiliser mes compétences en programmation pour donner vie à des idées 
          et créer des projets concrets, qu’ils soient visuels ou techniques.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Je m’intéresse particulièrement aux espaces où la créativité rencontre le code, 
          et j’aime explorer comment la technologie peut devenir un outil d’expression 
          artistique et personnelle.
        </p>
      </div>
    </section>
  );
};

export default Programming;
