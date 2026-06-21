import { FormAndAssessmentProgress } from '@/components/dashboard/form-and-assessment-progress';
import { MembershipSummary } from '@/components/dashboard/membership-summary';
import { NeedHelp } from '@/components/dashboard/need-help';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { RequiredActions } from '@/components/dashboard/required-actions';
import { UsageAndCredits } from '@/components/dashboard/usage-and-credits';
import { WelcomeBanner } from '@/components/dashboard/welcome-banner';

export default function DashboardPage() {
  return (
    <div className='flex flex-col w-full mx-auto gap-8 font-sans'>
      <WelcomeBanner />
      <MembershipSummary />
      <RequiredActions />
      <QuickActions />
      <UsageAndCredits />
      <FormAndAssessmentProgress />
      <RecentActivity />
      <NeedHelp />
    </div>
  );
}
