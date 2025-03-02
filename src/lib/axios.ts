import axios, { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next';
import Cookies from 'universal-cookie';

import { getToken } from '@/lib/cookies';

import { ApiResponse, UninterceptedApiErrorData } from '@/types/api';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'; // Default fallback

console.log('Base API URL:', baseUrl); // Debugging

const isServer = () => typeof window === 'undefined';

let context = <GetServerSidePropsContext>{};

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,GET,DELETE,PATCH,POST,PUT',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers':
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  },
  withCredentials: false,
});

api.defaults.withCredentials = false;

api.interceptors.request.use((config) => {
  if (config.headers) {
    let token: string | undefined;

    if (isServer()) {
      if (!context)
        throw new Error(
          'Api Context not found. You must call `setApiContext(context)` before calling api on server-side',
        );

      const cookies = new Cookies(context.req?.headers.cookie);
      token = cookies.get('@example/token');
    } else {
      token = getToken();
      if (!token) {
        token =
          typeof window !== 'undefined' ? localStorage.getItem('token') || '' : '';
      }
    }

    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiResponse<UninterceptedApiErrorData>>) => {
    if (error.response?.status !== 200) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response?.data,
            error:
              typeof error.response?.data === 'string'
                ? error.response?.data
                : Object.values(error.response?.data?.data ?? '')[0],
          },
        },
      });
    }
    return Promise.reject(error);
  },
);

/**
 * Must be set when calling api on server side
 */
export const setApiContext = (_context: GetServerSidePropsContext) => {
  context = _context;
};

export default api;
