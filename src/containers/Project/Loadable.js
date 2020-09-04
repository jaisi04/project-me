import React, { lazy, Suspense } from 'react';
import Loading from '../../components/Common/Loading';

const Project = lazy(() => import('./index'));

const ProjectLoadable = () => (
  <Suspense fallback={<Loading />}>
   <Project />
  </Suspense>
);

export default ProjectLoadable;