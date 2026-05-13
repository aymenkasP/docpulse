import TopNavBar from '../components/TopNavBar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import HowWorksSection from '../components/HowWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import IntegrationsSection from '../components/IntegrationsSection';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TopNavBar Component */}
      <TopNavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* How It Works Section */}
      <HowWorksSection />

      {/* Key Features Section */}
      <FeaturesSection />

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer Component */}

    </div>
  );
}
