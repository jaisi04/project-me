import React, { lazy, Suspense } from 'react';
import Loading from '../../components/Common/Loading';

const NotFound = lazy(() => import('./index'));

const NotFoundLoadable = () => (
  <Suspense fallback={<Loading />}>
    <NotFound />
  </Suspense>
);

export default NotFoundLoadable;
