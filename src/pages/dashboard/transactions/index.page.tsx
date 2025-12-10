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
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import { getLabelService } from '@/constant/services';

import { PaginatedApiResponse, Transaction } from '@/types/api';

export default WithAuth(TransactionsPage, ['admin']);
function TransactionsPage() {
  const router = useRouter();
  const { tableState, setTableState } = useServerTable<Transaction>({
    sortBy: { key: 'id', type: 'desc' },
  });

  const columns = React.useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        accessorKey: 'id',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },

      {
        accessorKey: 'notaId',
        header: 'No. Nota',
      },
      {
        accessorKey: 'service',
        header: 'Layanan',
        cell: (props) => {
          const service = props.getValue() as string;
          return <Tag color='secondary'>{getLabelService(service)}</Tag>;
        },
      },
      {
        accessorKey: 'weight',
        header: 'Berat(kg)',
        cell: (props) => {
          const weight = props.getValue() as string;
          return `${weight}`;
        },
      },
      {
        accessorKey: 'price',
        header: 'harga',
        cell: (props) => {
          const price = props.getValue() as string;
          return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
          }).format(Number(price));
        },
      },
      {
        accessorKey: 'dateIn',
        header: 'Date In',
        cell: (props) => {
          const date = new Date(props.getValue() as string);
          return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });
        },
      },

      {
        accessorKey: 'dateDone',
        header: 'Tanggal Selesai',
        cell: (props) => {
          const date = new Date(props.getValue() as string);
          return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });
        },
      },
      {
        accessorKey: 'dateOut',
        header: 'Date Out',
        cell: (props) => {
          const date = new Date(props.getValue() as string);
          if (!date || props.getValue() == null) return 'Not Picked Up';
          return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });
        },
      },
      {
        accessorKey: 'status',
        header: 'Payment Status',
        cell: (props) => (
          <Tag
            color={
              (props.getValue() as string) === 'lunas'
                ? 'success'
                : (props.getValue() as string) === 'belum-bayar'
                  ? 'danger'
                  : 'primary'
            }
          >
            {props.getValue() as string}
          </Tag>
        ),
      },
      {
        accessorKey: 'actions',
        cell: (cell) => {
          return (
            <div className='flex justify-center'>
              <ButtonLink
                href={`/dashboard/transactions/${cell.row.original.id}`}
                size='sm'
                variant='outline'
                rightIcon={Eye}
              >
                Edit
              </ButtonLink>
            </div>
          );
        },
      },
    ],
    [],
  );
  const url = buildPaginatedTableURL({
    baseUrl: '/transaction',
    tableState,
    additionalParam: {
      param: tableState.globalFilter,
      status: tableState.columnFilters.find((v) => (v.id = 'status'))?.value,
    },
  });
  const { data: dataCustomer, isLoading } = useQuery<
    PaginatedApiResponse<Omit<Transaction, 'token'>[]>,
    Error
  >([url]);

  const meta = {
    total: dataCustomer?.total,
    currentPages: dataCustomer?.currentPages,
    limit: dataCustomer?.limit,
    maxPages: dataCustomer?.maxPages,
    from: dataCustomer?.from,
    to: dataCustomer?.to,
  };

  return (
    <DashboardLayout>
      <Seo templateTitle='Transactions' />

      <main>
        <section>
          <div className='mt-2 space-y-4 px-10'>
            <div className='flex gap-2 items-center'>
              <Typography variant='h2'>Transaction Data</Typography>
              <IconButton
                onClick={() => router.replace('/dashboard/transactions/create')}
                size='sm'
                icon={PlusIcon}
              />
            </div>
            <ServerTable
              withFilter
              withSelectFilter
              columns={columns}
              data={dataCustomer?.data ?? []}
              meta={meta}
              isLoading={isLoading}
              tableState={tableState}
              setTableState={setTableState}
              className='mt-8'
            />
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
