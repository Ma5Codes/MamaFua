import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { AccessibilityIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import * as React from 'react';
import { IconType } from 'react-icons';
import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { TiDocument } from 'react-icons/ti';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import useAuthStore from '@/store/useAuthStore';

export type Navigation = {
  name: string;
  href: string;
  icon: IconType;
  /**
   * Use this when the route is also used as a nested route
   * @example Use exactMatch for '/dashboard' to avoid both navigation links active when visiting '/dashboard/edit'
   */
  exactMatch?: boolean;
  children?: Navigation[];
};

type Navigations = Navigation[][];

type NavigationProps = React.ComponentPropsWithoutRef<'nav'>;

const navigations: Navigations = [
  [
    {
      name: 'Home',
      href: '/dashboard',
      icon: AiOutlineHome,
    },

    {
      name: 'Document',
      href: '/dashboard',
      icon: TiDocument,
    },
    {
      name: 'Search',
      href: '/dashboard/search',
      icon: FiSearch,
    },
    {
      name: 'Inbox',
      href: '/dashboard/inbox',
      icon: MdOutlineForwardToInbox,
    },
  ],
  [
    {
      name: 'Home',
      href: '/dashboard',
      icon: AiOutlineHome,
    },

    {
      name: 'Customers',
      href: '/dashboard/admin',
      icon: AiOutlineUsergroupAdd,
    },
    {
      name: 'Transactions',
      href: '/dashboard/transactions',
      icon: AiOutlineMoneyCollect,
    },
    {
      name: 'Activities',
      href: '/dashboard/activities',
      icon: AccessibilityIcon as IconType,
    },
  ],
];

export default function Navigation({ className, ...rest }: NavigationProps) {
  const user = useAuthStore.useUser();
  const roles = user?.role === 'user' ? 0 : 1;
  return (
    <nav className={clsxm('px-2 md:px-3', className)} {...rest}>
      <div className='space-y-1.5'>
        {navigations[roles].map((nav) => {
          return nav.children ? (
            <NestedNavigation key={nav.name} navigation={nav} />
          ) : (
            <NavigationLink key={nav.name} navigation={nav} />
          );
        })}
      </div>
    </nav>
  );
}

function NestedNavigation({
  navigation: navChildren,
}: {
  navigation: Navigation;
}) {
  const router = useRouter();
  // Recursively check if any children is active
  function checkActive(nav?: Navigation[]): boolean {
    if (!nav) return false;

    const currentRoute: string = router.pathname;

    return nav.some((n) => {
      if (!n.children) {
        const isActive = n.exactMatch
          ? currentRoute === n.href
          : currentRoute.startsWith(n.href);

        return isActive;
      }

      return checkActive(n.children);
    });
  }
  return (
    <Disclosure as='div' defaultOpen={checkActive(navChildren.children)}>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={clsx(
              'hover:bg-primary-500 hover:text-white',
              'text-typo-primary',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500  focus-visible:ring-offset-primary-500',
              'transition duration-100',
            )}
          >
            <navChildren.icon
              className={clsx(
                'mr-1.5 flex-shrink-0',
                'text-lg text-base-dark group-hover:text-white',
                open && 'mt-[1px] self-start',
              )}
              aria-hidden='true'
            />
            <span className={clsx('text-left', !open && 'truncate')}>
              {navChildren.name}
            </span>
            <FiChevronDown
              className={clsx(
                'flex-shrink-0 transition-transform duration-150',
                'ml-auto text-lg text-typo-icons group-hover:text-white',
                open && 'mt-[1px] rotate-180 self-start',
              )}
            />
          </Disclosure.Button>
          <Transition
            className='transition-all duration-300'
            enterFrom='opacity-0 max-h-0'
            enterTo='opacity-100 max-h-96'
            leaveFrom='opacity-100 max-h-96'
            leaveTo='opacity-0 max-h-0'
          >
            <Disclosure.Panel className='ml-5 mt-0.5'>
              {navChildren.children?.map((nav) =>
                nav.children ? (
                  <NestedNavigation key={nav.name} navigation={nav} />
                ) : (
                  <NavigationLink key={nav.name} navigation={nav} />
                ),
              )}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

function NavigationLink({
  navigation,
  className,
}: {
  navigation: Navigation;
  className?: string;
}) {
  const router = useRouter();
  const currentRoute: string = router.pathname;

  const isActive = navigation.exactMatch
    ? currentRoute === navigation.href
    : currentRoute === navigation.href;

  return (
    <UnstyledLink
      href={navigation.href}
      className={clsxm(
        isActive
          ? 'bg-primary-600 text-white'
          : 'text-base-dark hover:bg-primary-100 hover:text-primary-600',
        'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500  focus-visible:ring-offset-primary-500',
        'transition duration-100',
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <navigation.icon
        className={clsx(
          'mr-1.5 flex-shrink-0',
          'text-lg',
          isActive
            ? 'text-white group-hover:text-white'
            : 'text-typo-secondary group-hover:text-primary-600',
        )}
        aria-hidden='true'
      />
      <span className='truncate'>{navigation.name}</span>
    </UnstyledLink>
  );
}
