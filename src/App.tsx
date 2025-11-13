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
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isScrolling, setIsScrolling] = useState(false);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const handleScroll = () => {
    if (isScrolling) return;

    const windowHeight = window.innerHeight;
    let currentId: string | null = null;
    const newVisibleSections = new Set<string>();

    for (const section of sections) {
      const el = refs.current[section.id];
      if (el) {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        // Marquer comme visible si dans le viewport
        if (top < windowHeight && bottom > 0) {
          newVisibleSections.add(section.id);
        }

        // Section active si plus de la moitié est visible
        if (top < windowHeight / 2 && bottom > windowHeight / 2) {
          currentId = section.id;
        }
      }
    }

    setActive(currentId);
    setVisibleSections(newVisibleSections);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    const section = refs.current[id];
    if (section) {
      setIsScrolling(true);

      // Fade out
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.3s";

      setTimeout(() => {
        // Scroll instantané
        section.scrollIntoView({ behavior: "auto", block: "start" });

        // Forcer la mise à jour de la section visible
        setVisibleSections(new Set([id]));

        // Fade in
        setTimeout(() => {
          document.body.style.opacity = "1";
          setTimeout(() => {
            setIsScrolling(false);
          }, 300);
        }, 50);
      }, 300);
    }
  };

  return (
    <div className="relative w-full bg-white">
      <Header
        active={active}
        sections={sections}
      />
      <Hero sections={sections} onClick={scrollToSection} />
      {sections.map((section) => (
        <div
          key={section.id}
          ref={(el) => {
            refs.current[section.id] = el;
          }}
          id={section.id}
          className={`w-full min-h-screen flex items-center justify-center transition-opacity duration-700 ${
            visibleSections.has(section.id) ? "opacity-100" : "opacity-0"
          }`}
        >
          <Section section={section} scrollToSection={scrollToSection} />
        </div>
      ))}
    </div>
  );
}