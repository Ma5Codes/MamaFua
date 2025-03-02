import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table';
import * as React from 'react';

type useServerTableProps<T extends object> = {
  limit?: number;
  sortBy?: {
    key: Extract<keyof T, string>;
    type: 'asc' | 'desc';
  };
};

export default function useServerTable<T extends object>({
  limit = 10,
  sortBy,
}: useServerTableProps<T> = {}) {
  const [globalFilter, setGlobalFilter] = React.useState('');

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  ); // can set
  const [statusFilter, setStatusFilter] = React.useState('');

  const [sorting, setSorting] = React.useState<SortingState>(
    sortBy
      ? [
          {
            id: sortBy.key,
            desc: sortBy.type === 'desc',
          },
        ]
      : [],
  );

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  return {
    tableState: {
      globalFilter,
      statusFilter,
      pagination,
      sorting,
      columnFilters,
    },
    setTableState: {
      setGlobalFilter,
      setStatusFilter,
      setPagination,
      setSorting,
      setColumnFilters,
    },
  };
}
