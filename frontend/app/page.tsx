import { Hero } from "../components/home/Hero";
import { TrustStrip } from "../components/home/TrustStrip";
import { PlatformOverview } from "../components/home/PlatformOverview";
import { WhyChoose } from "../components/home/WhyChoose";
import { BusinessSolutions } from "../components/home/BusinessSolutions";
import { TrainingResources } from "../components/home/TrainingResources";
import { ServicesOverview } from "../components/home/ServicesOverview";
import { ProblemSolutions } from "../components/home/ProblemSolutions";
import { CTASection } from "../components/home/CTASection";
import { Testimonials } from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <PlatformOverview />
      <WhyChoose />
      <BusinessSolutions />
      <TrainingResources />
      <ServicesOverview />
      <ProblemSolutions />
      <CTASection />
      <Testimonials />
    </div>
  );
}
