import React, { lazy, Suspense } from 'react';
import Loading from '../../components/Common/Loading';

const Contact = lazy(() => import('./index'));

const ContactLoadable = () => (
  <Suspense fallback={<Loading />}>
    <Contact />
  </Suspense>
);

export default ContactLoadable;
