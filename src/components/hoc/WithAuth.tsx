import { useRouter } from 'next/router';
import * as React from 'react';
import { toast } from 'react-hot-toast';

import api from '@/lib/axios';
import { getToken, removeToken } from '@/lib/cookies';

import Loading from '@/components/Loading';

import useAuthStore from '@/store/useAuthStore';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/auth';

export interface WithAuthProps {
  user: User;
}

export default function WithAuth<T>(
  Component: React.ComponentType<T>,
  routePermission: string[],
) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();
    const toastDisplayed = React.useRef(false);

    //#region  //*=========== Store ===========
    const isAuthenticated = useAuthStore.useIsAuthenticated();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== Store ===========

    const checkAuth = React.useCallback(() => {
      const token = getToken();

      if (!token) {
        isAuthenticated && logout();
        stopLoading();
        return;
      }

      const loadUser = async () => {
        try {
          const res = await api.get<ApiResponse<User>>('/auth/info');
          login(res.data.data, token);
        } catch (error) {
          removeToken();
        } finally {
          stopLoading();
        }
      };

      loadUser();
    }, [isAuthenticated, login, logout, stopLoading]);

    React.useEffect(() => {
      if (!toastDisplayed.current) {
        if (user && isAuthenticated) {
          if (!routePermission.includesapa1234(user.role)) {
            toast.error('Oops sorry, you have no access');
            toastDisplayed.current = true; // Mark toast as displayed
            if (user.role === 'user') {
              router.replace('/dashboard');
            } else if (user.role === 'admin') {
              router.replace('/dashboard/admin');
            }
          }
        } else {
          if (!isLoading) {
            toast.error('Oops sorry, you have no access');
            toastDisplayed.current = true; // Mark toast as displayed
            removeToken();
            router.replace('/login');
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [routePermission, user, isAuthenticated, isLoading, router]);

    React.useEffect(() => {
      checkAuth();
      // run checkAuth every focus changes
      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);

    if (isLoading || !user) {
      return <Loading />;
    }
    return <Component {...(props as T)} user={user} />;
  };

  return ComponentWithAuth;
}
