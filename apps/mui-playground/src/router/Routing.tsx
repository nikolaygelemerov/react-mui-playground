import { memo, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import pages, { NotFound } from '@pages';

import { App } from '../App';
import type { RouteType } from './types';

const renderRoutes = (pagesToRender: RouteType[]) => {
  return pagesToRender.map(({ children, Element, path }) => {
    if (children?.length) {
      return (
        <Route element={<Element />} key={path} path={path}>
          {renderRoutes(children)}
        </Route>
      );
    }

    return <Route element={<Element />} key={path} path={path} />;
  });
};

export const Routing = memo(() => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <App>
          <Routes>
            {renderRoutes(pages)}
            <Route element={<NotFound />} path="not-found" />
            <Route element={<Navigate to="not-found" />} path="*" />
          </Routes>
        </App>
      </Suspense>
    </BrowserRouter>
  );
});

Routing.displayName = 'Routing';
