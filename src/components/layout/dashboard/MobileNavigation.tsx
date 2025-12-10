import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';
import { MdOutlineLogout } from 'react-icons/md';

import TextButton from '@/components/buttons/TextButton';
import Navigation from '@/components/layout/dashboard/Navigation';
import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

type MobileNavigationProps = {
  sidebarOpen: boolean;
  withFooter?: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavigation({
  sidebarOpen,
  withFooter = false,
  setSidebarOpen,
}: MobileNavigationProps) {
  const logout = useAuthStore((state) => state.logout);
  return (
    <Transition.Root show={sidebarOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-40 flex md:hidden'
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={React.Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 -mr-12 pt-2'>
                <button
                  type='button'
                  className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  <HiOutlineX
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </Transition.Child>
            <div className='flex flex-shrink-0 items-center px-6'>
              <Typography variant='s1'>⚡️ Dashboard</Typography>
            </div>
            <div className='mt-5 h-0 flex-1 overflow-y-auto'>
              <nav className='space-y-1 px-2'>
                <Navigation />
              </nav>
            </div>
            {withFooter && (
              <div className='sticky bottom-0 bg-white inset-x-0 py-6 px-4 flex flex-col items-start gap-1'>
                <TextButton
                  leftIcon={FiHelpCircle}
                  variant='basic'
                  size='small'
                  className='text-sm md:text-sm p-2 w-full justify-start'
                  leftIconClassName='text-lg'
                >
                  Help
                </TextButton>
                <TextButton
                  onClick={logout}
                  leftIcon={MdOutlineLogout}
                  variant='danger'
                  size='small'
                  className='text-sm md:text-sm p-2 w-full justify-start'
                  leftIconClassName='text-lg'
                >
                  Log out
                </TextButton>
              </div>
            )}
          </div>
        </Transition.Child>
        <div className='w-14 flex-shrink-0' aria-hidden='true'>
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
