import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get('@safari/token');
};

export const setToken = (token: string) => {
  cookies.set('@safari/token', token, {
    path: '/',
  });
};

export const removeToken = () => {
  cookies.remove('@safari/token', {
    path: '/',
  });
};
