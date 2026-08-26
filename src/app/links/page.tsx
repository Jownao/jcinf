import type { Metadata } from "next";
import Image from "next/image";
import { Globe, AtSign, Camera, Database, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Johnny C: Links",
  description: "Data Engineer e Developer, por trás da JCINF. Todos os meus links num só lugar.",
};

const links = [
  {
    icon: Globe,
    label: "JCINF",
    desc: "Sites, automações e suporte técnico",
    href: "https://jcinf.vercel.app",
    highlight: true,
  },
  {
    icon: AtSign,
    label: "Instagram",
    desc: "@jownao",
    href: "https://instagram.com/jownao",
  },
  {
    icon: Camera,
    label: "Fotografia",
    desc: "@johnnynlens",
    href: "https://instagram.com/johnnynlens",
  },
  {
    icon: Database,
    label: "Portfólio Data Engineer",
    desc: "Projetos e habilidades",
    href: "https://jownao.github.io/johnny-costa-data-engineer/",
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#111111] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[420px] flex flex-col items-center">

        {/* Logo JCINF */}
        <div className="text-sm font-extrabold tracking-tight mb-8">
          <span className="text-white">JC</span>
          <span className="text-[#2563EB]">INF</span>
        </div>

        {/* Avatar */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#2563EB]">
          <Image
            src="/linktree.jpeg"
            alt="Johnny C"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>

        {/* Nome e tagline */}
        <h1 className="mt-5 text-2xl font-extrabold text-white tracking-tight">
          Johnny C
        </h1>
        <p className="mt-1 text-sm font-medium text-[#9CA3AF]">
          Data Engineer e Developer
        </p>
        <p className="mt-2 text-sm text-center text-[#9CA3AF] leading-relaxed max-w-[320px]">
          Por trás da JCINF: sites, automações e suporte técnico
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-3 mt-9">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-2xl p-4 border transition-colors ${
                  link.highlight
                    ? "bg-[#2563EB] border-[#2563EB] hover:bg-[#1d4ed8]"
                    : "bg-[#1A1A1A] border-white/[0.08] hover:border-[#2563EB]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    link.highlight ? "bg-white/15" : "bg-white/5"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      link.highlight ? "text-white" : "text-[#2563EB]"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">
                    {link.label}
                  </p>
                  <p
                    className={`text-xs truncate ${
                      link.highlight ? "text-blue-100" : "text-[#9CA3AF]"
                    }`}
                  >
                    {link.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    link.highlight ? "text-white/70" : "text-[#6B7280]"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-[#6B7280]">
          Página de links feita pela JCINF
        </p>
      </div>
    </main>
  );
}
