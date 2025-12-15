import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Image from 'next/image';
import * as React from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import Typography from '@/components/typography/Typography';
import ThemeToggle from '@/components/ThemeToggle';

import useAuthStore from '@/store/useAuthStore';

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSidebarOpen }: HeaderProps) {
  const user = useAuthStore.useUser();
  const logout = useAuthStore((state) => state.logout);
  const userNavigation = [{ name: 'Sign out', handleClick: logout }];

  return (
    <div className='sticky top-0 z-10 bg-bg-card border-b border-typo-divider shadow-soft backdrop-blur-sm bg-opacity-80 dark:bg-opacity-90'>
      <div className='dashboard-layout'>
        <div className='flex min-h-[3.5rem] flex-shrink-0 lg:min-h-[4rem] pr-4'>
          <button
            type='button'
            className='border-r border-typo-divider px-4 text-text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden transition-colors hover:text-text-primary'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <HiOutlineMenuAlt2 className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex flex-1 items-center justify-between px-2.5 md:px-0 md:ml-4'>
            <div className='flex flex-1 px-2 md:px-0'>
              <Typography
                variant='b3'
                className='text-text-primary text-mid md:!text-base'
              >
                {format(new Date(), 'PPPP', {
                  locale: enUS,
                })}
              </Typography>
            </div>
            <div className='flex items-center gap-3 md:ml-6'>
              <ThemeToggle />
              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div className='pr-2 sm:pr-0'>
                  <Menu.Button className='-mr-2 flex max-w-[10rem] items-center gap-2 rounded-full bg-bg-card sm:px-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-bg transition-all'>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='h-8 w-8 flex-shrink-0 overflow-hidden rounded-full'
                      src='/images/profile.png'
                      width={256}
                      height={256}
                      alt='avatar'
                    />
                    <div className='hidden min-w-0 flex-1 flex-col items-start sm:flex text-text-primary max-w-full'>
                      <Typography
                        variant='b3'
                        className='truncate w-full font-bold'
                      >
                        {user?.name}
                      </Typography>
                      <Typography variant='s4' className='text-text-secondary'>
                        {user?.role}
                      </Typography>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={React.Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-bg-card py-1 shadow-soft-lg ring-1 ring-typo-outline focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <button
                            onClick={item.handleClick}
                            className={clsx(
                              active ? 'bg-secondary-100 dark:bg-secondary-800' : '',
                              'block w-full px-4 py-2 text-sm text-text-primary text-left transition-colors rounded-lg mx-1',
                            )}
                          >
                            {item.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
