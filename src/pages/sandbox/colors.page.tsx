import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';
import ThemeToggle from '@/components/ThemeToggle';
import SimpleCard from '@/components/cards/SimpleCard';

export default function ColorsPage() {
  return (
    <Layout>
      <Seo templateTitle='Design System - Colors' />

      <main>
        <div className='layout min-h-screen py-20'>
          <div className='flex items-center justify-between mb-8'>
            <Typography as='h1' variant='j1'>
              Design System
            </Typography>
            <ThemeToggle showLabel />
          </div>

          <div className='mb-12'>
            <Typography as='h2' variant='h2' className='mb-4'>
              Color Palette
            </Typography>
            <Typography variant='b2' className='text-text-secondary'>
              Premium color system with full light and dark mode support
            </Typography>
          </div>

          <section className='mt-8'>
            <Typography as='h2' variant='h3' className='mb-4'>
              Primary Colors
            </Typography>
            <Typography variant='b3' className='text-text-secondary mb-4'>
              Light: #1F7A8C | Dark: #72D0DF
            </Typography>
            <div className='mt-2 flex flex-wrap gap-3'>
              <ColorBox className='bg-primary-50 text-text-primary'>50</ColorBox>
              <ColorBox className='bg-primary-100 text-text-primary'>
                <p>100</p>
              </ColorBox>
              <ColorBox className='bg-primary-200 text-text-primary'>200</ColorBox>
              <ColorBox className='bg-primary-300 text-text-primary'>300</ColorBox>
              <ColorBox className='bg-primary-400 text-white'>
                <p>400</p>
              </ColorBox>
              <ColorBox className='bg-primary-500 text-white'>
                <p>500</p>
                <p className='text-xs mt-1'>Default</p>
              </ColorBox>
              <ColorBox className='bg-primary-600 text-white'>
                <p>600</p>
                <p className='text-xs mt-1'>Hover</p>
              </ColorBox>
              <ColorBox className='bg-primary-700 text-white'>
                <p>700</p>
                <p className='text-xs mt-1'>Active</p>
              </ColorBox>
              <ColorBox className='bg-primary-800 text-white'>800</ColorBox>
              <ColorBox className='bg-primary-900 text-white'>900</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h3' className='mb-4'>
              Secondary Colors
            </Typography>
            <Typography variant='b3' className='text-text-secondary mb-4'>
              Light: #BFDBF7 | Dark: #2B3A42
            </Typography>
            <div className='mt-2 flex flex-wrap gap-3'>
              <ColorBox className='bg-secondary-50 text-text-primary'>50</ColorBox>
              <ColorBox className='bg-secondary-100 text-text-primary'>
                <p>100</p>
              </ColorBox>
              <ColorBox className='bg-secondary-200 text-text-primary'>200</ColorBox>
              <ColorBox className='bg-secondary-300 text-text-primary'>300</ColorBox>
              <ColorBox className='bg-secondary-400 text-text-primary'>
                <p>400</p>
              </ColorBox>
              <ColorBox className='bg-secondary-500 text-white'>
                <p>500</p>
                <p className='text-xs mt-1'>Default</p>
              </ColorBox>
              <ColorBox className='bg-secondary-600 text-white'>
                <p>600</p>
                <p className='text-xs mt-1'>Hover</p>
              </ColorBox>
              <ColorBox className='bg-secondary-700 text-white'>
                <p>700</p>
                <p className='text-xs mt-1'>Active</p>
              </ColorBox>
              <ColorBox className='bg-secondary-800 text-white'>800</ColorBox>
              <ColorBox className='bg-secondary-900 text-white'>900</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h3' className='mb-4'>
              Accent Colors
            </Typography>
            <Typography variant='b3' className='text-text-secondary mb-4'>
              Light: #F2545B | Dark: #F27A82
            </Typography>
            <div className='mt-2 flex flex-wrap gap-3'>
              <ColorBox className='bg-accent-50 text-text-primary'>50</ColorBox>
              <ColorBox className='bg-accent-100 text-text-primary'>
                <p>100</p>
              </ColorBox>
              <ColorBox className='bg-accent-200 text-text-primary'>200</ColorBox>
              <ColorBox className='bg-accent-300 text-text-primary'>300</ColorBox>
              <ColorBox className='bg-accent-400 text-white'>
                <p>400</p>
              </ColorBox>
              <ColorBox className='bg-accent-500 text-white'>
                <p>500</p>
                <p className='text-xs mt-1'>Default</p>
              </ColorBox>
              <ColorBox className='bg-accent-600 text-white'>
                <p>600</p>
                <p className='text-xs mt-1'>Hover</p>
              </ColorBox>
              <ColorBox className='bg-accent-700 text-white'>
                <p>700</p>
                <p className='text-xs mt-1'>Active</p>
              </ColorBox>
              <ColorBox className='bg-accent-800 text-white'>800</ColorBox>
              <ColorBox className='bg-accent-900 text-white'>900</ColorBox>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h3' className='mb-4'>
              Background & Text Colors
            </Typography>
            <div className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <SimpleCard>
                <Typography variant='s3' className='mb-2'>Background</Typography>
                <div className='flex gap-3'>
                  <ColorBox className='bg-bg border border-typo-outline'>
                    <p className='text-xs'>bg</p>
                  </ColorBox>
                  <ColorBox className='bg-bg-card border border-typo-outline'>
                    <p className='text-xs'>card</p>
                  </ColorBox>
                </div>
              </SimpleCard>
              <SimpleCard>
                <Typography variant='s3' className='mb-2'>Text</Typography>
                <div className='flex gap-3'>
                  <ColorBox className='bg-text-primary text-white'>
                    <p className='text-xs'>Primary</p>
                  </ColorBox>
                  <ColorBox className='bg-text-secondary text-white'>
                    <p className='text-xs'>Secondary</p>
                  </ColorBox>
                </div>
              </SimpleCard>
            </div>
          </section>

          <section className='mt-8'>
            <Typography as='h2' variant='h3' className='mb-4'>
              UI Elements
            </Typography>
            <div className='mt-2 flex flex-wrap gap-3'>
              <ColorBox className='bg-typo-divider border border-typo-outline text-text-primary'>
                Divider
              </ColorBox>
              <ColorBox className='bg-typo-outline text-text-primary'>
                Outline
              </ColorBox>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

function ColorBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsxm(
        'flex h-28 w-28 flex-col items-center justify-center break-all rounded-xl px-2 text-center text-xs font-medium shadow-soft transition-transform hover:scale-105',
        className,
      )}
    >
      {children}
    </div>
  );
}
