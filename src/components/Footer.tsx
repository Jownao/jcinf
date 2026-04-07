const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F0F0EE] border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a href="#" className="text-lg font-extrabold tracking-tight text-[#111111]">
          JC<span className="text-[#2563EB]">INF</span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-[#6B7280]">
          © {new Date().getFullYear()} JCINF. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}