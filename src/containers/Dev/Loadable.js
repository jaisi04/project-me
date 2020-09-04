import React, { lazy, Suspense } from 'react';
import Loading from '../../components/Common/Loading';

const Dev = lazy(() => import('./index'));

const ContactLoadable = () => (
  <Suspense fallback={<Loading />}>
    <Dev />
  </Suspense>
);

export default ContactLoadable;
