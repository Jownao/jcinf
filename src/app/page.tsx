import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Portfolio from "@/components/Portfolio";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Contato />
      <Footer />
    </main>
  );
}