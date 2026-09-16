"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["hero", "sobre", "servicos", "precos", "portfolio", "contato"];

export default function ScrollNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Se chegou no final da página (com uma margem de segurança de 50px)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      
      if (isAtBottom) {
        setIsVisible(false);
        return;
      }

      // Procurar qual seção está ativa, olhando de baixo para cima
      let activeIndex = 0;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTIONS[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Se o topo do elemento já passou do meio da tela, esta é a seção ativa
          if (rect.top <= window.innerHeight / 2) {
            activeIndex = i;
            break;
          }
        }
      }

      setCurrentIndex(activeIndex);
      // Ocultar na última seção
      setIsVisible(activeIndex < SECTIONS.length - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Usar timeout para garantir que o DOM e as dimensões da janela já estão carregados
    const initTimer = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initTimer);
    };
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

