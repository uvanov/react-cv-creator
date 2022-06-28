import React from 'react';
import { Outlet } from 'react-router-dom';

import StyledGrid from './Layout.styles';
import Header from '@components/Header/Header';
import Navigation from '@components/Navigation/Navigation';

const Layout: React.FC = () => {
  return (
    <StyledGrid
      columns={ ['1fr', '3fr'] }
      rows={ [ '1fr', '20fr' ] }
    >
      <Header/>
      <Navigation/>
      <Outlet/>
    </StyledGrid>
  );
};

export default Layout;