import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

import { buildPaginatedTableURL } from '@/lib/table';
import useServerTable from '@/hooks/useServerTable';

import WithAuth from '@/components/hoc/WithAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';

import { Activity, PaginatedApiResponse } from '@/types/api';

export default WithAuth(DashboardAdminPage, ['admin']);
function DashboardAdminPage() {
  //#region  //*=========== Table Def ===========
  const { tableState, setTableState } = useServerTable<Omit<Activity, 'token'>>(
    {
      limit: 5,
    },
  );
  const columns: ColumnDef<Omit<Activity, 'token'>>[] = [
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
      id: 'action',
      header: 'Action',
      accessorKey: 'action',
      size: 100,
      minSize: 120,
    },
    {
      id: 'notaId',
      header: 'Nota ID',
      accessorKey: 'notaId',
      size: 100,
      minSize: 120,
    },
    {
      id: 'time',
      header: 'Time',
      accessorKey: 'time',
      cell: (cell) => {
        const date = new Date(cell.getValue() as string);
        return date.toLocaleString('en-GB', { hour12: false });
      },
      size: 100,
      minSize: 120,
    },
  ];
  //#endregion  //*======== Table Def ===========

  //#region  //*=========== Fetch Table ===========
  const url = buildPaginatedTableURL({
    baseUrl: '/activities',
    tableState,
    additionalParam: {
      param: tableState.globalFilter,
    },
  });
  const { data: dataActivity, isLoading } = useQuery<
    PaginatedApiResponse<Omit<Activity, 'token'>[]>,
    Error
  >([url]);
  //#endregion  //*======== Fetch Table ===========

  const meta = {
    total: dataActivity?.total,
    currentPages: dataActivity?.currentPages,
    limit: dataActivity?.limit,
    maxPages: dataActivity?.maxPages,
    from: dataActivity?.from,
    to: dataActivity?.to,
  };
  return (
    <DashboardLayout>
      <Seo title='Activities' />
      <div className='mt-2 space-y-4 px-10 '>
        <div className='flex gap-2 items-center'>
          <Typography variant='h2'>User Activity Data</Typography>
        </div>
        <ServerTable
          columns={columns}
          data={dataActivity?.data ?? []}
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
