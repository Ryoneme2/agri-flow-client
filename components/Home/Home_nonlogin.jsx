import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Avatar } from '@mantine/core';

const NavbarNonlogin = dynamic(() => import('../Navbar/NavbarNonlogin'), {
  ssr: false,
});
import Blog from '../Blog/Blog';
import CommunityBlock from '../community/Community_block';
import ShowUserNum from '../staticUser/ShowUserNum';
import Tag from '../Tag';
import SuggustTopic from './suggustTopic';

const LandingNonLogin = ({ children }) => {
  let content;
  // tag ? (content = 'hidden') : (content = '');

  return (
    <>
      <NavbarNonlogin />
      <div className="grid grid-cols-12 w-full sm:w-[90%] mx-auto mt-5 pr-8 pl-4">
        <div className="col-span-12 md:col-span-3 hidden md:flex flex-row md:flex-col">
          <div className="grid grid-cols-2 mb-3">
            <ShowUserNum amount={'250000'} name={'บล็อก'} />
            <ShowUserNum amount={'250000'} name={'บัญชีผู้ใช้'} />
            <div className="flex justify-center col-span-2 mb-3">
              <Avatar.Group spacing="sm">
                <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                <Avatar radius="xl">+5</Avatar>
              </Avatar.Group>
            </div>
            <hr className="col-span-2 w-11/12 h-[2px] bg-[#000000] border-0 m-1" />
          </div>
          <div className="contents mx-4 mb-5 w-full">
            <h1 className="text-xl overflow-hidden text-[#1C658C]">หมวดหมู่</h1>
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
          <div
            className={`${content} grid grid-flow-col justify-between auto-cols-max overflow-x-auto mb-5`}
          >
            <CommunityBlock />
            <CommunityBlock />
            <CommunityBlock />
            <CommunityBlock />
          </div>
          <div className="flex md:hidden place-items-center mx-3">
            <h1 className="sm:flex md:hidden hidden text-xl overflow-hidden min-w-[5rem] text-[#1C658C]">
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
          <div className={content}>
            <SuggustTopic
              Topic={'บทความน่าสนใจ'}
              Children={
                <>
                  <Blog />
                  <Blog />
                </>
              }
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default LandingNonLogin;
