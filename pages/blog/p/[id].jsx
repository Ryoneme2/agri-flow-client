import React, { useEffect, useState } from 'react';
import { TypographyStylesProvider } from '@mantine/core';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
const Sidebar = dynamic(() => import('../../../components/Sidebar/Sidebar'), {
  ssr: false,
});
const Navbar = dynamic(() => import('../../../components/Navbar/Navbarlogin'), {
  ssr: false,
});

import SuggestTopic from '../../../components/Home/suggustTopic';
import Blog from '../../../components/Blog/Blog';

const BlogOne = () => {
  const [data, setData] = useState('');
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (!id) return;
        const token = localStorage.getItem('access_token');
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/p/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const blogs = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/p/tag/${0}?limit=2`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setOtherBlogs(blogs.data.data);

        console.log(res.data.data);
        setData(res.data.data);
        setLoading(false);
      } catch (e) {
        if (e instanceof AxiosError) {
          console.warn(e.cause);
        }
        console.error(e);
      } finally {
      }
    };
    fetchData();
  }, [id]);

  if (loading || !data) {
    console.log(data);
    return (
      <>
        <Navbar />
        <div className="flex w-screen h-screen justify-center items-center">
          <div className="loading"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-full md:w-[70%] flex justify-center mx-2  md:mx-0 ">
          <div className="max-w-[50rem] mx-5 lg:mx-auto my-2 md:my-10 ">
            <div>
              <h1 className="text-[1.5rem] md:text-[2.5rem] mb-4 font-bold h-auto overflow-y-hidden">
                {data?.blogContent?.title}
              </h1>
            </div>
            <div className="w-full md:w-[calc(70vw-6vmin)] lg:w-[calc(70vw-1.5vmin)] xl:w-[50rem] h-screen absolute z-100 bg-gradient-to-t from-white via-ransparent to-transparent"></div>
            <TypographyStylesProvider>
              <div
                className={clsx(
                  'text-[1rem] sm:text-[1.15] md:text-[1.25rem] text-light',
                  {
                    'h-screen': !data.isPublic,
                  }
                )}
                dangerouslySetInnerHTML={{
                  __html: data?.blogContent?.content,
                }}
              />
            </TypographyStylesProvider>
          </div>
        </div>
        <div className="w-[0] md:w-[30%] flex justify-center my-10 ">
          <div className="w-[75%]">
            <Sidebar data={data} postid={id} />
          </div>
        </div>
      </div>

      <div className="w-full md:w-[70%] my-2">
        <div className="max-w-[50rem] mx-5 lg:mx-auto flex justify-center">
          <button className="bg-[#FFEBB5] flex items-center px-10 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-lock-open"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#82620F"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M8 11v-5a4 4 0 0 1 8 0" />
            </svg>
            <span className="text-[#82620F] ml-2">
              อัพเกรดเป็นระดับพรีเมียมเพื่อรับชม
            </span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-[70%] mt-12">
        <div className="max-w-[50rem] mx-5 lg:mx-auto my-2 md:my-10 ">
          <SuggestTopic Topic={'บทความสำหรับคุณ'}>
            {otherBlogs.map((blog) => {
              return <Blog blog={blog} key={blog.id} />;
            })}
          </SuggestTopic>
        </div>
      </div>
    </>
  );
};
export default BlogOne;
