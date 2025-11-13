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
    <div className="relative h-screen w-full flex items-center justify-center bg-white overflow-hidden">
      {/* Logo central - responsive */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <img 
          className="w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] xl:w-[40vw] max-w-3xl select-none"
          src="/src/img/logo.svg"
          alt="Logo zon'art"
        />
      </div>

      {/* Boutons disposés autour - version desktop */}
      <div className="hidden lg:block absolute inset-0">
        {sections.map((s) => {
          const positions = {
            design: "top-[12%] left-[8%]",
            galerie: "top-[22%] left-1/2 -translate-x-1/2",
            programmation: "top-[32%] right-[8%]",
            collectif: "bottom-[28%] left-[38%]",
            contact: "bottom-[15%] right-[10%]",
          }[s.id];

          return (
            <button
              key={s.id}
              onClick={() => onClick(s.id)}
              className={`absolute ${positions} border-2 border-black rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Version tablette (md à lg) */}
      <div className="hidden md:block lg:hidden absolute inset-0">
        {sections.map((s) => {
          const positions = {
            design: "top-[15%] left-[5%]",
            galerie: "top-[20%] left-1/2 -translate-x-1/2",
            programmation: "top-[30%] right-[5%]",
            collectif: "bottom-[25%] left-[30%]",
            contact: "bottom-[18%] right-[8%]",
          }[s.id];

          return (
            <button
              key={s.id}
              onClick={() => onClick(s.id)}
              className={`absolute ${positions} border-2 border-black rounded-full px-5 py-2 text-xs font-medium hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Version mobile et petites tablettes (sm à md) */}
      <div className="block md:hidden absolute inset-0 flex items-end justify-center pb-12">
        <div className="w-full max-w-md px-6">
          <div className="grid grid-cols-2 gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => onClick(s.id)}
                className="border-2 border-black rounded-full px-4 py-2.5 text-xs font-medium hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap text-center bg-white"
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}