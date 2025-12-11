import { useQuery } from '@tanstack/react-query';
import { enUS } from 'date-fns/locale';
import { DownloadIcon, Edit, Trash2 } from 'lucide-react';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { WhatsappIcon, WhatsappShareButton } from 'react-share';

import api from '@/lib/axios';
import { defaultToastMessage } from '@/lib/constant';
import useDialog from '@/hooks/useDialog';

import Button from '@/components/buttons/Button';
import { CopyButton } from '@/components/buttons/CopyButton';
import IconButton from '@/components/buttons/IconButton';
import PdfGenerator from '@/components/fetch/PDFGenerator';
import DatePicker from '@/components/forms/DatePicker';
import Input from '@/components/forms/Input';
import SearchableSelectInput from '@/components/forms/SearchableSelectInput';
import TextArea from '@/components/forms/TextArea';
import WithAuth from '@/components/hoc/WithAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import REGEX from '@/constant/regex';
import {
  getServicePerPrice,
  getServiceTotalPrice,
  services,
} from '@/constant/services';
import { checkPassword } from '@/constant/users';

import { ApiResponse, Transaction } from '@/types/api';
registerLocale('en-US', enUS);

export default WithAuth(EditTransactionPage, ['admin']);
function EditTransactionPage() {
  const router = useRouter();
  const { detailId } = router.query;
  const url = `/transaction/${detailId}`;

  const { data: detailTransaction } = useQuery<ApiResponse<Transaction>, Error>(
    [url],
  );

  const methods = useForm<Transaction>({
    mode: 'onTouched',
  });

  const generatePdf = () => {
    PdfGenerator(detailTransaction?.data as Transaction);
  };

  function getDownloadUrl(): string {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    return baseUrl + 'common/nota/' + detailTransaction?.data.transactionId;
  }

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

  //Watch ALl Records Transaction
  const service = methods.watch('service');
  const cashier = methods.watch('cashier');
  const status = methods.watch('status');
  const perprice = methods.watch('perprice');
  const price = methods.watch('price');
  const weight = methods.watch('weight');
  const statusTaken = methods.watch('statusTaken');

  //Set initial values
  useEffect(() => {
    if (detailTransaction) {
      methods.reset({
        ...detailTransaction.data,
      });
    }

    if (detailTransaction?.data.dateOut !== null) {
      methods.setValue('dateOut', detailTransaction?.data.dateOut as string);
      methods.setValue('statusTaken', 'diambil');
    } else {
      methods.setValue('statusTaken', 'belum-diambil');
    }
  }, [detailTransaction, methods]);

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
    const date = moment();
    const getDateNowFormatted = date.toISOString() as string;

    if (status === 'Paid' || status === 'bayar-sebagian') {
      if (status === 'Paid') {
        methods.setValue('amountPayment', price);
      }
      methods.setValue(
        'datePayment',
        detailTransaction?.data.datePayment
          ? detailTransaction?.data.datePayment
          : getDateNowFormatted,
      );
    } else {
      methods.setValue('datePayment', '');
    }
  }, [
    status,
    methods,
    price,
    detailTransaction?.data.datePayment,
    detailTransaction?.data.price,
  ]);

  useEffect(() => {
    if (statusTaken === 'diambil') {
      if (detailTransaction?.data.dateOut === null) {
        const date = moment();
        const getDateNowFormatted = date.toISOString() as string;
        methods.setValue('dateOut', getDateNowFormatted);
      } else {
        methods.setValue('dateOut', detailTransaction?.data.dateOut as string);
      }
    } else if (statusTaken === 'belum-diambil') {
      methods.setValue('dateOut', '');
    }
  }, [methods, statusTaken, detailTransaction?.data.dateOut]);

  const { handleSubmit } = methods;
  const onSubmitForm: SubmitHandler<Transaction> = (data) => {
    if (!checkPassword(cashier, passwordCashier)) {
      toast.error('Password salah');
      return;
    }
    toast.promise(
      api.put(`/transaction/${detailTransaction?.data.id}`, data).then((_) => {
        return router.replace('/dashboard/transactions');
      }),

      {
        ...defaultToastMessage,
        success: 'Berhasil! menyimpan data',
      },
    );
  };

  const dialog = useDialog();
  const openAlert = (successFn: () => void, rejectFn: () => void) => {
    dialog({
      title: 'Delete Transaction',
      description: 'Anda yakin akan menghapus transaksi ini?',
      submitText: 'Ya',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(successFn)
      .catch(rejectFn);
  };

  const deleteTransaction = () => {
    if (!checkPassword(cashier, passwordCashier)) {
      toast.error('Wrong password');
      return;
    }
    openAlert(
      async () => {
        await toast.promise(
          api.delete(`/transaction/${detailTransaction?.data.id}`).then((_) => {
            return router.back();
          }),
          {
            ...defaultToastMessage,
            success: 'Berhasil! menghapus data',
          },
        );
        return;
      },
      () => {},
    );
  };

  return (
    <DashboardLayout>
      <Seo templateTitle='Edit Transaction' />
      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col justify-center '>
            <div className='flex gap-2 items-center'>
              <Typography variant='h2'>Edit Transaction</Typography>
              <IconButton icon={Edit} variant='ghost' />
            </div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className='mt-4 w-full max-w-sm md:max-w-screen-lg'
              >
                <div className='space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-3 md:gap-x-8 mb-10'>
                  <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-3 md:col-span-2 gap-4'>
                    <Input
                      id='notaId'
                      label='No. Note'
                      placeholder='Nomor Nota'
                      validation={{}}
                    />
                    <SearchableSelectInput
                      id='cashier'
                      label='Select Cashier'
                      placeholder='Select Cashier Name'
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
                      placeholder='Enter Cashier Password'
                      validation={{}}
                    />
                    {cashier && (
                      <p className='mt-1 text-xs text-gray-500'>
                        💡 {getPasswordHint(cashier)}
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
                    label='No. Telp'
                    placeholder='08182'
                    validation={{}}
                  />
                  <Input
                    id='address'
                    label='Address'
                    placeholder='Jl. ....'
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
                    id='perprice'
                    label='Price/kg'
                    placeholder='Price Per Unit(kg)'
                    validation={{}}
                  />

                  <Input
                    id='weight'
                    label='Weight(kg)'
                    placeholder='Clothes Weight(kg)'
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
                    defaultYear={2024}
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{
                      required: 'Estimated Completion Date must be filled',
                      valueAsDate: true,
                    }}
                  />
                  <SearchableSelectInput
                    id='status'
                    label='Payment Status'
                    placeholder='Payment Status'
                    options={[
                      {
                        value: 'Paid',
                        label: 'Paid',
                      },
                      {
                        value: 'belum-bayar',
                        label: 'Unpaid',
                      },
                      {
                        value: 'bayar-sebagian',
                        label: 'Partially Paid',
                      },
                    ]}
                    validation={{ required: 'Select Input must be filled' }}
                  />
                  <DatePicker
                    showTimeSelect={true}
                    id='datePayment'
                    label='Payment Date'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultYear={2024}
                    locale='en-US'
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{}}
                  />
                  <SearchableSelectInput
                    id='statusTaken'
                    label='Pickup Status'
                    placeholder='Pickup Status'
                    options={[
                      {
                        value: 'diambil',
                        label: 'Diambil',
                      },
                      {
                        value: 'belum-diambil',
                        label: 'Belum Diambil',
                      },
                    ]}
                    validation={{ required: 'Select Input must be filled' }}
                  />
                  <DatePicker
                    showTimeSelect={true}
                    id='dateOut'
                    label='Pickup Date'
                    placeholder='dd/MM/yyyy HH:mm'
                    defaultYear={2024}
                    locale='en-US'
                    dateFormat='dd/MM/yyyy HH:mm'
                    validation={{}}
                  />

                  <Input
                    id='amountPayment'
                    label='Total Amount Paid'
                    placeholder='Total Amount Paid'
                    validation={{}}
                  />
                  <div className='col-span-2 mb-3'>
                    <TextArea id='notes' label='Catatan' validation={{}} />
                  </div>
                  <div></div>
                  <div className='flex col-span-2 mt-3 w-full'>
                    <CopyButton
                      className='w-full flex-grow '
                      withInput
                      text={getDownloadUrl()}
                    />
                    <WhatsappShareButton
                      content='Check this out!'
                      className='mr-2 flex-grow-0 ml-4'
                      url={getDownloadUrl()}
                      title='Copy to Whatsapp'
                    >
                      <WhatsappIcon
                        className='rounded-lg'
                        round={false}
                        style={{ width: '40px', height: '40px' }}
                      ></WhatsappIcon>
                    </WhatsappShareButton>

                    <IconButton
                      onClick={generatePdf}
                      color=''
                      variant='warning'
                      className='mr-2 flex-grow-0'
                      icon={DownloadIcon}
                    />
                    <IconButton
                      onClick={deleteTransaction}
                      className=' flex-grow-0'
                      variant='danger'
                      icon={Trash2}
                    />
                  </div>
                </div>
                <Button type='submit' className='mt-8 block w-full'>
                  Save Data
                </Button>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
