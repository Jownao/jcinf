"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const WA_LINK =
  "https://wa.me/5579981423483?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!";

type Category = "sites" | "bot" | "linkbio";

interface Project {
  name: string;
  desc: string;
  mockup: React.ReactNode;
}

const categories: {
  id: Category;
  tag: string;
  title: string;
  subtitle: string;
  color: string;
  bg: string;
  border: string;
  icon: string;
}[] = [
  {
    id: "sites",
    tag: "Site",
    title: "Sites Profissionais",
    subtitle: "Sites modernos para consultórios e pequenos negócios.",
    color: "text-[#2563EB]",
    bg: "bg-[#EFF6FF]",
    border: "border-[#BFDBFE]",
    icon: "🌐",
  },
  {
    id: "bot",
    tag: "Bot WhatsApp",
    title: "Bot de WhatsApp",
    subtitle: "Atendimento automatizado 24h para o seu negócio.",
    color: "text-[#16A34A]",
    bg: "bg-[#F0FDF4]",
    border: "border-[#BBF7D0]",
    icon: "🤖",
  },
  {
    id: "linkbio",
    tag: "Link da Bio",
    title: "Página de Links",
    subtitle: "Todos os seus links num só lugar, com sua identidade.",
    color: "text-[#EA580C]",
    bg: "bg-[#FFF7ED]",
    border: "border-[#FED7AA]",
    icon: "🔗",
  },
];

function DesktopMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-[#1e1e1e] rounded-t-xl pt-3 px-3 flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="flex-1 mx-3 bg-[#2d2d2d] rounded-full h-4 flex items-center px-3">
          <span className="text-[9px] text-[#6b6b6b] truncate">jcinf.com.br/exemplo</span>
        </div>
      </div>
      <div className="w-full border-x border-b border-[#2d2d2d] rounded-b-xl overflow-hidden">
        {children}
      </div>
      <div className="w-16 h-3 bg-[#d1d5db] rounded-b-lg" />
      <div className="w-24 h-1.5 bg-[#e5e7eb] rounded-full mt-0.5" />
    </div>
  );
}

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[160px] bg-[#1e1e1e] rounded-[2rem] border-4 border-[#1e1e1e] shadow-xl overflow-hidden">
      <div className="bg-[#1e1e1e] h-5 flex items-center justify-center">
        <div className="w-14 h-2.5 bg-[#2d2d2d] rounded-full" />
      </div>
      <div className="rounded-b-[1.6rem] overflow-hidden">{children}</div>
    </div>
  );
}

