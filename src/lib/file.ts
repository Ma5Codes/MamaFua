import queryString, { StringifyOptions } from 'query-string';

type BuildGetFileUrlParam = {
  base_url: string;
  mode: string;
  filename: string;
  options?: StringifyOptions;
};

type BuildPostFileUrlParam = {
  base_url: string;
  mode: string;
  options?: StringifyOptions;
};

type BuildGetFileUrl = (props: BuildGetFileUrlParam) => string;
type BuildPostFileUrl = (props: BuildPostFileUrlParam) => string;

export const buildGetFileUrl: BuildGetFileUrl = ({
  base_url,
  mode = 'aes',
  filename,
}: BuildGetFileUrlParam) => {
  return queryString.stringifyUrl(
    {
      url: base_url,
      query: {
        mode: mode,
        filename: filename,
      },
    },
    {
      arrayFormat: 'comma',
      skipEmptyString: true,
    },
  );
};

export const buildPostFileUrl: BuildPostFileUrl = ({
  base_url,
  mode = 'aes',
}: BuildPostFileUrlParam) => {
  return queryString.stringifyUrl(
    { url: base_url, query: { mode: mode } },
    { skipEmptyString: true }, // Remove arrayFormat option or set it to 'none'
  );
};
