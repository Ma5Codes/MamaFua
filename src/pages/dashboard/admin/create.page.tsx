import { Edit } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import { defaultToastMessage } from '@/lib/constant';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Input from '@/components/forms/Input';
import TextArea from '@/components/forms/TextArea';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { Customer } from '@/types/api';

export default function CreateCustomerPage() {
  const router = useRouter();
  const methods = useForm<Customer>({
    mode: 'onTouched',
  });

  const { handleSubmit } = methods;
  const onSubmitForm: SubmitHandler<Customer> = (data) => {
    toast.promise(
      api.post('/customer', data).then((_) => {
        return router.replace('/dashboard/admin');
      }),

      {
        ...defaultToastMessage,
        success: 'Succeed! Add data',
      },
    );
  };

  return (
    <DashboardLayout>
      <Seo templateTitle='Customer Baru' />
      <main>
        <section className=''>
          <div className='layout flex min-h-screen-lg flex-col justify-center '>
            <div className='flex gap-2 items-center'>
              <Typography variant='h2'>Add New Customer</Typography>
              <IconButton icon={Edit} variant='ghost' />
            </div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className='mt-4 w-full max-w-sm md:max-w-screen-lg'
              >
                <div className='space-y-3 md:space-y-0 md:grid  md:gap-y-3 md:gap-x-8 mb-10'>
                  <Input
                    id='name'
                    label='Nama'
                    placeholder='Nama Customer'
                    validation={{}}
                  />
                  <Input
                    id='noTelp'
                    label='No. Telephone'
                    placeholder='No. Telephone'
                    validation={{}}
                  />

                  <TextArea
                    id='address'
                    label='Address'
                    placeholder='Customer Address'
                    validation={{ required: 'Address must be filled' }}
                  />
                </div>
                <Button type='submit' className='mt-3 block w-full'>
                  Make a Transaction
                </Button>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
