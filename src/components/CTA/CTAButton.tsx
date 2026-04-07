"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils/whatsapp";

interface CTAButtonProps {
  service: "site" | "bot" | "bio" | "default";
  label: string;
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  primary:
    "bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-md shadow-blue-200",
  secondary:
    "bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-md shadow-green-200",
  white:
    "bg-white hover:bg-[#F8F8F6] text-[#111111] border border-[#E5E7EB] hover:border-[#2563EB]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs font-semibold",
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-8 py-3.5 text-base font-semibold",
};

export default function CTAButton({
  service,
  label,
  variant = "primary",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const waLink = getWhatsAppLink(service);

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-colors ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${className}`}
    >
      <span>{label}</span>
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.5 14.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51H8c-.17 0-.45.07-.69.35-.24.27-.92.9-.92 2.2s.94 2.55 1.07 2.72c.13.17 1.85 2.83 4.5 3.97 1.63.7 2.27.76 3.09.64.5-.07 1.53-.63 1.74-1.24.22-.61.22-1.13.15-1.24-.07-.11-.27-.18-.57-.33z" />
        <path d="M12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.22-1.57A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22a9.94 9.94 0 0 1-5.06-1.38l-.36-.22-3.73.94.99-3.62-.24-.37A9.94 9.94 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10z" />
      </svg>
    </motion.a>
  );
}
