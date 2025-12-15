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
import { ThemeProvider } from '@/contexts/ThemeContext';

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
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className={inter.className}>
          <Toaster
            position='top-right'
            toastOptions={{
              className: 'dark:bg-bg-card dark:text-text-primary',
              style: {
                borderRadius: '0.75rem',
                padding: '12px 16px',
              },
            }}
          />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
