import { signIn, signOut } from 'next-auth/react';

export const login = async (email: string, password: string) => {
  const result = await signIn('credentials', {
    redirect: false,
    email,
    password,
  });
  return result;
};

export const logout = async () => {
  await signOut({ redirect: true, callbackUrl: '/login' });
};