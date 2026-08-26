"use client";

import CTAButton from "./CTAButton";

export function SiteButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <CTAButton
      service="site"
      label="Criar meu Site"
      variant="animated"
      size={size}
      className={className}
    />
  );
}

export function BotButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <CTAButton
      service="bot"
      label="Automatizar meu WhatsApp"
      variant="primary"
      size={size}
      className={className}
    />
  );
}

export function BioButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <CTAButton
      service="bio"
      label="Criar minha Página"
      variant="primary"
      size={size}
      className={className}
    />
  );
}

export function DefaultCTAButton({
  label = "Iniciar meu projeto",
  service = "default",
  size = "md",
  className = "",
  showIcon = true,
}: {
  label?: string;
  service?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <CTAButton
      service={service}
      label={label}
      variant="primary"
      size={size}
      className={className}
      showIcon={showIcon}
    />
  );
}
