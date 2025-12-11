import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';
import '@/styles/nprogress.css';

import api from '@/lib/axios';
import { inter } from '@/lib/font';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

import { enUS } from 'date-fns/locale';
import { registerLocale, setDefaultLocale } from 'react-datepicker';

registerLocale('en-US', enUS);

setDefaultLocale('en-US');

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={inter.className}>
        <Toaster />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
