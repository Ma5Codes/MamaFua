export const defaultToastMessage = {
  loading: 'Loading...',
  success: 'Berhasil',
  // @ts-expect-error error-free
  error: (err) =>
    err?.response?.data?.message ?? 'Terjadi kesalahan, mohon coba lagi',
};
