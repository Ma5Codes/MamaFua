import { Rocket } from 'lucide-react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <div className='flex justify-center item-center space-x-2'>
              <Rocket size={40}></Rocket>
              <Typography variant='h1'>
                Hello, Welcome to Admin Laundry
              </Typography>
            </div>
            <div className='mt-4 space-y-4'>
              <Typography variant='s2'>Get Started by</Typography>
              <ButtonLink variant='outline' color='primary' href='/login'>
                Login as Administrator
              </ButtonLink>
            </div>
            <div className='mt-20'>
              <Typography variant='s4'>Do want to create like this?</Typography>
              <ArrowLink href='https://github.com/Ma5Codes/MamaFua'>
                See this repository
              </ArrowLink>
            </div>

            <footer className='absolute bottom-8 text-gray-700'>
              © {new Date().getFullYear()} Created By{' '}
              <UnderlineLink href='https://ma5Codes.com/'>
                ma5Codes
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
