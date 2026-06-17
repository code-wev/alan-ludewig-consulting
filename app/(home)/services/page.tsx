import BottomCTA from '@/components/website/home/bottom-cta';

import WhatWeDo from '@/components/website/home/what-we-do';
import ServiceFeatures from '@/components/website/service/features';
import ServiceHero from '@/components/website/service/hero';
import MembershipOptions from '@/components/website/service/membership-options';
import RetainedHighlight from '@/components/website/service/retained-highlight';
import ServiceSteps from '@/components/website/service/steps';

export default function ServicesPage() {
  return (
    <main className='flex min-h-screen flex-col'>
      <ServiceHero />
      <ServiceSteps />
      <RetainedHighlight />
      <ServiceFeatures />
      <MembershipOptions />
      <WhatWeDo />
      <BottomCTA />
    </main>
  );
}
