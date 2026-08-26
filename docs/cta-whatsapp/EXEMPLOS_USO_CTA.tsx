/**
 * EXEMPLOS DE USO - CTA WHATSAPP
 *
 * Este arquivo demonstra como usar a função utilitária e componentes de CTA
 * em diferentes contextos de sua aplicação.
 */

// ============================================================================
// 1. USO DA FUNÇÃO UTILITÁRIA
// ============================================================================

import { getWhatsAppLink, getServiceLabel } from "@/utils/whatsapp";

// Gerar links diretos (sem componentes)
const siteLink = getWhatsAppLink("site");
const botLink = getWhatsAppLink("bot");
const bioLink = getWhatsAppLink("bio");
const genericLink = getWhatsAppLink("default");

// Render direto em um link
export function DirectLinkExample() {
  return (
    <a href={getWhatsAppLink("site")} target="_blank" rel="noopener noreferrer">
      {getServiceLabel("site")} {/* Renderiza: "Criar um Site" */}
    </a>
  );
}

// ============================================================================
// 2. USO DE COMPONENTES ESPECÍFICOS
// ============================================================================

import {
  SiteButton,
  BotButton,
  BioButton,
  DefaultCTAButton,
} from "@/components/CTA";

// Exemplo: Hero Section
export function HeroWithCTA() {
  return (
    <section className="hero">
      <h1>Bem-vindo à JCINF</h1>
      <div className="flex gap-4">
        <SiteButton size="lg" /> {/* "Criar um Site" */}
        <BotButton size="lg" /> {/* "Automação WhatsApp" */}
      </div>
    </section>
  );
}

// Exemplo: Grid de Serviços
export function ServiceGrid() {
  const services = [
    {
      title: "Sites Profissionais",
      description: "Sites modernos e otimizados",
      icon: "🌐",
      service: "site" as const,
    },
    {
      title: "Bot de WhatsApp",
      description: "Atendimento automatizado",
      icon: "🤖",
      service: "bot" as const,
    },
    {
      title: "Página de Links",
      description: "Link na bio profissional",
      icon: "🔗",
      service: "bio" as const,
    },
  ];

  const renderServiceButton = (service: "site" | "bot" | "bio") => {
    switch (service) {
      case "site":
        return <SiteButton size="sm" />;
      case "bot":
        return <BotButton size="sm" />;
      case "bio":
        return <BioButton size="sm" />;
    }
  };

  return (
    <div className="grid gap-6">
      {services.map((svc) => (
        <div key={svc.title} className="card">
          <span className="text-3xl">{svc.icon}</span>
          <h3>{svc.title}</h3>
          <p>{svc.description}</p>
          {renderServiceButton(svc.service)}
        </div>
      ))}
    </div>
  );
}

// Exemplo: Modalidade por Tamanho
export function SizeExamples() {
  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <span>Pequeno:</span>
        <SiteButton size="sm" />
      </div>

      <div className="space-x-2">
        <span>Médio (padrão):</span>
        <SiteButton size="md" />
      </div>

      <div className="space-x-2">
        <span>Grande:</span>
        <SiteButton size="lg" />
      </div>
    </div>
  );
}

// Exemplo: Variantes de Botão
export function VariantExamples() {
  return (
    <div className="space-y-4">
      <div>
        <span>Primário (Azul):</span>
        <SiteButton size="md" />
      </div>

      <div>
        <span>Secundário (Verde):</span>
        <BotButton size="md" />
      </div>

      <div>
        <span>Genérico:</span>
        <DefaultCTAButton label="Falar no WhatsApp" size="md" />
      </div>
    </div>
  );
}

// Exemplo: CTA na Seção de Contato
export function ContatoSection() {
  return (
    <section className="space-y-6 text-center">
      <h2>Vamos conversar?</h2>
      <p>Escolha como prefere entrar em contato:</p>

      <div className="flex flex-wrap gap-4 justify-center">
        <SiteButton size="lg" />
        <BotButton size="lg" />
        <BioButton size="lg" />
      </div>

      <p className="text-sm text-gray-600">
        Ou envie uma mensagem genérica:
      </p>
      <DefaultCTAButton label="Conversar" size="md" />
    </section>
  );
}

