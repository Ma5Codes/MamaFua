import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { Eye, PlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { buildPaginatedTableURL } from '@/lib/table';
import useServerTable from '@/hooks/useServerTable';

import IconButton from '@/components/buttons/IconButton';
import WithAuth from '@/components/hoc/WithAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';

import { Customer, PaginatedApiResponse } from '@/types/api';

export default WithAuth(DashboardAdminPage, ['admin']);
function DashboardAdminPage() {
  const router = useRouter();

  //#region  //*=========== Table Def ===========
  const { tableState, setTableState } = useServerTable<Omit<Customer, 'token'>>(
    {
      limit: 5,
    },
  );
  const columns: ColumnDef<Omit<Customer, 'token'>>[] = [
    {
      id: 'numbering',
      header: 'No',
      cell: (cell) => (
        <div className='text-center'>
          {tableState.pagination.pageSize * tableState.pagination.pageIndex +
            cell.row.index +
            1}
        </div>
      ),
      size: 10,
      maxSize: 8,
    },
    {
      id: 'name',
      header: 'Name',
      accessorKey: 'name',
      size: 100,
      minSize: 120,
    },
    {
      id: 'address',
      header: 'Alamat',
      accessorKey: 'address',
      size: 120,
      minSize: 140,
    },
    {
      id: 'noTelp',
      header: 'Phone Number',
      accessorKey: 'noTelp',
      size: 75,
      minSize: 120,
    },
    {
      header: () => <div className='grow flex justify-center'>Action</div>,
      enableSorting: false,
      accessorKey: 'id',
      id: 'Action',
      cell: (cell) => (
        <div className='flex justify-center'>
          <ButtonLink
            href={`/dashboard/admin/${cell.row.original.id}`}
            size='sm'
            variant='outline'
            rightIcon={Eye}
          >
            Edit
          </ButtonLink>
        </div>
      ),
      size: 20,
      enableResizing: true,
    },
  ];
  //#endregion  //*======== Table Def ===========

  //#region  //*=========== Fetch Table ===========
  const url = buildPaginatedTableURL({
    baseUrl: '/customer',
    tableState,
    additionalParam: {
      param: tableState.globalFilter,
    },
  });
  const { data: dataUser, isLoading } = useQuery<
    PaginatedApiResponse<Omit<Customer, 'token'>[]>,
    Error
  >([url]);
  //#endregion  //*======== Fetch Table ===========

  const meta = {
    total: dataUser?.total,
    currentPages: dataUser?.currentPages,
    limit: dataUser?.limit,
    maxPages: dataUser?.maxPages,
    from: dataUser?.from,
    to: dataUser?.to,
  };
  return (
    <DashboardLayout>
      <Seo title='Admin' />
      <div className='mt-2 space-y-4 px-10'>
        <div className='flex gap-2 items-center'>
          <Typography variant='h2'>Data Customer</Typography>
          <IconButton
            size='sm'
            icon={PlusIcon}
            onClick={() => router.replace('/dashboard/admin/create')}
          />
        </div>
        <ServerTable
          columns={columns}
          data={dataUser?.data ?? []}
          meta={meta}
          tableState={tableState}
          setTableState={setTableState}
          withFilter
          isLoading={isLoading}
          className='mt-8'
        />
      </div>
    </DashboardLayout>
  );
}
