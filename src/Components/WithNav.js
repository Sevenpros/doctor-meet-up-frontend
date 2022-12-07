import React from 'react';
import { Outlet } from 'react-router';
import SideNav from './sideNav';

const WithNav = () => (
  <>
    <SideNav />
    <Outlet />
  </>
);
export default WithNav;
