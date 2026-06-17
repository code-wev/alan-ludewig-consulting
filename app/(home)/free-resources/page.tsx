import BottomCTA from '@/components/website/home/bottom-cta';
import FreeDownloads from '@/components/website/resources/free-downloads';
import ResourcesHero from '@/components/website/resources/resources-hero';

export default function FreeResourcesPage() {
  return (
    <main className='flex min-h-screen flex-col'>
      <ResourcesHero />
      <FreeDownloads />
      <BottomCTA />
    </main>
  );
}
