import { User } from '@/types/auth';

export type ApiResponse<T> = {
  message: string;
  data: T;
  token?: string | undefined;
};

export type ApiError = {
  message: string;
};

export type UninterceptedApiErrorData = Record<string, string[]>;

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
};

export interface PaginatedApiResponse<T> {
  message: number;
  status: string;
  data: T;
  total?: number;
  currentPages?: number;
  limit?: number;
  maxPages?: number;
  from?: number;
  to?: number;
  sortBy?: string;
  sortType?: string;
}

export interface UserInfoApi {
  message: string;
  data: User;
}

export interface Transaction {
  id: number;
  transactionId: string;
  notaId: string;
  weight: string;
  service: string;
  amountPayment: string;
  price: string;
  perprice: string;
  name: string;
  noTelp: string;
  address: string;
  createdBy: string;
  fkAuthor: number;
  dateIn: string;
  dateDone: string;
  dateOut: string;
  datePayment: string;
  status: string;
  statusTaken: string;
  deletedAt?: string;
  notes: string;
  cashier: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerApi {
  message: string;
  data: Customer[];
}
export interface Customer {
  id: number;
  name: string;
  address: string;
  noTelp: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ActivityApi {
  message: string;
  data: Activity[];
}
export interface Activity {
  id: number;
  action: string;
  notaId: string;
  name: string;
  time: string;
  createdAt: string;
  updatedAt: string;
}
