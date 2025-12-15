import { Moon, Sun } from 'lucide-react';
import * as React from 'react';

import { useTheme } from '@/contexts/ThemeContext';

import clsxm from '@/lib/clsxm';
import Button from './buttons/Button';

type ThemeToggleProps = {
  className?: string;
  showLabel?: boolean;
};

export default function ThemeToggle({
  className,
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={toggleTheme}
      className={clsxm('gap-2', className)}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <>
          <Moon className='h-4 w-4' />
          {showLabel && <span>Dark Mode</span>}
        </>
      ) : (
        <>
          <Sun className='h-4 w-4' />
          {showLabel && <span>Light Mode</span>}
        </>
      )}
    </Button>
  );
}

