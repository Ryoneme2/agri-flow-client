/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuggestTopic from '../Home/suggustTopic';
import Blog from '../Blog/Blog';
import NewBlog from '../../pages/blog/newBlog';
import ButtonPost from '../Button';
import { useRouter } from 'next/router';

const CommunityBlog = ({ id, blogSuggest, groupMember }) => {
  const [token, setToken] = useState('');
  const tagNum = 5;
  const router = useRouter();

  if (!blogSuggest) return <></>;
  return (
    <>
      {groupMember ? (
        <ButtonPost
          context={'สร้างบล็อคในชุมชนนี้'}
          css={'w-full'}
          onClick={() => {
            router.push({
              pathname: '/blog/newBlog',
              query: { to: id },
            });
          }}
        />
      ) : (
        <></>
      )}

      {blogSuggest.length !== 0 ? (
        blogSuggest.map((blog) => {
          return <Blog blog={blog} key={blog.id} />;
        })
      ) : (
        <>
          <div className="flex flex-col justify-center items-center mt-3">
            <h1 className="text-2xl">กลุ่มนี่ยังไม่มีบทความใดๆ</h1>
            <div className="mt-4">
              <img
                className="max-w-[15rem] md:max-w-[23rem]"
                src="/icon/undraw_searching_re_3ra9.svg"
                alt={''}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CommunityBlog;
