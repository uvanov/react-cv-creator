import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <header/>
      <nav/>
      <Outlet/>
    </>
  );
};

export default Layout;