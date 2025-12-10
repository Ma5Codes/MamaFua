import Cookies from 'universal-cookie';

const cookies = new Cookies({
  secure: false,
});

export const getToken = (): string => {
  return cookies.get('@example/token');
};

export const setToken = (token: string) => {
  cookies.set('@example/token', token, {
    path: '/',
    secure: false,
  });
};

export const removeToken = () => {
  cookies.remove('@example/token', {
    path: '/',
    secure: false,
  });
};
