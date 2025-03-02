import { QueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import get from 'lodash.get';
import * as React from 'react';

import api from '@/lib/axios';

import SearchableSelectInput, {
  SearchableSelectInputProps,
} from '@/components/forms/SearchableSelectInput';

import { ApiError, ApiResponse } from '@/types/api';

type ServerSelectInputProps = {
  route: string;
  valueGetter?: string;
  labelGetter?: string;
  label2Getter?: string;
} & Omit<SearchableSelectInputProps, 'options'>;
const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

export default function ServerSelectInput({
  route,
  valueGetter = 'id',
  labelGetter = 'name',
  label2Getter = '',
  ...rest
}: ServerSelectInputProps) {
  //#region  //*=========== Get Options ===========
  // TODO: Remove mockQuery
  const { data: optionsData, isLoading } = useQuery<
    ApiResponse<Array<object>>,
    AxiosError<ApiError>
  >([route], defaultQueryFn);

  const options =
    optionsData?.data.map((item) => ({
      value: get(item, labelGetter) + '',
      label: get(item, valueGetter) + ' ' + get(item, label2Getter),
    })) || [];
  //#endregion  //*======== Get Options ===========

  return (
    <SearchableSelectInput
      options={options}
      noOptionsMessage={() =>
        isLoading ? 'Getting options...' : 'No option found'
      }
      {...rest}
    />
  );
}
