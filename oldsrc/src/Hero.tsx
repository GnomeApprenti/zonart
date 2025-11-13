import { motion } from "framer-motion";
import ThreeText from "./ThreeText";
import GlitchTitle from "./GlitchTitle";

export default function Hero() {
  return (
    <div className="bg-black py-6 font-press relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* FOND SCANLINES + grain */}
      <div className="absolute inset-0 h-screen w-screen scanlines pointer-events-none" />

      {/* TITRE GLITCH */}
      <div className="pb-16">
        <GlitchTitle />
      </div>

      {/* TEXTE 3D */}
      <div className="h-[500px] w-full z-10">
        <ThreeText />
      </div>

      {/* SOUS-TITRE */}
      <motion.p
        className="mt-8 text-lg text-gray-300 z-10"
        style={{ fontFamily: "'VT323', monospace" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Arts ✦ 3D ✦ Design graphique ✦ Événements
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#shop"
        className="font-press mt-6 inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition rounded-lg shadow-lg z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        DÉCOUVRIR NOS ŒUVRES
      </motion.a>
    </div>
  );
}
