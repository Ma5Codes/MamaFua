import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { List } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Filter from '@/components/table/Filter';
import PaginationControl from '@/components/table/PaginationControl';
import SelectFilter from '@/components/table/SelectFilter';
import TBody from '@/components/table/TBody';
import THead from '@/components/table/THead';
import TOption from '@/components/table/TOption';

export type ServerTableState = {
  globalFilter: string;
  statusFilter: string;
  pagination: PaginationState;
  sorting: SortingState;
};

type SetServerTableState = {
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
};

type ServerTableProps<T extends object> = {
  columns: ColumnDef<T>[];
  data: T[];
  header?: React.ReactNode;
  isLoading: boolean;
  meta:
    | {
        total?: number;
        currentPages?: number;
        limit?: number;
        maxPages?: number;
        from?: number;
        to?: number;
      }
    | undefined;
  tableState: ServerTableState;
  setTableState: SetServerTableState;
  omitSort?: boolean;
  withFilter?: boolean;
  withSelectFilter?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function ServerTable<T extends object>({
  className,
  columns,
  data,
  header: Header,
  isLoading,
  meta,
  tableState,
  setTableState,
  omitSort = false,
  withFilter = false,
  withSelectFilter = false,
  ...rest
}: ServerTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    pageCount: meta?.maxPages,
    state: {
      ...tableState,
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },

    onColumnFiltersChange: setTableState.setColumnFilters,
    onGlobalFilterChange: setTableState.setGlobalFilter,
    onPaginationChange: setTableState.setPagination,
    onSortingChange: setTableState.setSorting,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
  });

  return (
    <div className={clsxm('flex flex-col', className)} {...rest}>
      <div
        className={clsx(
          'flex flex-col items-stretch gap-3 sm:flex-row',
          withFilter ? 'sm:justify-between' : 'sm:justify-end',
        )}
      >
        <div className='flex space-x-4'>
          {withFilter && <Filter table={table} />}
          {withSelectFilter && (
            <SelectFilter columnName='status' table={table} />
          )}
        </div>
        <div className='flex items-center gap-3'>
          {Header}
          <TOption
            icon={<List size={16} />}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 25].map((page) => (
              <option key={page} value={page}>
                {page} Entries
              </option>
            ))}
          </TOption>
        </div>
      </div>
      <div className='-my-2 -mx-4 mt-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300'>
              <THead table={table} omitSort={omitSort} />
              <TBody table={table} isLoading={isLoading} />
            </table>
          </div>
        </div>
      </div>

      <PaginationControl table={table} data={data} className='mt-4' />
    </div>
  );
}
