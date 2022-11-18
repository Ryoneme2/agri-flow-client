import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Navbarlogin = dynamic(() => import('../Navbar/Navbarlogin'), {
  ssr: false,
});
import SidebarLogin from './Sidebar_login';
import CommunityBar from './Community_bar';
import TagGroup from './TagGroup';

const LandingNonLogin = ({ children }) => {
  let hidden = '';
  // tag ? (content = 'hidden') : (content = '');

  return (
    <>
      <Navbarlogin />
      <div className="grid grid-cols-12 w-full sm:w-[90%] mx-auto mt-5 pr-8 pl-4">
        <div className="col-span-12 md:col-span-3 hidden md:flex flex-row md:flex-col">
          <SidebarLogin />
        </div>

        <div className="col-span-12 md:col-span-9">
          <CommunityBar content={hidden} />
          <div className="flex md:hidden place-items-center mx-3">
            <TagGroup />
          </div>
          <div className={hidden}>{/* default home content */}</div>
          {children}
        </div>
      </div>
    </>
  );
};

export default LandingNonLogin;
