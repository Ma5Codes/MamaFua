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
    if (status === 'lunas') {
      methods.setValue('datePayment', getDateNowFormatted);
      methods.setValue('amountPayment', price);
    }
    if (status === 'belum-bayar') {
      methods.setValue('amountPayment', '0');
      methods.setValue('datePayment', '');
    } else {
      methods.setValue('datePayment', getDateNowFormatted);
    }
  }, [status, methods, price, getDateNowFormatted]);

  useEffect(() => {
    if (service != 'lainnya') {
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
  //#endregion  //*======== Form ===========

  const onSubmitForm: SubmitHandler<TransactionData> = (data) => {
    if (!checkPassword(author, passwordCashier)) {
      toast.error('Password salah');
      return;
    }
    toast.promise(
      api.post('/transaction', data).then((_) => {
        return router.replace('/dashboard/transactions');
      }),

      {
        ...defaultToastMessage,
        success: 'Berhasil! Menambahkan data',
      },
    );
  };

  return (
    <DashboardLayout>
      <Seo templateTitle='Transaksi Baru' />
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
                  label='Pilih Customer'
                  placeholder='Pilih Customer'
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
                      label='No. Nota'
                      placeholder='Nomor Nota'
                      validation={{}}
                    />
                    <SearchableSelectInput
                      id='cashier'
                      label='Pilih Kasir'
                      placeholder='Pilih Nama Kasir'
                      options={[
                        { value: 'dodo', label: 'Dodo' },
                        {
                          value: 'ayu',
                          label: 'Ayu',
                        },
                        {
                          value: 'nisa',
                          label: 'Nisa',
                        },
                        {
                          value: 'papa',
                          label: 'Papa',
                        },
                      ]}
                      validation={{ required: 'Select Input must be filled' }}
                    />
                    <Input
                      value={passwordCashier}
                      onChange={(e) => setPasswordCashier(e.target.value)}
                      type='password'
                      id='passwordCashier'
                      label='Password'
                      placeholder='Masukkan Password Kasir'
                      validation={{}}
                    />
                  </div>

                  <div className='col-span-2'>
                    <Input
                      id='name'
                      label='Nama'
                      placeholder='Nama Pelanggan'
                      validation={{
                        required: 'Nama harus diisi',
                      }}
                    />
                  </div>
                  <Input
                    id='noTelp'
                    label='No. Telp'
                    placeholder='Nomor Telepon'
                    validation={{}}
                  />
                  <Input
                    id='address'
                    label='Alamat'
                    placeholder='Alamat Pelanggan'
                    validation={{}}
                  />
                  <SearchableSelectInput
                    id='service'
                    type='text'
                    label='Pilih Layanan'
                    placeholder='Pilih Layanan'
                    options={services.map(
                      (v: { name: string; value: string }) => ({
                        value: v.name,
                        label: v.value,
                      }),
                    )}
                    validation={{ required: 'Select Input must be filled' }}
                  />

                  <Input
                    disabled={
                      (service as unknown as string) === 'lainnya'
                        ? false
                        : true
                    }
                    id='perprice'
                    label='Harga/kg'
                    placeholder='Harga Persatuan(kg)'
                    validation={{}}
                  />

                  <Input
                    id='weight'
                    label='Berat(kg)'
                    placeholder='Berat Pakaian(kg)'
                    validation={{
                      pattern: {
                        value: REGEX.NUMBER_AND_DECIMAL,
                        message: 'Berat harus dalam angka/desimal',
                      },
                      required: 'Berat harus diisi',
                    }}
                  />

                  <Input
                    id='price'
                    label='Harga Total'
                    placeholder='Harga Total'
                    validation={{}}
                  />

                  <DatePicker
                    showTimeSelect={true}
                    id='dateIn'
                    label='Tanggal Masuk'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultYear={2024}
                    defaultValue={getDateNowFormatted}
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{
                      required: 'Tanggal Masuk harus diisi',
                      valueAsDate: true,
                    }}
                  />

                  <DatePicker
                    showTimeSelect={true}
                    id='dateDone'
                    label='Tanggal Perkiraan Selesai'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultValue={getTommorrowFormatted}
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{
                      required: 'Tanggal Perkiraan Selesai harus diisi',
                      valueAsDate: true,
                    }}
                  />

                  <SearchableSelectInput
                    id='status'
                    label='Status Pembayaran'
                    placeholder='Status Pembayarann'
                    options={[
                      {
                        value: 'lunas',
                        label: 'Lunas',
                      },
                      {
                        value: 'belum-bayar',
                        label: 'Belum Bayar',
                      },
                      {
                        value: 'bayar-sebagian',
                        label: 'Bayar Sebagian',
                      },
                    ]}
                    validation={{ required: 'Select Input must be filled' }}
                  />
                  <DatePicker
                    disabled={true}
                    showTimeSelect={true}
                    id='datePayment'
                    label='Tanggal Pembayaran'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultYear={2024}
                    defaultValue={getDateNowFormatted}
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{}}
                  />

                  <Input
                    id='amountPayment'
                    label='Total yang telah dibayar'
                    placeholder='Total yang sudah dibayar'
                    validation={{}}
                  />

                  <div className='col-span-2'>
                    <TextArea id='notes' label='Catatan' />
                  </div>
                </div>
                <Button type='submit' className='mt-6 block w-full'>
                  Buat Transaksi
                </Button>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