// Exemplo: Footer com CTA
export function FooterWithCTA() {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3>JCINF</h3>
          <p>© 2024 Todos os direitos reservados</p>
        </div>

        <div>
          <DefaultCTAButton label="Falar agora" size="sm" />
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// 3. USO AVANÇADO: COMPONENTE CUSTOMIZADO
// ============================================================================

import CTAButton from "@/components/CTA/CTAButton";

// Você pode criar suas próprias variações reutilizáveis
export function CustomCTASection() {
  return (
    <div className="space-y-4">
      {/* Botão completamente customizado */}
      <CTAButton
        service="site"
        label="Solicitar Orçamento"
        variant="primary"
        size="lg"
        className="w-full" // Clase adicional
      />

      {/* Com className adicional para grid */}
      <div className="grid grid-cols-3 gap-4">
        <CTAButton service="site" label="Site" variant="primary" size="md" />
        <CTAButton service="bot" label="Bot" variant="secondary" size="md" />
        <CTAButton service="bio" label="Bio" variant="white" size="md" />
      </div>
    </div>
  );
}

// ============================================================================
// 4. COMPOSIÇÃO: COMBINE MÚLTIPLOS BOTÕES
// ============================================================================

export function MultipleServicesShowcase() {
  return (
    <section className="space-y-8">
      {/* Call-to-Action Principal */}
      <div className="text-center space-y-4">
        <h2>Escolha o serviço desejado</h2>
        <SiteButton size="lg" />
      </div>

      {/* Call-to-Action Secundária */}
      <div className="bg-blue-50 p-6 rounded-lg text-center space-y-3">
        <h3>Precisa de mais de um serviço?</h3>
        <p>Converse com nossos especialistas</p>
        <DefaultCTAButton label="Falar Agora" size="md" />
      </div>

      {/* Grid de Opções */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center space-y-2">
          <h4>🌐 Precisa de um Site?</h4>
          <SiteButton size="sm" />
        </div>
        <div className="text-center space-y-2">
          <h4>🤖 Quer Automação?</h4>
          <BotButton size="sm" />
        </div>
        <div className="text-center space-y-2">
          <h4>🔗 Quer Link na Bio?</h4>
          <BioButton size="sm" />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. EXEMPLO REAL: INTEGRAÇÃO COMPLETA
// ============================================================================

import { motion } from "framer-motion";

export function CompleteIntegrationExample() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Conteúdo */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            Pronto para digitalizar seu negócio?
          </h2>
          <p className="text-gray-600 text-lg">
            Escolha o serviço que melhor se adequa ao seu projeto e vamos
            começar agora mesmo!
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <SiteButton size="lg" />
          <BotButton size="lg" />
          <BioButton size="lg" />
        </div>

        {/* Suporte */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
            Dúvidas? Converse com nosso time:
          </p>
          <DefaultCTAButton label="Iniciar Conversa" size="md" />
        </div>
      </div>
    </motion.section>
  );
}

// ============================================================================
// RESUME: FORMAS DE USAR
// ============================================================================

/*
1. FUNÇÃO UTILITÁRIA:
   getWhatsAppLink("site") → URL formatada com mensagem
   getServiceLabel("site") → "Criar um Site"

2. COMPONENTES ESPECÍFICOS (mais simples):
   <SiteButton size="lg" />
   <BotButton size="lg" />
   <BioButton size="lg" />
   <DefaultCTAButton label="Custom" size="lg" />

3. COMPONENTE BASE (mais controle):
   <CTAButton
     service="site"
     label="Meu Botão"
     variant="primary"
     size="lg"
     className="custom-class"
   />

4. LINK DIRETO (sem componente):
   <a href={getWhatsAppLink("site")}>Clique aqui</a>
*/
