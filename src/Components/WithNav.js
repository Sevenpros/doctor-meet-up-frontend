import React from 'react';
import { Outlet } from 'react-router';
import SideNav from './sideNav';

const WithNav = () => (
  <div className="component-layout">
    <SideNav />
    <Outlet />
  </div>
);
export default WithNav;
