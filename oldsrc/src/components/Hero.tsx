interface SectionItem {
  id: string;
  title: string;
}

interface HeroProps {
  sections: SectionItem[];
  onClick: (id: string) => void;
}

export default function Hero({ sections, onClick }: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-white">
      <h1 className="text-[18vw] font-black text-black tracking-tight select-none leading-none font-[Arial]">
        zon’art
      </h1>

      {/* Boutons disposés autour */}
      {sections.map((s) => {
        const pos = {
          design: "top-[10%] left-[10%]",
          galerie: "top-[20%] left-[45%]",
          programmation: "top-[30%] right-[10%]",
          collectif: "bottom-[20%] left-[35%]",
          contact: "bottom-[10%] right-[15%]",
        }[s.id];

        return (
          <button
            key={s.id}
            onClick={() => onClick(s.id)}
            className={`absolute ${pos} border border-black rounded-full px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition-colors`}
          >
            {s.title}
          </button>
        );
      })}
    </div>
  );
}
