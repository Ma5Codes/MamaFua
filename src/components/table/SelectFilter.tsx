import { RowData, Table } from '@tanstack/react-table';
import { DollarSign } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import TOption from '@/components/table/TOption';

type FilterProps<T extends RowData> = {
  table: Table<T>;
  columnName: string;
} & React.ComponentPropsWithoutRef<'div'>;

const DEBOUNCE_MS = 300;

export default function SelectFilter<T extends RowData>({
  className,
  table,
  columnName,
  ...rest
}: FilterProps<T>) {
  const [filter, setFilter] = React.useState('');
  React.useEffect(() => {
    const COLUMN_NAME = columnName;
    const timeout = setTimeout(() => {
      table.setColumnFilters([
        {
          id: COLUMN_NAME,
          value: filter,
        },
      ]);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timeout);
  }, [filter, table, columnName]);
  const optionList = [
    { value: '', label: 'Semua' },
    { value: 'lunas', label: 'Lunas' },
    {
      value: 'belum-bayar',
      label: 'Belum Bayar',
    },
    {
      value: 'bayar-sebagian',
      label: 'Bayar Sebagian',
    },
  ];
  return (
    <div className={clsxm('relative mt-1 self-start', className)} {...rest}>
      <TOption
        icon={<DollarSign size={16} />}
        value={filter}
        onChange={(e) => {
          setFilter(String(e.target.value));
        }}
      >
        {optionList.map((page) => (
          <option key={page.value} value={page.value}>
            {page.label}
          </option>
        ))}
      </TOption>
    </div>
  );
}
