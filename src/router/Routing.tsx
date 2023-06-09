import { memo, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import pages, { NotFound } from '@pages';

import { App } from '../App';
import { RouteType } from './types';

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
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="not-found" />} />
          </Routes>
        </App>
      </Suspense>
    </BrowserRouter>
  );
});

Routing.displayName = 'Routing';
