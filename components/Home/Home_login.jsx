import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Navbarlogin = dynamic(() => import('../Navbar/Navbarlogin'), {
  ssr: false,
});
const NavbarNonlogin = dynamic(() => import('../Navbar/NavbarNonlogin'), {
  ssr: false,
});
import Blog from '../Blog/Blog';
import CommunityBlock from '../community/Community_block';
import Tag from '../Tag';
import Section from '../Section/Section';
import SuggustTopic from './suggustTopic';
import AvatarText from '../staticUser/AvatarText';
import UpgateAccount from '../Sidebar/UpgateAccount';

const LandingNonLogin = ({ blog }) => {
  let content = '';
  blog ? (content = 'hidden') : (content = '');

  return (
    <>
      <Navbarlogin />
      <div className="grid grid-cols-12 w-full sm:w-[90%] mx-auto mt-5 pr-8 pl-4">
        <div className="col-span-12 md:col-span-3 hidden md:flex flex-row md:flex-col">
          <div className="grid mb-6">
            <UpgateAccount />
            <div className="w-full">
              <h1 className="text-xl overflow-hidden">บุคคลที่ติดตาม</h1>
              <div>
                <AvatarText
                  imgProfile={'/images/profile/jammy.jpg'}
                  name={'Pummy'}
                />
                <AvatarText
                  imgProfile={'/images/profile/jammy.jpg'}
                  name={'Jamie'}
                />
                <AvatarText
                  imgProfile={'/images/profile/jammy.jpg'}
                  name={'Fourthy'}
                />
              </div>
            </div>
          </div>
          <div className="contents mx-4 mb-5 w-full">
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
          <div
            className={`${content} grid grid-flow-col justify-between auto-cols-max overflow-x-auto mb-5`}
          >
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
          <div className={content}>
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
          {blog}
        </div>
      </div>
    </>
  );
};

export default LandingNonLogin;
