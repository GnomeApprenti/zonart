interface SectionProps {
  section: {
    id: string;
    title: string;
    member: string;
  };
}

export default function Section({ section }: SectionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-6xl font-bold mb-4">{section.title}</h2>
      <p className="text-lg max-w-2xl text-gray-700">
        Contenu de la section {section.title}.  
        (Remplace ce texte par tes visuels ou textes spécifiques.)
      </p>
    </div>
  );
}
