import clsx from 'clsx';
import { useState } from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';
import DesktopNavigation from '@/components/layout/dashboard/DesktopNavigation';
import Header from '@/components/layout/dashboard/Header';
import MobileNavigation from '@/components/layout/dashboard/MobileNavigation';

import useDialogStore from '@/store/useDialogStore';

type DashboardLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function DashboardLayout({
  children,
  className,
}: DashboardLayoutProps) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileNavigation
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        withFooter
      />

      {/* Static sidebar for desktop */}
      <DesktopNavigation withFooter />

      <div className='flex flex-1 flex-col md:pl-56'>
        <Header setSidebarOpen={setSidebarOpen} />

        <main className={clsx('min-h-main flex-1', className)}>
          <div className='py-6'>{children}</div>
        </main>
      </div>

      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
    </div>
  );
}
