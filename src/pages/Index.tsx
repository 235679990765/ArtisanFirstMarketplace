import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Vision from "@/components/Vision";
import Solution from "@/components/Solution";
import ForWhom from "@/components/ForWhom";
import CurrentStage from "@/components/CurrentStage";
import Alignment from "@/components/Alignment";
import Festival from "@/components/Festival";
import WhyMatters from "@/components/WhyMatters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <div id="vision">
          <Vision />
        </div>
        <div id="solution">
          <Solution />
        </div>
        <ForWhom />
        <CurrentStage />
        <Alignment />
        <Festival />
        <WhyMatters />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
