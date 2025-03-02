export type ProtectedRoute = {
  path: string;
  type: 'auth' | 'all' | 'user' | 'admin';
};

export type User = {
  id: number;
  nik: string;
  email: string;
  name: string;
  address: string;
  role: 'admin' | 'user';
  noTelp: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export type UserDisplayedProps = {
  id: string;
  user_id: string;
  name: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
};
