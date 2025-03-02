import queryString, { StringifyOptions } from 'query-string';

import { ServerTableState } from '@/components/table/ServerTable';

type BuildPaginationTableParam = {
  /** API Base URL, with / on the front */
  baseUrl: string;
  tableState: ServerTableState;
  /** Parameter addition
   * @example include: ['user', 'officer']
   */
  additionalParam?: Record<string, unknown>;
  options?: StringifyOptions;
};
type BuildPaginationTableURL = (props: BuildPaginationTableParam) => string;

export const buildPaginatedTableURL: BuildPaginationTableURL = ({
  baseUrl,
  tableState,
  additionalParam,
  options,
}) =>
  queryString.stringifyUrl(
    {
      url: baseUrl,
      query: {
        limit: tableState.pagination.pageSize,
        page: tableState.pagination.pageIndex + 1,
        sortBy: tableState.sorting.length > 0 ? tableState.sorting[0].id : '',
        sortType:
          tableState.sorting.length > 0
            ? tableState.sorting[0].desc
              ? 'desc'
              : 'asc'
            : '',
        ...additionalParam,
      },
    },
    {
      arrayFormat: 'comma',
      skipEmptyString: true,
      ...options,
    },
  );
