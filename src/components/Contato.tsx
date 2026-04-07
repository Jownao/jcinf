"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5579981423483?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!";
const IG_LINK = "https://instagram.com/jownao";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-[#F8F8F6]">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Label */}
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-4"
        >
          Contato
        </motion.span>

        {/* Titulo */}
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight mb-4"
        >
          Vamos conversar?
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Me conta o seu projeto e a gente vê o melhor caminho juntos.
          Respondo rápido no WhatsApp.
        </motion.p>

        {/* Botoes */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-base px-8 py-4 rounded-full transition-colors shadow-md shadow-green-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.5 14.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51H8c-.17 0-.45.07-.69.35-.24.27-.92.9-.92 2.2s.94 2.55 1.07 2.72c.13.17 1.85 2.83 4.5 3.97 1.63.7 2.27.76 3.09.64.5-.07 1.53-.63 1.74-1.24.22-.61.22-1.13.15-1.24-.07-.11-.27-.18-.57-.33z" />
              <path d="M12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.22-1.57A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22a9.94 9.94 0 0 1-5.06-1.38l-.36-.22-3.73.94.99-3.62-.24-.37A9.94 9.94 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10z" />
            </svg>
            Falar no WhatsApp
          </motion.a>

          <motion.a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-[#F8F8F6] text-[#111111] font-semibold text-base px-8 py-4 rounded-full border border-[#E5E7EB] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" stroke="none" />
            </svg>
            Ver no Instagram
          </motion.a>
        </motion.div>

        {/* Info extra */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#6B7280]"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            Resposta em até 1 hora
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Atendimento em Sergipe e remoto
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            Orçamento gratuito
          </div>
        </motion.div>

      </div>
    </section>
  );
}