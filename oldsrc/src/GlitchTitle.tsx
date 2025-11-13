import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function GlitchTitle() {
  const controls = useAnimation();

  useEffect(() => {
    const glitchLoop = async () => {
      while (true) {
        await controls.start({
          x: [-2, 2, -1, 1, 0],
          skewX: [0, 5, -5, 0],
          clipPath: [
            "inset(0% 0% 0% 0%)",
            "inset(10% 0% 80% 0%)",
            "inset(30% 0% 60% 0%)",
            "inset(0% 0% 0% 0%)",
          ],
          transition: { duration: 0.5 },
        });
        await controls.start({
          x: 0,
          skewX: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 0.5 },
        });
      }
    };
    glitchLoop();
  }, [controls]);

  return (
    <div className="w-screen text-center text-6xl font-press z-10">
      {/* couches décalées colorées */}
      <motion.span
        className="absolute ml-2 text-red-500 opacity-70"
        animate={controls}
      >
        ✦ ZON'ART ✦
      </motion.span>
      <motion.span
        className="absolute left-0 ml-105 text-cyan-500 opacity-70"
        animate={controls}
      >
        ✦ ZON'ART ✦
      </motion.span>

      {/* texte principal blanc */}
      <motion.span className="relative text-white">
        ✦ ZON'ART ✦
      </motion.span>
    </div>
  );
}
