import { Loader2, LucideIcon } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

const ButtonVariant = [
  'primary',
  'secondary',
  'danger',
  'outline',
  'ghost',
  'warning',
] as const;
const ButtonSize = ['sm', 'base', 'lg'] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center justify-center rounded-xl font-medium',
          'focus:outline-none',
          'shadow-soft',
          'transition-all duration-200',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[2.75rem] px-3.5 md:min-h-[3rem]',
              'text-base',
            ],
            size === 'base' && [
              'min-h-[2.25rem] px-3 md:min-h-[2.5rem]',
              'text-sm md:text-base',
            ],
            size === 'sm' && [
              'min-h-[1.75rem] px-2 md:min-h-[2rem]',
              'text-xs md:text-sm',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-500 text-white',
              'border border-primary-600',
              'hover:bg-primary-600 hover:text-white',
              'active:bg-primary-700',
              'disabled:bg-primary-700 disabled:opacity-60',
              'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
              'dark:focus-visible:ring-offset-bg',
            ],
            variant === 'secondary' && [
              'bg-secondary-500 text-white',
              'border border-secondary-600',
              'hover:bg-secondary-600 hover:text-white',
              'active:bg-secondary-700',
              'disabled:bg-secondary-700 disabled:opacity-60',
              'focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
              'dark:focus-visible:ring-offset-bg',
            ],
            variant === 'danger' && [
              'bg-accent-500 text-white',
              'border border-accent-600',
              'hover:bg-accent-600 hover:text-white',
              'active:bg-accent-700',
              'disabled:bg-accent-700 disabled:opacity-60',
              'focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2',
              'dark:focus-visible:ring-offset-bg',
            ],
            variant === 'warning' && [
              'bg-amber-500 text-white',
              'border border-amber-500',
              'hover:bg-amber-600 hover:text-white',
              'active:bg-amber-700',
              'disabled:bg-amber-700 disabled:opacity-60',
              'focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2',
              'dark:focus-visible:ring-offset-bg',
            ],
            variant === 'outline' && [
              'text-text-primary',
              'border border-typo-outline',
              'bg-transparent',
              'hover:bg-bg-card',
              'dark:hover:bg-secondary-800',
              'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
              'dark:focus-visible:ring-offset-bg',
              'active:bg-typo-divider',
              'disabled:bg-typo-divider disabled:opacity-60',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'bg-transparent',
              'hover:bg-primary-50',
              'dark:hover:bg-secondary-800',
              'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
              'dark:focus-visible:ring-offset-bg',
              'active:bg-primary-100',
              'dark:active:bg-secondary-700',
              'disabled:bg-primary-100 dark:disabled:bg-secondary-800 disabled:opacity-60',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': [
                  'primary',
                  'secondary',
                  'danger',
                  'warning',
                ].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              },
            )}
          >
            <Loader2 size={18} className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'lg' && 'mr-3',
              size === 'base' && 'mr-2',
              size === 'sm' && 'mr-1',
            ])}
          >
            <LeftIcon
              size='1em'
              className={clsxm('text-base', leftIconClassName)}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsxm([
              size === 'lg' && 'ml-3',
              size === 'base' && 'ml-2',
              size === 'sm' && 'ml-1',
            ])}
          >
            <RightIcon
              size='1em'
              className={clsxm('text-base', rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  },
);

export default Button;
