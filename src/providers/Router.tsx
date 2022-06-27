import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import CreateResume from '../pages/CreateResume';
import Resume from '../pages/Resume';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={ <Layout/> }>
        <Route index element={ <CreateResume/> }/>
        <Route path='resume/:id' element={ <Resume/> }/>
      </Route>
    </Routes>
  );
};

export default Router;