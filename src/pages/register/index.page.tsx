import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import api from '@/lib/axios';
import { setToken } from '@/lib/cookies';
import useMutationToast from '@/hooks/toast/useMutationToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

export type RegisterRequestType = {
  email: string;
  password: string;
  name: string;
  no_telp: string;
  address: string;
  nik?: string;
};

export default function RegisterPage() {
  const login = useAuthStore.useLogin();
  const router = useRouter();
  const methods = useForm<RegisterRequestType>({
    mode: 'onChange',
  });
  const { handleSubmit } = methods;
  const { mutateAsync: postRegister, isLoading } = useMutationToast<
    void,
    RegisterRequestType
  >(
    useMutation((data) => {
      return api.post('/auth/register', data).then(async (res) => {
        const token = res.data.token || '';
        setToken(token);

        login(res.data.data, token);
        router.replace('/dashboard');
      });
    }),
    {
      success: 'Successfully registered',
    },
  );
  // #region Methods
  const onSubmit = async (data: RegisterRequestType) => {
    await postRegister(data);
  };
  // #endregion

  return (
    <Layout>
      <Seo title='Register' />
      <main className='min-h-screen grid place-items-center bg-white font-primary py-8'>
        <div className='bg-white p-6 xs:p-8 md:p-10 rounded-3xl md:shadow-2xl space-y-6 w-full max-w-[28rem] mx-auto'>
          <div className='space-y-1'>
            <h2 className='text-2xl font-bold'>Create an account</h2>
            <p className='text-black/70'>Sign up to get started</p>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
              <Input
                type='text'
                id='name'
                label={null}
                placeholder='Full Name'
                validation={{ required: 'Name must be filled' }}
              />
              <Input
                type='email'
                id='email'
                label={null}
                placeholder='Email'
                validation={{ required: 'Email must be filled' }}
              />
              <Input
                type='tel'
                id='no_telp'
                label={null}
                placeholder='Phone Number'
                validation={{ required: 'Phone number must be filled' }}
              />
              <Input
                type='text'
                id='address'
                label={null}
                placeholder='Address'
                validation={{ required: 'Address must be filled' }}
              />
              <Input
                type='text'
                id='nik'
                label={null}
                placeholder='NIK (Optional)'
              />
              <Input
                type='password'
                id='password'
                label={null}
                placeholder='Password'
                validation={{
                  required: 'Password must be filled',
                  minLength: {
                    value: 8,
                    message: 'Password must contain at least 8 characters',
                  },
                }}
              />
              <Button
                type='submit'
                isLoading={isLoading}
                className='w-full !mt-6'
              >
                Sign Up
              </Button>
            </form>
          </FormProvider>
          <p className='text-black/70 text-[13px] leading-4'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='text-black underline decoration-white hover:decoration-stone-600 transition duration-150'
            >
              Log in
            </Link>
          </p>
        </div>
      </main>
    </Layout>
  );
}
