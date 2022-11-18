import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const NavbarNonlogin = dynamic(() => import('../Navbar/NavbarNonlogin'), {
  ssr: false,
});
import Blog from '../Blog/Blog';
import CommunityBlock from '../community/Community_block';
import Tag from '../Tag';
import SuggustTopic from './suggustTopic';

import SidebarNonLogin from './Sidebar_nonlogin';
import CommunityBar from './Community_bar';
import TagGroup from './TagGroup';

const LandingNonLogin = ({ children }) => {
  let hidden;
  // const [tagPage, setTagPage] = useState(false);
  // tagPage ? (hidden = 'hidden') : (hidden = '');

  return (
    <>
      <NavbarNonlogin />
      <div className="grid grid-cols-12 w-full sm:w-[90%] mx-auto mt-5 pr-8 pl-4">
        <div className="col-span-12 md:col-span-3 hidden md:flex flex-row md:flex-col">
          <SidebarNonLogin tagFetch={'/api/v1/utilities/categories?limit='} />
        </div>

        <div className="col-span-12 md:col-span-9">
          <CommunityBar />
          <div className="flex md:hidden place-items-center mx-3">
            <TagGroup tagFetch={'/api/v1/utilities/categories?limit='} />
          </div>
          <div className={hidden}>{/*non login defualt content */}</div>
          {children}
        </div>
      </div>
    </>
  );
};

export default LandingNonLogin;
