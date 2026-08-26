import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import ScrollNavigator from "@/components/ScrollNavigator";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const siteUrl = "https://jcinf.vercel.app";
const title = "JCINF: Sites, Automações e Suporte Técnico em Sergipe";
const description =
  "Criamos sites profissionais, bots de WhatsApp e automações para empresas em Sergipe e remoto, além de suporte técnico completo: formatação, manutenção, upgrade e remoção de vírus. Fale com a JCINF.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JCINF",
  url: siteUrl,
  description,
  telephone: "+5579981423483",
  areaServed: [
    { "@type": "State", name: "Sergipe" },
    { "@type": "Country", name: "Brasil" },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criação de sites profissionais" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bot de WhatsApp" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suporte técnico e manutenção de computadores" } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "JCINF",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col antialiased font-(family-name:--font-jakarta)">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollNavigator />
      </body>
    </html>
  );
}