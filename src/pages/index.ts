import { lazy } from 'react';

import { ROUTES } from '@constants';

export const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ './NotFound/NotFound')
);

export default [
  {
    Element: lazy(() => import(/* webpackChunkName: "Home" */ './Home/Home')),
    name: ROUTES.home.name,
    path: ROUTES.home.path
  },
  {
    Element: lazy(() => import(/* webpackChunkName: "Dashboard" */ './Dashboard/Dashboard')),
    name: ROUTES.dashboard.name,
    path: ROUTES.dashboard.path
  }
];
