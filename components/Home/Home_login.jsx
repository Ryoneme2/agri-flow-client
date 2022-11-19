import React, { useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const Navbarlogin = dynamic(() => import('../Navbar/Navbarlogin'), {
  ssr: false,
});

const NavbarNonlogin = dynamic(() => import('../Navbar/NavbarNonlogin'), {
  ssr: false,
});

import SidebarLogin from './Sidebar_login';
import SidebarNonLogin from './Sidebar_nonlogin';
import CommunityBar from './Community_bar';
import TagGroup from './TagGroup';
import SubHomeLayout from '../Layouts/SubHomeLayout';

import { homeContext } from '../../context/store';

const LandingNonLogin = ({ children }) => {
  let hidden = '';

  const { isLogin } = useContext(homeContext);

  // tag ? (content = 'hidden') : (content = '');

  return (
    <>
      {isLogin ? <Navbarlogin /> : <NavbarNonlogin />}
      <SubHomeLayout>
        <div className="col-span-12 md:col-span-3 hidden md:flex flex-row md:flex-col">
          {isLogin ? <SidebarLogin /> : <SidebarNonLogin />}
        </div>

        <div className="col-span-12 md:col-span-9">
          <CommunityBar content={hidden} />
          <div className="flex md:hidden place-items-center mx-3">
            <TagGroup />
          </div>
          <div className={hidden}>{/* default home content */}</div>
          {children}
        </div>
      </SubHomeLayout>
    </>
  );
};

export default LandingNonLogin;
