import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Navbarlogin = dynamic(
  () => import('../../components/Navbar/Navbarlogin'),
  { ssr: false }
);
const NavbarNonlogin = dynamic(
  () => import('../../components/Navbar/NavbarNonlogin'),
  { ssr: false }
);
import Blog from '../../components/Blog/Blog';
import CommunityBlock from '../../components/community/Community_block';
import Profiles from '../../components/staticUser/profiles';
import ShowUserNum from '../../components/staticUser/showUserNum';
import Tag from '../../components/Tag';

const Landing = () => {
  return (
    <>
      <NavbarNonlogin />
      <div className="grid grid-cols-12 w-screen mt-5 pr-8">
        <div className="col-span-3">
          <div className="grid grid-cols-2 mb-6">
            <ShowUserNum amount={'250000'} name={'บล็อก'} />
            <ShowUserNum amount={'250000'} name={'บัญชีผู้ใช้'} />
            <Profiles
              imgProfile={'/images/profile/jammy.jpg'}
              css={'my-5 col-span-2'}
            />
          </div>
          <hr className="my-4 w-10/12 h-[1px] bg-[#A1C0D0] border-0" />
          <div className="m-5">
            <h1 className="text-xl">หมวดหมู่</h1>
            <div className="grid grid-flow-col auto-cols-max">
              <Tag linkto={''} tagName={'โรคในพืชยืนต้น'} />
              <Tag linkto={''} tagName={'โรคในพืชล้มลุก'} />
              <Tag linkto={''} tagName={'วัชพืช'} />
              <Tag linkto={''} tagName={'แมลงศัตรูพืช'} />
              <Tag linkto={''} tagName={'สัตว์'} />
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-4 overflow-y-auto md:overflow-y-hidden">
            <CommunityBlock />
            <CommunityBlock />
            <CommunityBlock />
            <CommunityBlock />
          </div>
          <div>
            <div className="inline-flex items-center w-screen row">
              <h1 className="w-1/6 text-center text-xl">บทความน่าสนใจ</h1>
              <hr className="w-full h-[2px] bg-[#1C658C] border-0" />
            </div>
            <Blog />
            <Blog />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
