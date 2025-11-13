import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
  member: string;
}

interface HeaderProps {
  active: string | null;
  sections: Section[];
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
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-sm font-medium border border-black rounded-full px-3 py-1">
        {current?.title || ""}
      </div>
      <div className="text-xl font-black select-none">zon’art</div>
      <div className="text-sm font-medium border border-black rounded-full px-3 py-1">
        {current?.member || ""}
      </div>
    </header>
  );
}
