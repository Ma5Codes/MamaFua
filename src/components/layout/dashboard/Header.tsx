import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Image from 'next/image';
import * as React from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSidebarOpen }: HeaderProps) {
  const user = useAuthStore.useUser();
  const logout = useAuthStore((state) => state.logout);
  const userNavigation = [{ name: 'Sign out', handleClick: logout }];

  return (
    <div className='sticky top-0 z-10 bg-white shadow'>
      <div className='dashboard-layout'>
        <div className='flex min-h-[3.5rem] flex-shrink-0 lg:min-h-[4rem] pr-4'>
          <button
            type='button'
            className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <HiOutlineMenuAlt2 className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex flex-1 items-center justify-between px-2.5 md:px-0 md:ml-4'>
            <div className='flex flex-1 px-2 md:px-0'>
              <Typography
                variant='b3'
                className='text-base-dark text-mid md:!text-base'
              >
                {format(new Date(), 'PPPP', {
                  locale: id,
                })}
              </Typography>
            </div>
            <div className='flex items-center md:ml-6'>
              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div className='pr-2 sm:pr-0'>
                  <Menu.Button className='-mr-2 flex max-w-[10rem] items-center gap-2 rounded-full bg-white sm:px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='h-8 w-8 flex-shrink-0 overflow-hidden rounded-full'
                      src='/images/profile.png'
                      width={256}
                      height={256}
                      alt='avatar'
                    />
                    <div className='hidden min-w-0 flex-1 flex-col items-start sm:flex text-base-dark max-w-full'>
                      <Typography
                        variant='b3'
                        className='truncate w-full font-bold'
                      >
                        {user?.name}
                      </Typography>
                      <Typography variant='s4' className='text-base-secondary'>
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
                  <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <button
                            onClick={item.handleClick}
                            className={clsx(
                              active ? 'bg-gray-100' : '',
                              'block w-full px-4 py-2 text-sm text-gray-700',
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
