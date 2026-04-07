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
      label="Criar um Site"
      variant="primary"
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
      label="Automação WhatsApp"
      variant="secondary"
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
      label="Link na Bio"
      variant="primary"
      size={size}
      className={className}
    />
  );
}

export function DefaultCTAButton({
  label = "Falar no WhatsApp",
  size = "md",
  className = "",
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <CTAButton
      service="default"
      label={label}
      variant="primary"
      size={size}
      className={className}
    />
  );
}
