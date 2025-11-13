import { useEffect, useState } from "react";

interface HeaderProps {
  active: string | null;
  sections: { id: string; title: string; member: string }[];
}


export default function Header({ active, sections }: HeaderProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = sections.find((s) => s.id === active);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 transition-all duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Badge section gauche */}
      <div className="text-xs md:text-sm font-medium bg-white border-2 border-black rounded-full px-4 md:px-6 py-1.5 md:py-2 min-w-[100px] md:min-w-[140px] text-center">
        {current?.title || ""}
      </div>

      {/* Logo central cliquable */}
      <img 
        className="h-6 md:h-8 select-none cursor-pointer hover:opacity-70 transition-opacity"
        src="/img/logo.svg"
        alt="Logo zon'art"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Badge membre droite */}
      <div className="text-xs md:text-sm font-medium bg-white border-2 border-black rounded-full px-4 md:px-6 py-1.5 md:py-2 min-w-[100px] md:min-w-[140px] text-center">
        {current?.member || ""}
      </div>
    </header>
  );
}