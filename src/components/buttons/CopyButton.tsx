'use client';

import clsx from 'clsx';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

import { copyTextToClipboard } from '@/lib/utils';

import Button from '@/components/buttons/Button';

interface CopyButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  withLabel?: boolean;
  withInput?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export function CopyButton({
  text,
  withLabel = false,
  withInput = false,
  fullWidth = false,
  className,
  ...rest
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      className={
        `relative align-center flex gap-2 ${fullWidth ? 'w-full' : ''}` +
        className
      }
    >
      {withInput ? (
        <input
          readOnly
          disabled
          value={text}
          type='text'
          className={clsx(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...rest}
        />
      ) : null}
      <Button
        variant='outline'
        className={
          (clsx('flex gap-2 items-center'),
          withInput
            ? 'absolute border-0 right-0 top-1/2 bottom-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-none hover:bg-none active:bg-none focus-visible:bg-none m-0 p-0 min-h-0 md:min-h-0 shadow-none  '
            : 'flex')
        }
        type='button'
        onClick={() => {
          setIsCopied(true);
          copyTextToClipboard(`${text}`);
          setTimeout(() => {
            setIsCopied(false);
          }, 3000);
        }}
      >
        {isCopied ? (
          <Check className='h-4 w-4 shrink-0 p-0 flex: 0,' />
        ) : (
          <Copy className='h-4 w-4 shrink-0 p-0 flex: 0,' />
        )}
        {withLabel ? (
          <>{isCopied ? <span>Tersalin</span> : <span>Salin</span>}</>
        ) : null}
      </Button>
    </div>
  );
}
