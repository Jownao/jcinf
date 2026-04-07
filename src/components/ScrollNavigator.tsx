"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["hero", "sobre", "servicos", "portfolio", "contato"];

export default function ScrollNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar qual seção está mais visível (topo da viewport)
      let closestIndex = 0;
      let closestDistance = Infinity;

      SECTIONS.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        // Usar distância do topo do elemento até o topo da viewport
        const distance = element.getBoundingClientRect().top;

        // Pegar a seção que está mais próxima do topo (mas ainda visível ou acima)
        if (distance <= window.innerHeight / 2 && distance > -window.innerHeight) {
          if (Math.abs(distance) < Math.abs(closestDistance)) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentIndex(closestIndex);

      // Ocultar botão na última seção
      setIsVisible(closestIndex < SECTIONS.length - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Chamar na montagem
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const nextIndex = Math.min(currentIndex + 1, SECTIONS.length - 1);
    if (nextIndex < SECTIONS.length) {
      const element = document.getElementById(SECTIONS[nextIndex]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-[#E5E7EB] hover:border-[#2563EB] text-[#6B7280] hover:text-[#2563EB] px-5 py-2 rounded-full shadow-md backdrop-blur-sm text-sm font-semibold tracking-wide transition-all"
          aria-label="Próxima seção"
        >
          <span>Role para ver mais</span>
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

