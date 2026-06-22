import { CompanyProfile } from '@/components/settings/company-profile';
import { DefaultRamsSettings } from '@/components/settings/default-rams-settings';
import { NotificationSettings } from '@/components/settings/notification-settings';
import { PasswordSecurity } from '@/components/settings/password-security';
import { ProfileInformation } from '@/components/settings/profile-information';
import { ChevronRight } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className='flex flex-col w-full mx-auto gap-8'>
      {/* Header */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 text-sm text-[#5A6886]'>
          <span>Dashboard</span>
          <ChevronRight className='w-4 h-4' />
          <span className='text-[#132651] font-medium'>Account Settings</span>
        </div>
        <div className='flex flex-col mt-2'>
          <h1 className='text-3xl font-bold text-[#132651]'>Account Settings</h1>
          <p className='text-base text-[#5A6886] mt-2'>
            Manage your profile information, preferences, and security settings.
          </p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className='flex flex-col gap-8'>
        <ProfileInformation />
        <CompanyProfile />
        <NotificationSettings />
        <DefaultRamsSettings />
        <PasswordSecurity />
      </div>
    </div>
  );
}
