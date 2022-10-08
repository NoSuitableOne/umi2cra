import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routerConfig, { TRouteConfig } from '_config/router';

function renderRoute (configs: Array<TRouteConfig>) {
  return configs.map(route => {
    if (!route.routes) {
      const PageComponent = React.lazy(() => import(`@/pages/${route.element}`));
      return (
        <Route
          key={route.path}
          {...route}
          path={route.path}
          element={
            <Suspense fallback={'loading...'}>
              <PageComponent />
            </Suspense>  
          }
        />
      );
    } else {
      return (
        <Route key={route.path} path={route.path}>
          {renderRoute(route.routes)}
        </Route>
      );
    }
  })
}

function Layout () {
  return (
    <>
      <Routes>
        {renderRoute(routerConfig)}
      </Routes>
    </>
  );
}

export default Layout;
