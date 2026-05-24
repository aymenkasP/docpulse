import TopNavBar from '../components/TopNavBar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import HowWorksSection from '../components/HowWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import IntegrationsSection from '../components/IntegrationsSection';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <HeroSection />
      <ProblemSection />
      <HowWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PricingSection />
      <FinalCTA />
      <Footer />

    </div>
  );
}
