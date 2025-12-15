import * as React from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { MdOutlineLocalLaundryService, MdOutlineLogout } from 'react-icons/md';

import TextButton from '@/components/buttons/TextButton';
import Navigation from '@/components/layout/dashboard/Navigation';
import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

type DesktopNavigationProps = {
  withFooter?: boolean;
};

export default function DesktopNavigation({
  withFooter = false,
}: DesktopNavigationProps) {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div className='hidden md:fixed md:inset-y-0 md:flex md:w-56 md:flex-col'>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className='flex flex-grow flex-col overflow-y-auto border-r border-typo-divider bg-bg-card pt-5 relative'>
        <div className='flex flex-shrink-0 items-center px-4 gap-2'>
          <MdOutlineLocalLaundryService className='text-xl text-primary-500' />
          <Typography variant='s1' className='text-text-primary font-semibold'>
            MamaFua
          </Typography>
        </div>
        <div className='mt-5 flex flex-grow flex-col'>
          <nav className='flex-1 space-y-1 pb-4'>
            <Navigation />
          </nav>
        </div>
        {withFooter && (
          <div className='sticky bottom-0 bg-bg-card inset-x-0 pb-8 pt-4 px-3 flex flex-col items-start gap-1 border-t border-typo-divider'>
            <TextButton
              leftIcon={FiHelpCircle}
              variant='basic'
              size='small'
              className='text-sm md:text-sm p-2 text-text-secondary hover:text-text-primary'
              leftIconClassName='text-lg'
            >
              Help
            </TextButton>
            <TextButton
              onClick={logout}
              leftIcon={MdOutlineLogout}
              variant='danger'
              size='small'
              className='text-sm md:text-sm p-2 text-accent-500 hover:text-accent-600'
              leftIconClassName='text-lg'
            >
              Log out
            </TextButton>
          </div>
        )}
      </div>
    </div>
  );
}
