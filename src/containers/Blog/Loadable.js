import React, { lazy, Suspense } from 'react';
import Loading from '../../components/Common/Loading';

const Dev = lazy(() => import('./index'));

const BlogLoadable = () => (
  <Suspense fallback={<Loading />}>
    <Dev />
  </Suspense>
);

export default BlogLoadable;
