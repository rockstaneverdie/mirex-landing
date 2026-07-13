import Navigation from './sections/Navigation'
import HeroSection from './sections/HeroSection'
import ClientLogos from './sections/ClientLogos'
import ProblemSection from './sections/ProblemSection'
import SolutionSection from './sections/SolutionSection'
import TimelineSection from './sections/TimelineSection'
import ComparisonSection from './sections/ComparisonSection'
import StatsSection from './sections/StatsSection'
import CasesSection from './sections/CasesSection'
import PackagesSection from './sections/PackagesSection'
import StepsSection from './sections/StepsSection'
import FAQSection from './sections/FAQSection'
import CTASection from './sections/CTASection'
import FooterSection from './sections/FooterSection'

export default function App() {
  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <ClientLogos />
      <ProblemSection />
      <SolutionSection />
      <TimelineSection />
      <ComparisonSection />
      <StatsSection />
      <CasesSection />
      <PackagesSection />
      <StepsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}
