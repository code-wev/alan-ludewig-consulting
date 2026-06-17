import BottomCTA from '@/components/website/home/bottom-cta';
import NewsGrid from '@/components/website/news/news-grid';
import NewsHero from '@/components/website/news/news-hero';

export default function NewsUpdatesPage() {
  return (
    <main className='flex min-h-screen flex-col'>
      <NewsHero />
      <NewsGrid />
      <BottomCTA />
    </main>
  );
}
