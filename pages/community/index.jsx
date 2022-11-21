import React from 'react';

import Narbarlogin from '../../components/Navbar/Navbarlogin';
import CommuCard from '../../components/community/Commu_card';
import CommumitySidebarMini from '../../components/community/Community_sidebar';
import Link from 'next/link';

const CommuLanding = () => {
  return (
    <>
      {/* <Narbarlogin /> */}
      <div className="w-[90%] mx-auto pt-4">
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-3">
            <div>
              <CommuCard />
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="w-full">
              <button className="w-11/12 mx-3 rounded-md p-1">
                <Link href="./community/create_commu">สร้างชุมชนของท่าน</Link>
              </button>
              <h1 className="px-3 text-[1.3rem] text-[#1C658C]">
                ชุมชนของท่าน
              </h1>
              {/* <CommumitySidebarMini /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommuLanding;
