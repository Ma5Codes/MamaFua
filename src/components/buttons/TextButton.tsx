import React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum TextButtonSize {
  'small',
  'base',
  'large',
}

export enum TextButtonVariant {
  'basic',
  'primary',
  'danger',
}

export type TextButtonProps = {
  size?: keyof typeof TextButtonSize;
  variant?: keyof typeof TextButtonVariant;
  icon?: IconType;
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconClassName?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
  textClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      children,
      className,
      size = 'base',
      variant = 'primary',
      icon: Icon,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      iconClassName,
      leftIconClassName,
      rightIconClassName,
      textClassName,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        className={clsxm(
          'inline-flex items-center justify-center font-medium group',
          'focus:outline-none focus-visible:ring',
          'transition duration-100',
          'disabled:cursor-not-allowed',
          //#region  //*=========== Size ===========
          size === 'small' && 'text-xs md:text-sm gap-1.5',
          size === 'base' && 'text-sm  md:text-mid gap-2',
          size === 'large' && 'text-mid md:text-base gap-2.5',
          //#endregion  //*======== Size ===========

          //#region  //*=========== Variant ===========
          variant === 'basic' && [
            'text-base-black hover:text-base-dark active:text-base-dark',
            'underline decoration-transparent hover:decoration-base-black',
            'focus-visible:ring-base-secondary',
            'disabled:text-base-icon disabled:decoration-transparent',
          ],
          variant === 'primary' && [
            'text-blue-600 hover:text-blue-700 active:text-blue-800',
            'underline decoration-transparent hover:decoration-blue-500',
            'focus-visible:ring-blue-400',
            'disabled:text-blue-300 disabled:decoration-transparent',
          ],
          variant === 'danger' && [
            'text-red-500 hover:text-red-600 active:text-red-700',
            'underline decoration-transparent hover:decoration-red-400',
            'focus-visible:ring-red-400',
            'disabled:text-red-300 disabled:decoration-transparent',
          ],
          //#endregion  //*======== Variant ===========
          className,
        )}
        {...rest}
      >
        {Icon && <Icon className={clsxm(iconClassName)} />}
        {LeftIcon && !Icon && <LeftIcon className={clsxm(leftIconClassName)} />}
        {!Icon && <div className={clsxm(textClassName)}>{children}</div>}
        {RightIcon && !Icon && (
          <RightIcon className={clsxm(rightIconClassName)} />
        )}
      </button>
    );
  },
);

export default TextButton;
