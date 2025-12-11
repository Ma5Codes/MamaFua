import moment from 'moment'; 
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import { defaultToastMessage } from '@/lib/constant';

import Button from '@/components/buttons/Button';
import DatePicker from '@/components/forms/DatePicker';
import Input from '@/components/forms/Input';
import SearchableSelectInput from '@/components/forms/SearchableSelectInput';
import ServerSelectInput from '@/components/forms/ServerSelectInput';
import TextArea from '@/components/forms/TextArea';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';

import REGEX from '@/constant/regex';
import {
  getServicePerPrice,
  getServiceTotalPrice,
  services,
} from '@/constant/services';
import { checkPassword } from '@/constant/users';

import { ApiResponse, Customer } from '@/types/api';

interface TransactionData {
  name: string;
  notaId: string;
  noTelp: string;
  address: string;
  dateIn: string;
  dateDone: string;
  datePayment: string;
  weight: string;
  service: string;
  price: string;
  cashier: string;
  status: string;
  perprice: string;
  amountPayment: string;
}

export default function CreateTransactionPage() {
  const router = useRouter();
  const methods = useForm<TransactionData>({
    mode: 'onTouched',
  });
  const methods2 = useForm<Customer>({
    mode: 'onTouched',
  });

  const [notaIsDisabed, setNotaIsDisabled] = useState(false);

  const date = moment();
  const tommorrowDate = moment().add(1, 'days');
  const getDateNowFormatted = date.toISOString();
  const getTommorrowFormatted = tommorrowDate.toISOString();

  const service = methods.watch('service');
  const author = methods.watch('cashier');
  const status = methods.watch('status');
  const weight = methods.watch('weight');
  const perprice = methods.watch('perprice');
  const price = methods.watch('price');

  useEffect(() => {
    if (status === 'Paid') {
      methods.setValue('datePayment', getDateNowFormatted);
      methods.setValue('amountPayment', price);
    }
    if (status === 'unpaid') {
      methods.setValue('amountPayment', '0');
      methods.setValue('datePayment', '');
    } else {
      methods.setValue('datePayment', getDateNowFormatted);
    }
  }, [status, methods, price, getDateNowFormatted]);

  useEffect(() => {
    if (service != 'other') {
      methods.setValue(
        'price',
        getServiceTotalPrice(
          service,
          Number(weight == '' ? 0 : weight),
          Number(perprice),
        ).toString(),
      );
      methods.setValue(
        'perprice',
        getServicePerPrice(
          service,
          Number(weight == '' ? 0 : weight),
        ).toString(),
      );
    } else {
      methods.setValue(
        'price',
        getServiceTotalPrice(
          service,
          Number(weight == '' ? 0 : weight),
          Number(perprice),
        ).toString(),
      );
    }
  }, [service, weight, perprice, methods]);

  useEffect(() => {
    getLatestNota().then((res) => {
      if (res?.data) {
        methods.setValue('notaId', (Number(res.data.notaId) + 1).toString());
        setNotaIsDisabled(true);
      } else {
        methods.setValue('notaId', '');
        setNotaIsDisabled(false);
      }
    });
  }, [methods]);

  const [passwordCashier, setPasswordCashier] = useState('');

  // Get password hint for selected cashier
  const getPasswordHint = (cashierName: string) => {
    const hints: { [key: string]: string } = {
      'dodo': 'Password: Dodo123',
      'ayu': 'Password: Ayu123',
      'papa': 'Password: Papa123',
      'nisa': 'Password: Nisa123',
    };
    return hints[cashierName] || '';
  };

  const nameCustomer = methods2.watch('name');

  const getCustomer = async (id: string) => {
    try {
      const res = await api.get<ApiResponse<Customer>>(`/customer/${id}`);
      return res.data;
    } catch (e) {
      return null;
    }
  };

  const getLatestNota = async () => {
    try {
      const res = await api.get<ApiResponse<TransactionData>>(
        '/transaction/recap/latest',
      );
      return res.data;
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    if (nameCustomer) {
      getCustomer(nameCustomer).then((customer) => {
        if (customer) {
          methods.setValue('name', customer.data.name);
          methods.setValue('address', customer.data.address);
          methods.setValue('noTelp', customer.data.noTelp);
        }
      });
    }
  }, [nameCustomer, methods]);

  const { handleSubmit } = methods;

  const onSubmitForm: SubmitHandler<TransactionData> = (data) => {
    if (!checkPassword(author, passwordCashier)) {
      toast.error('Wrong password');
      return;
    }
    toast.promise(
      api.post('/transaction', data).then((_) => {
        return router.replace('/dashboard/transactions');
      }),

      {
        ...defaultToastMessage,
        success: 'Success! Data added',
      },
    );
  };

  return (
    <DashboardLayout>
      <Seo templateTitle='New Transaction' />
      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center '>
            <FormProvider {...methods2}>
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className='w-full max-w-sm  md:max-w-screen-lg'
              >
                <ServerSelectInput
                  label2Getter='noTelp'
                  labelGetter='id'
                  valueGetter='name'
                  id='name'
                  route='/customer?limit=500'
                  label='Select Customer'
                  placeholder='Select Customer'
                />
              </form>
            </FormProvider>

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className='mt-8 w-full max-w-sm md:max-w-screen-lg'
              >
                <div className='space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-3 md:gap-x-8 mb-10'>
                  <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-3 md:col-span-2 gap-4'>
                    <Input
                      disabled={notaIsDisabed}
                      id='notaId'
                      label='Note Number'
                      placeholder='Note Number'
                      validation={{}}
                    />
                    <SearchableSelectInput
                      id='cashier'
                      label='Select Cashier'
                      placeholder='Select Cashier Name'
                      options={[
                        { value: 'dodo', label: 'Dodo' },
                        { value: 'ayu', label: 'Ayu' },
                        { value: 'nisa', label: 'Nisa' },
                        { value: 'papa', label: 'Papa' },
                      ]}
                      validation={{ required: 'Select Input must be filled' }}
                    />
                    <Input
                      value={passwordCashier}
                      onChange={(e) => setPasswordCashier(e.target.value)}
                      type='password'
                      id='passwordCashier'
                      label='Password'
                      placeholder='Enter Cashier Password'
                      validation={{}}
                    />
                    {author && (
                      <p className='mt-1 text-xs text-gray-500'>
                        💡 {getPasswordHint(author)}
                      </p>
                    )}
                  </div>

                  <div className='col-span-2'>
                    <Input
                      id='name'
                      label='Name'
                      placeholder='Customer Name'
                      validation={{
                        required: 'Name must be filled',
                      }}
                    />
                  </div>

                  <Input
                    id='noTelp'
                    label='Phone Number'
                    placeholder='Phone Number'
                    validation={{}}
                  />

                  <Input
                    id='address'
                    label='Address'
                    placeholder='Customer Address'
                    validation={{}}
                  />

                  <SearchableSelectInput
                    id='service'
                    type='text'
                    label='Select Service'
                    placeholder='Select Service'
                    options={services.map(
                      (v: { name: string; value: string }) => ({
                        value: v.name,
                        label: v.value,
                      }),
                    )}
                    validation={{ required: 'Select Input must be filled' }}
                  />

                  <Input
                    disabled={(service as unknown as string) === 'other' ? false : true}
                    id='perprice'
                    label='Price/kg'
                    placeholder='Price Per Unit (kg)'
                    validation={{}}
                  />

                  <Input
                    id='weight'
                    label='Weight (kg)'
                    placeholder='Clothes Weight (kg)'
                    validation={{
                      pattern: {
                        value: REGEX.NUMBER_AND_DECIMAL,
                        message: 'Weight must be a number/decimal',
                      },
                      required: 'Weight must be filled',
                    }}
                  />

                  <Input
                    id='price'
                    label='Total Price'
                    placeholder='Total Price'
                    validation={{}}
                  />

                  <DatePicker
                    showTimeSelect={true}
                    id='dateIn'
                    label='Date In'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultYear={2024}
                    defaultValue={getDateNowFormatted}
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{
                      required: 'Date In must be filled',
                      valueAsDate: true,
                    }}
                  />

                  <DatePicker
                    showTimeSelect={true}
                    id='dateDone'
                    label='Estimated Completion Date'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultValue={getTommorrowFormatted}
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{
                      required: 'Estimated Completion Date is required',
                      valueAsDate: true,
                    }}
                  />

                  <SearchableSelectInput
                    id='status'
                    label='Payment Status'
                    placeholder='Payment Status'
                    options={[
                      { value: 'Paid', label: 'Paid' },
                      { value: 'unpaid', label: 'Unpaid' },
                      { value: 'partially-paid', label: 'Partially Paid' },
                    ]}
                    validation={{ required: 'Select Input must be filled' }}
                  />

                  <DatePicker
                    disabled={true}
                    showTimeSelect={true}
                    id='datePayment'
                    label='Payment Date'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultYear={2024}
                    defaultValue={getDateNowFormatted}
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{}}
                  />

                  <Input
                    id='amountPayment'
                    label='Total Amount Paid'
                    placeholder='Total Amount Paid'
                    validation={{}}
                  />

                  <div className='col-span-2'>
                    <TextArea id='notes' label='Notes' />
                  </div>
                </div>

                <Button type='submit' className='mt-6 block w-full'>
                  Create Transaction
                </Button>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
