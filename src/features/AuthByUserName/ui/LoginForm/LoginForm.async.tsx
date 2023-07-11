import { lazy } from 'react';

export const LoginFormAsync = lazy(() => new Promise((res) => setTimeout(() => {
  // @ts-ignore
  res(import('./LoginForm'));
}, 500)));
