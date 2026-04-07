"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const WA_LINK =
  "https://wa.me/5579981423483?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="text-xl font-extrabold tracking-tight text-[#111111]">
            JC<span className="text-[#2563EB]">INF</span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6B7280] hover:text-[#111111] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Fale no WhatsApp
          </a>

          {/* Hamburguer mobile */}
          <button
            className="md:hidden text-[#111111]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* Drawer mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-8 gap-6 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-[#111111] border-b border-[#E5E7EB] pb-4"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center bg-[#2563EB] text-white text-base font-semibold px-6 py-3 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Fale no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}