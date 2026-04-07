const WA_PHONE = "5579981423483";

const WA_MESSAGES: Record<string, string> = {
  site: "Olá! Vim pelo site da JCINF e gostaria de criar um site profissional para meu negócio.",
  bot: "Olá! Vim pelo site da JCINF e quero automatizar meu atendimento no WhatsApp com um bot.",
  bio: "Olá! Vim pelo site da JCINF e quero um link na bio profissional para minhas redes.",
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
