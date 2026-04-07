"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5579981423483?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F8F6]"
    >
      {/* Grid pontilhado decorativo */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blob azul suave */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #2563EB 0%, transparent 70%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#BFDBFE]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          Disponível para novos projetos
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111111] leading-tight tracking-tight mb-6"
        >
          Soluções digitais
          <br />
          <span className="text-[#2563EB]">que geram resultado</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl text-[#6B7280] leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Criamos sites, automações e bots de WhatsApp para pequenas e médias
          empresas — do zero ao ar, sem complicação.
        </motion.p>

        {/* Botões */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-colors shadow-md shadow-blue-200"
          >
            Falar no WhatsApp
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-white hover:bg-[#F8F8F6] text-[#111111] font-semibold text-base px-8 py-3.5 rounded-full border border-[#E5E7EB] transition-colors"
          >
            Ver Portfólio
          </motion.a>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 flex flex-col items-center gap-2 text-[#6B7280]"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#6B7280] to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
}