"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stats = [
  { value: "100%", label: "Comprometimento" },
  { value: "1h", label: "Tempo de resposta" },
  { value: "3+", label: "Anos de experiência" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-4"
            >
              Sobre nós
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight mb-6"
            >
              Quem está por trás
              <br />
              da <span className="text-[#2563EB]">JCINF</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#6B7280] text-lg leading-relaxed mb-4"
            >
              Somos uma micro-agência especializada em soluções digitais para
              negócios de qualquer área. Unimos design, desenvolvimento e automação
              para entregar projetos que realmente funcionam, sem burocracia e com
              comunicação direta.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#6B7280] text-lg leading-relaxed mb-8"
            >
              Nossa abordagem é simples: você nos conta o que precisa, a gente
              transforma em realidade.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="#servicos"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] font-semibold text-sm px-6 py-3 rounded-full border border-[#BFDBFE] transition-colors"
            >
              Ver o que fazemos
              <span className="text-base">→</span>
            </motion.a>
          </motion.div>

          {/* Cards de stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-1"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                <span className="text-4xl font-extrabold text-[#111111]">
                  {stat.value}
                </span>
                <span className="text-sm text-[#6B7280] font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            {/* Card destaque 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-[#2563EB] rounded-[20px] p-5 flex flex-col gap-3"
              style={{ boxShadow: "0 4px 24px rgba(37,99,235,0.25)" }}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-snug">
                  Entrega rápida
                </p>
                <p className="text-blue-200 text-xs mt-1">
                  Sem burocracia ou enrolação
                </p>
              </div>
            </motion.div>

            {/* Card destaque 2 */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 bg-[#2563EB] rounded-[20px] p-5 flex items-center gap-3"
              style={{ boxShadow: "0 4px 24px rgba(37,99,235,0.25)" }}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">💬</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-snug">
                  Suporte direto
                </p>
                <p className="text-blue-200 text-xs mt-1">
                  Fale direto com quem faz
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}