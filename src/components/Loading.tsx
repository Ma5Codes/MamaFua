import * as React from 'react';
import { CgSpinner } from 'react-icons/cg';

import clsxm from '@/lib/clsxm';

type LoadingProps = {
  label?: string;
  className?: string;
  iconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Loading({
  label,
  className,
  iconClassName,
  ...res
}: LoadingProps) {
  return (
    <div
      className={clsxm(
        'flex min-h-screen flex-col items-center justify-center text-primary-800',
        className,
      )}
      {...res}
    >
      <CgSpinner
        className={clsxm('mb-4 animate-spin text-4xl', iconClassName)}
      />
      <p>{label ? label : 'Loading...'}</p>
    </div>
  );
}
