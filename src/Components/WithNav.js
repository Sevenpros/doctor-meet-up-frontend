import React from 'react';
import { Outlet } from 'react-router';
import SideNav from './sideNav';
import Humburger from './Humburger';

const WithNav = () => (
  <div className="component-layout">
    <Humburger />
    <SideNav />
    <Outlet />
  </div>
);
export default WithNav;
