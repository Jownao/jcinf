"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Check, FileText, Building2, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { DefaultCTAButton } from "@/components/CTA";

const planos = [
  {
    icon: <FileText className="w-7 h-7 text-[#2563EB]" />,
    title: "Página Única",
    desc: "Pra quem quer uma presença digital rápida e profissional.",
    plan: "plano-pagina-unica" as const,
    destaque: false,
    features: [
      "1 página (landing page)",
      "Design responsivo",
      "Botão de WhatsApp integrado",
      "Entrega em até 5 dias úteis",
      "Ideal pra autônomos e liberais",
    ],
  },
  {
    icon: <Building2 className="w-7 h-7 text-white" />,
    title: "Site Institucional",
    desc: "O mais escolhido por pequenas empresas que querem crescer.",
    plan: "plano-institucional" as const,
    destaque: true,
    features: [
      "Até 5 páginas (Home, Sobre, Serviços, Contato...)",
      "Design personalizado",
      "Otimização para SEO básico",
      "Integração com WhatsApp",
      "Ideal pra pequenas empresas",
    ],
  },
  {
    icon: <Rocket className="w-7 h-7 text-[#2563EB]" />,
    title: "Site + Sistema",
    desc: "Pra quem quer automatizar e escalar o atendimento.",
    plan: "plano-sistema" as const,
    destaque: false,
    features: [
      "Páginas ilimitadas",
      "Integração com bot de automação",
      "Painel administrativo / loja virtual",
      "Suporte prioritário",
      "Ideal pra negócios que querem automatizar",
    ],
  },
];

export default function Precos() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="precos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-4">
            Planos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight">
            Qual desses é a cara do seu negócio?
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-xl mx-auto">
            Cada plano é pensado pra um momento diferente. Fale comigo no
            WhatsApp e eu te mostro os valores e uma prévia de como ficaria.
          </p>
        </motion.div>

        {/* Carrossel */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-12 -my-8 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {planos.map((plano) => (
              <motion.div
                key={plano.title}
                data-card
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className={`snap-start shrink-0 w-[85%] sm:w-[360px] flex flex-col gap-5 rounded-[20px] p-8 ${
                  plano.destaque
                    ? "bg-[#2563EB]"
                    : "bg-white border border-[#E5E7EB]"
                }`}
                style={{
                  boxShadow: plano.destaque
                    ? "0 12px 32px rgba(37,99,235,0.3)"
                    : "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                {plano.destaque && (
                  <span className="self-start bg-white text-[#2563EB] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Mais escolhido
                  </span>
                )}

                <div>{plano.icon}</div>

                <div>
                  <h3
                    className={`font-bold text-xl ${
                      plano.destaque ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {plano.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      plano.destaque ? "text-blue-200" : "text-[#6B7280]"
                    }`}
                  >
                    {plano.desc}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {plano.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plano.destaque ? "text-white" : "text-[#2563EB]"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          plano.destaque ? "text-blue-50" : "text-[#374151]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <DefaultCTAButton
                  label="Falar sobre esse plano"
                  service={plano.plan}
                  size="md"
                  className={`w-full justify-center ${
                    plano.destaque ? "!bg-white !text-[#2563EB] hover:!bg-[#F8F8F6]" : ""
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Setas de navegação */}
          <button
            onClick={() => scroll("left")}
            aria-label="Plano anterior"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-[#E5E7EB] text-[#111111] shadow-md hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo plano"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-[#E5E7EB] text-[#111111] shadow-md hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
