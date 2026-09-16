const WA_PHONE = "5579981423483";

const WA_MESSAGES: Record<string, string> = {
  site: "Olá! Vim pelo site da JCINF e gostaria de criar um site profissional para meu negócio.",
  bot: "Olá! Vim pelo site da JCINF e quero automatizar meu atendimento no WhatsApp com um bot.",
  bio: "Olá! Vim pelo site da JCINF e quero um link na bio profissional para minhas redes.",
  formatacao:
    "Olá! Vim pelo site da JCINF e preciso formatar/instalar o Windows no meu PC.",
  virus:
    "Olá! Vim pelo site da JCINF e preciso remover vírus/malware do meu PC.",
  programas:
    "Olá! Vim pelo site da JCINF e preciso instalar programas e drivers no meu PC.",
  backup:
    "Olá! Vim pelo site da JCINF e preciso fazer backup dos meus arquivos.",
  "suporte-remoto":
    "Olá! Vim pelo site da JCINF e preciso de suporte remoto (AnyDesk) pro meu PC.",
  limpeza:
    "Olá! Vim pelo site da JCINF e quero fazer limpeza interna e troca de pasta térmica do meu PC.",
  ssd: "Olá! Vim pelo site da JCINF e quero trocar meu HD por SSD.",
  ram: "Olá! Vim pelo site da JCINF e quero fazer upgrade de memória RAM do meu PC.",
  "plano-pagina-unica":
    "Olá! Vim pelo site da JCINF e tenho interesse no plano Página Única. Pode me passar os valores?",
  "plano-institucional":
    "Olá! Vim pelo site da JCINF e tenho interesse no plano Site Institucional. Pode me passar os valores?",
  "plano-sistema":
    "Olá! Vim pelo site da JCINF e tenho interesse no plano Site + Sistema. Pode me passar os valores?",
  default:
    "Olá! Vim pelo site da JCINF e gostaria de saber mais sobre os serviços.",
};

export function getWhatsAppLink(service: string = "default"): string {
  const message = WA_MESSAGES[service] || WA_MESSAGES.default;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WA_PHONE}?text=${encodedMessage}`;
}

export function getServiceLabel(service: string): string {
  const labels: Record<string, string> = {
    site: "Criar um Site",
    bot: "Automação WhatsApp",
    bio: "Link na Bio",
  };
  return labels[service] || "Conversar";
}
