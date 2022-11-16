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
import Section from '../../components/Section/Section';
import SuggustTopic from '../../components/home/suggustTopic';

const LandingNonLogin = () => {
  return (
    <>
      <Navbarlogin />
      <div className="grid grid-cols-12 w-full sm:w-[90%] mx-auto mt-5 pr-8 pl-4">
        <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col">
          <div className="hidden md:grid grid-cols-2 mb-6 ">
            <div className="hidden md:grid mx-4 mb-5 w-full">
              <h1 className="text-xl overflow-hidden">บุคคลที่ติดตาม</h1>
              <div className="">
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div className="hidden md:contents mx-4 mb-5 w-full">
            <h1 className="text-xl overflow-hidden">หมวดหมู่ที่เข้าชมบ่อย</h1>
            <div className="flex flex-wrap">
              <Tag linkto={''} tagName={'โรคในพืชยืนต้น'} />
              <Tag linkto={''} tagName={'โรคในพืชล้มลุก'} />
              <Tag linkto={''} tagName={'วัชพืช'} />
              <Tag linkto={''} tagName={'แมลงศัตรูพืช'} />
              <Tag linkto={''} tagName={'สัตว์'} />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-flow-col justify-between auto-cols-max overflow-x-auto mb-5">
            <CommunityBlock />
            <CommunityBlock />
            <CommunityBlock />
            <CommunityBlock />
          </div>
          <div className="flex md:hidden place-items-center mx-3">
            <h1 className="sm:flex md:hidden hidden text-xl overflow-hidden min-w-[5rem]">
              หมวดหมู่ :
            </h1>
            <div className="flex flex-wrap">
              <Tag linkto={''} tagName={'โรคในพืชยืนต้น'} />
              <Tag linkto={''} tagName={'โรคในพืชล้มลุก'} />
              <Tag linkto={''} tagName={'วัชพืช'} />
              <Tag linkto={''} tagName={'แมลงศัตรูพืช'} />
              <Tag linkto={''} tagName={'สัตว์'} />
            </div>
          </div>

          <SuggustTopic
            Topic={'บทความสำหรับคุณ'}
            Children={
              <>
                <Blog />
                <Blog />
              </>
            }
          />
          <SuggustTopic
            Topic={'บทความที่คุณติดตาม'}
            Children={
              <>
                <Blog />
              </>
            }
          />
          <SuggustTopic Topic={'บทความน่าสนใจ'} />
        </div>
      </div>
    </>
  );
};

export default LandingNonLogin;
