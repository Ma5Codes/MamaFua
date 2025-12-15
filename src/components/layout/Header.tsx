import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-bg-card border-b border-typo-divider backdrop-blur-sm bg-opacity-80 dark:bg-opacity-90'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='font-bold text-text-primary hover:text-primary-500 transition-colors'
        >
          Home
        </UnstyledLink>
        <nav className='flex items-center gap-4'>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='text-text-secondary hover:text-primary-500 transition-colors'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
