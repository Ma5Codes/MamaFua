import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import api from '@/lib/axios';

import { removeToken, setToken } from '@/store/useCookieStore';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/auth';

interface AuthStoreType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token?: string;
  login: (user: User, token: string) => void;
  logout: () => void;
  stopLoading: () => void;
  refetch: () => Promise<void>;
}

const useAuthStoreBase = create<AuthStoreType>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: (user, token) => {
    setToken(token);
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = true;
        state.user = user;
      }),
    );
  },
  logout: () => {
    removeToken();
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = false;
        state.user = null;
      }),
    );
  },
  stopLoading: () => {
    set(
      produce<AuthStoreType>((state) => {
        state.isLoading = false;
      }),
    );
  },
  refetch: async () => {
    const res = await api.get<ApiResponse<User>>('/api/user/me');
    const data = res.data.data;
    const token = res.data.token;

    set(
      produce<AuthStoreType>((state) => {
        if (state.user) {
          state.isAuthenticated = true;
          state.user = {
            ...data,
          };
          state.token = token;
        }
      }),
    );
  },
}));

const useAuthStore = createSelectorHooks(useAuthStoreBase);

export default useAuthStore;
