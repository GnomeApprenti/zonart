import Collectif from "./Collectif";
import Contact from "./Contact";
import Galerie from "./Galerie";
import Programmation from "./Programmation";

interface SectionProps {
  section: {
    id: string;
    title: string;
    member: string;
  };
  scrollToSection?: (id: string) => void;
}


export default function Section({ section }: SectionProps) {
  if (section.id === "galerie") {
    return (
        <Galerie />
    );
  }
  if (section.id === "programmation") {
    return (
        <Programmation />
    );
  } 
  if (section.id === "collectif") {
    return (
        <Collectif />
    );
  }
  if (section.id === "contact") {
    return (
        <Contact />
    );
  }

  return (
    <div className="flex flex-col items-center h-screen justify-center text-center">
      <h2 className="text-6xl font-bold mb-4">{section.title}</h2>
      <p className="text-lg max-w-2xl text-gray-700">
        Contenu de la section {section.title}.  
        (Remplace ce texte par tes visuels ou textes spécifiques.)
      </p>
    </div>
  );
}