function ChatBubble({ from, text }: { from: "user" | "bot"; text: string }) {
  return (
    <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-2.5 py-1.5 text-[9px] leading-relaxed ${
          from === "user"
            ? "bg-[#dcf8c6] text-[#111] rounded-br-none"
            : "bg-white text-[#111] rounded-bl-none shadow-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function LinkBioCard({ color, emoji, name, links: ls }: {
  color: string;
  emoji: string;
  name: string;
  links: string[];
}) {
  return (
    <PhoneMockup>
      <div className={`min-h-[220px] ${color} flex flex-col items-center pt-5 px-3 pb-3 gap-2`}>
        <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-2xl shadow">
          {emoji}
        </div>
        <p className="text-white text-[10px] font-bold mt-0.5">{name}</p>
        <div className="w-full flex flex-col gap-1.5 mt-1">
          {ls.map((l) => (
            <div key={l} className="w-full bg-white/20 rounded-full py-1.5 px-3">
              <p className="text-white text-[9px] text-center font-medium">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneMockup>
  );
}

const siteProjects: Project[] = [
  {
    name: "Consultório Dra. Ana Lima",
    desc: "Site para psicóloga com apresentação, serviços e agendamento online.",
    mockup: (
      <DesktopMockup>
        <div className="bg-white min-h-[160px] p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#7c3aed]">Dra. Ana Lima</span>
            <div className="flex gap-2">
              {["Sobre","Serviços","Contato"].map(l => (
                <span key={l} className="text-[7px] text-gray-400">{l}</span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#f3e8ff] to-[#ede9fe] rounded-lg p-3 flex flex-col gap-1.5">
            <div className="w-20 h-2.5 bg-[#7c3aed] rounded-full opacity-80" />
            <div className="w-28 h-1.5 bg-[#a78bfa] rounded-full opacity-50" />
            <div className="w-16 h-5 bg-[#7c3aed] rounded-full mt-1 opacity-90" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {["Ansiedade","Depressão","Relacionamentos"].map(s => (
              <div key={s} className="bg-[#f5f3ff] rounded-md p-1.5 flex flex-col gap-0.5">
                <div className="w-full h-1.5 bg-[#c4b5fd] rounded-full" />
                <div className="w-2/3 h-1 bg-[#ddd6fe] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </DesktopMockup>
    ),
  },
  {
    name: "Clínica OdontoVida",
    desc: "Site para dentista com galeria, equipe e formulário de contato.",
    mockup: (
      <DesktopMockup>
        <div className="bg-white min-h-[160px] p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#0284c7]">OdontoVida</span>
            <div className="flex gap-2">
              {["Equipe","Serviços","Agendar"].map(l => (
                <span key={l} className="text-[7px] text-gray-400">{l}</span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] rounded-lg p-3 flex gap-3 items-center">
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="w-20 h-2.5 bg-[#0284c7] rounded-full opacity-80" />
              <div className="w-24 h-1.5 bg-[#38bdf8] rounded-full opacity-50" />
              <div className="w-14 h-5 bg-[#0284c7] rounded-full mt-1 opacity-90" />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#bae6fd] flex items-center justify-center text-xl">
              🦷
            </div>
          </div>
          <div className="flex gap-1.5">
            {[1,2,3].map(i => (
              <div key={i} className="flex-1 bg-[#f0f9ff] rounded-md p-1.5 flex flex-col gap-0.5">
                <div className="w-full h-1.5 bg-[#7dd3fc] rounded-full" />
                <div className="w-2/3 h-1 bg-[#bae6fd] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </DesktopMockup>
    ),
  },
  {
    name: "Nutri Fernanda Souza",
    desc: "Site para nutricionista com blog de dicas e agendamento via WhatsApp.",
    mockup: (
      <DesktopMockup>
        <div className="bg-white min-h-[160px] p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#16a34a]">Nutri Fernanda</span>
            <div className="flex gap-2">
              {["Sobre","Planos","Blog"].map(l => (
                <span key={l} className="text-[7px] text-gray-400">{l}</span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-lg p-3 flex gap-3 items-center">
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="w-20 h-2.5 bg-[#16a34a] rounded-full opacity-80" />
              <div className="w-24 h-1.5 bg-[#4ade80] rounded-full opacity-50" />
              <div className="w-14 h-5 bg-[#16a34a] rounded-full mt-1 opacity-90" />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#bbf7d0] flex items-center justify-center text-xl">
              🥗
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {["Emagrecimento","Ganho de massa","Gestantes","Crianças"].map(s => (
              <div key={s} className="bg-[#f0fdf4] rounded-md p-1.5 flex flex-col gap-0.5">
                <div className="w-full h-1.5 bg-[#86efac] rounded-full" />
                <div className="w-2/3 h-1 bg-[#bbf7d0] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </DesktopMockup>
    ),
  },
];

const botProjects: Project[] = [
  {
    name: "Bot Consultório Médico",
    desc: "Agendamento automático, confirmação de consultas e informações 24h.",
    mockup: (
      <PhoneMockup>
        <div className="bg-[#ece5dd] min-h-[220px] flex flex-col">
          <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#128c7e] flex items-center justify-center text-xs">🏥</div>
            <div>
              <p className="text-white text-[9px] font-semibold">Clínica São Lucas</p>
              <p className="text-[#9de1da] text-[7px]">online</p>
            </div>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            <ChatBubble from="bot" text="Olá! Sou o assistente da Clínica. Como posso ajudar?" />
            <ChatBubble from="user" text="Quero agendar uma consulta" />
            <ChatBubble from="bot" text="Temos horários na terça e quinta. Qual prefere?" />
            <ChatBubble from="user" text="Quinta-feira" />
            <ChatBubble from="bot" text="Confirmado para quinta as 14h. Ate la!" />
          </div>
        </div>
      </PhoneMockup>
    ),
  },
  {
    name: "Bot Salão de Beleza",
    desc: "Menu de serviços, agendamento e lembretes automáticos no dia anterior.",
    mockup: (
      <PhoneMockup>
        <div className="bg-[#ece5dd] min-h-[220px] flex flex-col">
          <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#128c7e] flex items-center justify-center text-xs">💇</div>
            <div>
              <p className="text-white text-[9px] font-semibold">Studio Bella</p>
              <p className="text-[#9de1da] text-[7px]">online</p>
            </div>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            <ChatBubble from="bot" text="Oi! Bem-vinda ao Studio Bella. O que deseja?" />
            <ChatBubble from="user" text="Ver serviços" />
            <ChatBubble from="bot" text="Temos: Corte R$50, Escova R$70, Manicure R$35." />
            <ChatBubble from="user" text="Escova" />
            <ChatBubble from="bot" text="Agendado! Amanha as 10h. Te mando lembrete!" />
          </div>
        </div>
      </PhoneMockup>
    ),
  },
  {
    name: "Bot Clínica Veterinária",
    desc: "Informações sobre vacinas, agendamento de consultas e plantão 24h.",
    mockup: (
      <PhoneMockup>
        <div className="bg-[#ece5dd] min-h-[220px] flex flex-col">
          <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#128c7e] flex items-center justify-center text-xs">🐾</div>
            <div>
              <p className="text-white text-[9px] font-semibold">VetCare</p>
              <p className="text-[#9de1da] text-[7px]">online</p>
            </div>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            <ChatBubble from="bot" text="Olá! Sou o assistente da VetCare. Como ajudar?" />
            <ChatBubble from="user" text="Quero saber sobre vacinas" />
            <ChatBubble from="bot" text="Temos V8, Antirrábica e Gripe. Deseja agendar?" />
            <ChatBubble from="user" text="Sim, para meu cachorro" />
            <ChatBubble from="bot" text="Horário disponível: sábado as 9h. Confirma?" />
          </div>
        </div>
      </PhoneMockup>
    ),
  },
];

const linkbioProjects: Project[] = [
  {
    name: "Psicóloga Dra. Carla",
    desc: "Página de links com agendamento, Instagram, artigos e contato.",
    mockup: (
      <LinkBioCard
        color="bg-gradient-to-b from-[#7c3aed] to-[#a855f7]"
        emoji="🧠"
        name="Dra. Carla — Psicóloga"
        links={["Agendar Consulta","Instagram","Artigos","WhatsApp"]}
      />
    ),
  },
  {
    name: "Personal Trainer Lucas",
    desc: "Links para treinos, planos, redes sociais e contato direto.",
    mockup: (
      <LinkBioCard
        color="bg-gradient-to-b from-[#ea580c] to-[#f97316]"
        emoji="💪"
        name="Lucas Personal Trainer"
        links={["Ver Planos","Treino Grátis","Instagram","WhatsApp"]}
      />
    ),
  },
  {
    name: "Chef Mariana Cakes",
    desc: "Cardápio, encomendas, galeria de bolos e redes sociais.",
    mockup: (
      <LinkBioCard
        color="bg-gradient-to-b from-[#db2777] to-[#ec4899]"
        emoji="🎂"
        name="Mariana Cakes"
        links={["Ver Cardápio","Fazer Encomenda","Instagram","TikTok"]}
      />
    ),
  },
];

const projectsMap: Record<Category, Project[]> = {
  sites: siteProjects,
  bot: botProjects,
  linkbio: linkbioProjects,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Portfolio() {
  const [open, setOpen] = useState<Category | null>(null);
  const active = open ? categories.find((c) => c.id === open) : null;
  const projects = open ? projectsMap[open] : [];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-4">
            Nossos projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight">
            Portfolio
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-xl mx-auto">
            Clique em uma categoria para ver exemplos de projetos.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(cat.id)}
              className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-[20px] p-7 flex flex-col items-start gap-3 text-left cursor-pointer hover:border-[#2563EB] transition-colors"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              <span className="text-4xl">{cat.icon}</span>
              <div>
                <h3 className="text-[#111111] font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{cat.subtitle}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cat.bg} ${cat.color} ${cat.border} mt-1`}>
                Ver exemplos
              </span>
            </motion.button>
          ))}
        </motion.div>

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
              Quer um projeto assim?
            </h3>
            <p className="text-blue-200 text-base">
              Entre em contato e desenvolvemos a solução ideal para o seu negócio.
            </p>
          </div>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 bg-white text-[#2563EB] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#EFF6FF] transition-colors"
          >
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.35, ease: "easeOut" as const }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[28px] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 bg-[#E5E7EB] rounded-full" />
              </div>
              <div className="px-6 pb-8">
                <div className="flex items-center justify-between py-4 mb-4 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{active.icon}</span>
                    <div>
                      <h3 className="text-[#111111] font-extrabold text-xl">{active.title}</h3>
                      <p className="text-[#6B7280] text-sm">{active.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(null)}
                    className="w-9 h-9 rounded-full bg-[#F8F8F6] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#111111] transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-[16px] p-5 flex flex-col gap-4"
                    >
                      <div className="flex items-center justify-center py-2">
                        {project.mockup}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[#111111] font-bold text-sm">{project.name}</h4>
                        <p className="text-[#6B7280] text-xs leading-relaxed">{project.desc}</p>
                      </div>
                      <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full border ${active.bg} ${active.color} ${active.border}`}>
                        Exemplo
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-[#6B7280] text-sm mb-4">Gostou? Entre em contato e fazemos o seu.</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}