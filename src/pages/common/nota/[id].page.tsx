import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useMutationToast from '@/hooks/toast/useMutationToast';

import PdfGenerator from '@/components/fetch/PDFGenerator';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { Transaction } from '@/types/api';
export default function NotaPage() {
  const router = useRouter();
  const { id } = router.query;

  const generatePdf = (data: Transaction) => {
    PdfGenerator(data);
  };

  const { mutateAsync: getNota } = useMutationToast<void, string>(
    useMutation(
      async (data) => {
        return await api.get(`/transaction/nota/${data}`).then(async (res) => {
          generatePdf(res.data.data);
        });
      },
      {
        onSuccess: () => {
          toast.success('Successfully Obtained Note');
        },
      },
    ),
  );

  useEffect(() => {
    if (!id) {
      return;
    }
    getNota(id as string);
  }, [id, getNota]);

  useEffect(() => {}, []);
  return (
    <Layout>
      <Seo title='Notas' />
      <div className='h-screen grid place-items-center w-full min-h-screen'></div>
    </Layout>
  );
}
