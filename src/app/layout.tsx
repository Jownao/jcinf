import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "JCINF — Sites, Bots e Automações para seu Negócio",
  description: "Criamos sites profissionais, bots de WhatsApp e automações para pequenas empresas. Fale com a JCINF e digitalize seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable}`}>
      <body className="min-h-full flex flex-col antialiased font-(family-name:--font-jakarta)">
        {children}
      </body>
    </html>
  );
}