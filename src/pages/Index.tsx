import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Vision from '../components/Vision'
import ForWhom from '../components/ForWhom'
import CurrentStage from '../components/CurrentStage'
import Alignment from '../components/Alignment'
import Festival from '../components/Festival'
import WhyMatters from '../components/WhyMatters'
import Contact from '../components/Contact'
import Stats from '../components/Stats'
import Showcase from '../components/Showcase'
// import ImpactQuote from '../components/ImpactQuote'
import SectionDivider from '../components/SectionDivider'
// import ArtisanStories from '../components/features/ArtisanStories'
// import CraftCategories from '../components/features/CraftCategories'
// import HowItWorks from '../components/features/HowItWorks'
// import ValueProposition from '../components/features/ValueProposition'
// import Testimonials from '../components/features/Testimonials'
// import PilotRegions from '../components/features/PilotRegions'

export default function Index() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Hero />
      <SectionDivider />
      
      <Stats />
      <Showcase />
      <SectionDivider />
      
      <Problem />
      <SectionDivider />
      
      <Solution />
      <SectionDivider />
      
      <Vision />
      <SectionDivider />
      
      <ForWhom />
      <SectionDivider />
      
      <CurrentStage />
      <SectionDivider />
    
      
      <Alignment />
      <SectionDivider />
      
      {/* <Festival />
      <SectionDivider /> */}
      
      <WhyMatters />
      <SectionDivider />
      
      <Contact />
    </div>
  )
}