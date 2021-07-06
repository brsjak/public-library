import { About, Books, Borrow, Registration } from '../containers';

export const Routes = [
  {
    path: '/',
    exact: true,
    redirectPath: '/about',
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/register',
    component: Registration,
  },
  {
    path: '/books',
    exact: true,
    component: Books,
  },
  {
    path: '/borrow',
    exact: true,
    component: Borrow,
  },
];
