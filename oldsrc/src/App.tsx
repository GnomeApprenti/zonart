import { useState, useRef, useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Section from "./components/Section";

const sections = [
  { id: "design", title: "DESIGN", member: "BARTH" },
  { id: "galerie", title: "GALERIE", member: "MOUNIR" },
  { id: "programmation", title: "PROGRAMMATION", member: "LEITH / LUCIEN" },
  { id: "collectif", title: "COLLECTIF", member: "" },
  { id: "contact", title: "CONTACT", member: "" },
];

export default function App() {
  const [active, setActive] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const index = Math.floor(scrollY / vh);
    setActive(sections[index]?.id || null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = refs.current[id];
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <Header active={active} sections={sections} />
      <Hero sections={sections} onClick={scrollToSection} />
      {sections.map((section) => (
        <div
          key={section.id}
          ref={(el) => (refs.current[section.id] = el)}
          id={section.id}
          className="h-screen flex items-center justify-center"
        >
          <Section section={section} />
        </div>
      ))}
    </div>
  );
}
