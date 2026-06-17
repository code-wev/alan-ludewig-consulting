import BottomCTA from '@/components/website/home/bottom-cta';
import CourseList from '@/components/website/training/course-list';
import TrainingHero from '@/components/website/training/training-hero';

export default function TrainingPage() {
  return (
    <main className='flex min-h-screen flex-col'>
      <TrainingHero />
      <CourseList />
      <BottomCTA />
    </main>
  );
}
