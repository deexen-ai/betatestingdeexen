import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import IDEShowcase from "@/components/IDEShowcase";
import BetaProgram from "@/components/BetaProgram";
import Roadmap from "@/components/Roadmap";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="app-full-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <IDEShowcase />
        <BetaProgram />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
