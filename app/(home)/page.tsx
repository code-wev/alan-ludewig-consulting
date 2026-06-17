import B2BSolutions from '@/components/website/home/b2b-solutions';
import ComplianceCTA from '@/components/website/home/compliance-cta';
import Hero from '@/components/website/home/hero';
import PlatformOverview from '@/components/website/home/platform-overview';
import TrainingResources from '@/components/website/home/training-resources';
import TrustStrip from '@/components/website/home/trust-strip';
import WhatWeDo from '@/components/website/home/what-we-do';
import WhyChooseRisk from '@/components/website/home/why-choose-risk';

import BottomCTA from '@/components/website/home/bottom-cta';
import Testimonials from '@/components/website/home/testimonials';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Hero />
      <TrustStrip />
      <PlatformOverview />
      <WhyChooseRisk />
      <B2BSolutions />
      <TrainingResources />
      <WhatWeDo />
      <ComplianceCTA />
      <Testimonials />
      <BottomCTA />
    </main>
  );
}
