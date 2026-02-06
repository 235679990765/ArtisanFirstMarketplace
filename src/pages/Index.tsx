import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ImpactQuote from "@/components/ImpactQuote";
import ForWhom from "@/components/ForWhom";
import CurrentStage from "@/components/CurrentStage";
import Alignment from "@/components/Alignment";
import Festival from "@/components/Festival";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Stats />
        <SectionDivider variant="tribal" />
        <Problem />
        <Solution />
        <ImpactQuote />
        <ForWhom />
        <SectionDivider variant="tribal" />
        <CurrentStage />
        <Alignment />
        <Festival />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
