import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const NavbarNonlogin = dynamic(() => import('../Navbar/NavbarNonlogin'), {
  ssr: false,
});
import Blog from '../Blog/Blog';
import CommunityBlock from '../community/Community_block';
import ShowUserNum from '../staticUser/ShowUserNum';
import Tag from '../Tag';
import SuggustTopic from './suggustTopic';
import { Avatar } from '@mantine/core';

const LandingNonLogin = ({ children }) => {
  let content;
  // const [tagPage, setTagPage] = useState(false);
  // tagPage ? (content = 'hidden') : (content = '');

  const [tagSuggest, setTagSuggest] = useState([]);
  const [loading, setLoading] = useState(false);
  const tagNum = 5;

  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/utilities/categories?limit=${tagNum}`
        );
        console.log(res.data);
        setTagSuggest(res.data?.data || []);
      };
      getData();
      console.log('here: ' + tagSuggest);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

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
              {loading ? (
                <div className="loading"></div>
              ) : (
                tagSuggest.map((tag) => {
                  return (
                    <Tag
                      key={''}
                      linkto={`./category/${tag.categoryId}`}
                      tagName={tag.categoryName}
                    />
                  );
                })
              )}
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
              {tagSuggest.map((tag) => {
                return (
                  <Tag
                    key={''}
                    linkto={`./category/${tag.categoryId}`}
                    tagName={tag.categoryName}
                  />
                );
              })}
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
