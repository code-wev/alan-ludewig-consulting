import BottomCTA from '@/components/website/home/bottom-cta';
import CompareTable from '@/components/website/retained/compare-table';
import DocumentLibraryHighlight from '@/components/website/retained/document-library';
import RetainedFAQ from '@/components/website/retained/faq';
import RetainedFeatures from '@/components/website/retained/features';
import RetainedHero from '@/components/website/retained/hero';
import RAMSHighlight from '@/components/website/retained/rams-highlight';
import SiteVisitsHighlight from '@/components/website/retained/site-visits';
import RetainedSteps from '@/components/website/retained/steps';
import MembershipOptions from '@/components/website/service/membership-options';

export default function RetainedServicesPage() {
  return (
    <main className='flex min-h-screen flex-col'>
      <RetainedHero />
      <RetainedSteps />
      <RetainedFeatures />
      <RAMSHighlight />
      <DocumentLibraryHighlight />
      <SiteVisitsHighlight />
      <MembershipOptions />
      <CompareTable />
      <RetainedFAQ />
      <BottomCTA />
    </main>
  );
}
