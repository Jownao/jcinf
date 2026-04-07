"use client";

import { motion } from "framer-motion";
import { BotButton, BioButton, SiteButton, DefaultCTAButton } from "@/components/CTA";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const digitais = [
  {
    icon: "🌐",
    title: "Sites Profissionais",
    desc: "Sites modernos, rápidos e otimizados para atrair e converter clientes.",
    service: "site" as const,
  },
  {
    icon: "🤖",
    title: "Bot de WhatsApp",
    desc: "Automatize o atendimento e responda clientes 24h sem precisar estar online.",
    service: "bot" as const,
  },
  {
    icon: "🔔",
    title: "Lembretes Automáticos",
    desc: "Reduza faltas com envio automático de lembretes de consultas e compromissos.",
    service: "bot" as const,
  },
  {
    icon: "📊",
    title: "Relatórios Automáticos",
    desc: "Receba relatórios mensais do seu negócio sem precisar montar planilha.",
    service: "bot" as const,
  },
  {
    icon: "🔗",
    title: "Página de Links",
    desc: "Uma página personalizada com todos os seus links importantes num só lugar.",
    service: "bio" as const,
  },
];

const suporte = [
  {
    icon: "🖥️",
    title: "Formatação e Windows",
    desc: "Instalação limpa do sistema com todos os drivers configurados.",
  },
  {
    icon: "🛡️",
    title: "Remoção de Vírus",
    desc: "Limpeza completa de malware e otimização do PC.",
  },
  {
    icon: "💾",
    title: "Instalação de Programas",
    desc: "Configuração de softwares e drivers essenciais para o seu uso.",
  },
  {
    icon: "📁",
    title: "Backup de Arquivos",
    desc: "Seus dados protegidos antes de qualquer manutenção.",
  },
  {
    icon: "🖱️",
    title: "Suporte Remoto",
    desc: "Atendimento via AnyDesk sem precisar sair de casa.",
  },
  {
    icon: "🧹",
    title: "Limpeza Interna",
    desc: "Limpeza física e troca de pasta térmica para o PC durar mais.",
  },
  {
    icon: "⚡",
    title: "Troca de HD por SSD",
    desc: "Seu computador até 5x mais rápido com upgrade de armazenamento.",
  },
  {
    icon: "🔧",
    title: "Upgrade de Memória RAM",
    desc: "Mais velocidade para multitarefas e programas pesados.",
  },
];

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  service?: "site" | "bot" | "bio" | "default";
}

function ServiceCard({ icon, title, desc, service = "default" }: ServiceCardProps) {
  const renderCTAButton = () => {
    switch (service) {
      case "site":
        return <SiteButton size="sm" />;
      case "bot":
        return <BotButton size="sm" />;
      case "bio":
        return <BioButton size="sm" />;
      default:
        return <DefaultCTAButton label="Saber mais" size="sm" />;
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-3 cursor-default"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
    >
      <span className="text-3xl">{icon}</span>
      <h3 className="text-[#111111] font-bold text-base">{title}</h3>
      <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
      <div className="mt-2">
        {renderCTAButton()}
      </div>
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px flex-1 bg-[#E5E7EB]" />
      <span className="text-xs font-semibold tracking-widest text-[#6B7280] uppercase whitespace-nowrap">
        {children}
      </span>
      <span className="h-px flex-1 bg-[#E5E7EB]" />
    </div>
  );
}

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-[#F8F8F6]">
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
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight">
            Serviços disponíveis
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-xl mx-auto">
            Do site profissional ao suporte técnico — tudo que seu negócio
            precisa num só lugar.
          </p>
        </motion.div>

        {/* Soluções Digitais */}
        <SectionLabel>Soluções Digitais</SectionLabel>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {digitais.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </motion.div>

        {/* Suporte Técnico */}
        <SectionLabel>Suporte Técnico</SectionLabel>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {suporte.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </motion.div>

        {/* Card CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#2563EB] rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ boxShadow: "0 4px 24px rgba(37,99,235,0.25)" }}
        >
          <div>
            <h3 className="text-white font-extrabold text-2xl mb-2">
              Não encontrou o que precisa?
            </h3>
            <p className="text-blue-200 text-base">
              Se a sua ideia não está na lista, fale comigo. Desenvolvemos
              soluções sob medida para o seu negócio.
            </p>
          </div>
          <DefaultCTAButton label="Conversar no WhatsApp" size="lg" className="flex-shrink-0 w-full sm:w-auto" />
        </motion.div>

      </div>
    </section>
  );
}