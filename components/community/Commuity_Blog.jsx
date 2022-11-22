/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuggestTopic from '../Home/suggustTopic';
import Blog from '../Blog/Blog';
import NewBlog from '../../pages/blog/newBlog';
import ButtonPost from '../Button';
import { useRouter } from 'next/router';

const CommunityBlog = ({ id }) => {
  const [token, setToken] = useState('');
  const [blogSuggest, setBlogSuggest] = useState([]);
  const [loading, setLoading] = useState(false);
  const tagNum = 5;
  const router = useRouter();

  useEffect(() => {
    try {
      setLoading(true);

      const localToken = localStorage.getItem('access_token');
      setToken(localToken);

      const getData = async () => {
        const res = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/c/${id}`
        );
        const [blog] = await Promise.all([res]);
        setBlogSuggest(blog.data?.data || []);
        console.log('blog', blog.data?.data || []);
      };

      getData();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return (
    <>
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
