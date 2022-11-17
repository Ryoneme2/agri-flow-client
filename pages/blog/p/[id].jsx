import React, { useEffect, useState } from 'react';
import { TypographyStylesProvider } from '@mantine/core';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('../../../components/Sidebar/Sidebar'), {
  ssr: false,
});
const Navbar = dynamic(() => import('../../../components/Navbar/Navbarlogin'), {
  ssr: false,
});

const BlogOne = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('access_token');
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/p/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

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
        <div className="w-full md:w-[70%] flex justify-center mx-10  md:mx-0 ">
          <div className="max-w-[50rem] mx-5 lg:mx-auto my-10 ">
            <div>
              <h1 className="text-[1.5rem] md:text-[2.5rem] mb-4 font-bold h-auto overflow-y-hidden">
                {data?.blogContent?.title}
              </h1>
            </div>
            <TypographyStylesProvider>
              <div
                className="text-[1rem] sm:text-[1.15] md:text-[1.25rem] text-light"
                dangerouslySetInnerHTML={{
                  __html: data?.blogContent?.content,
                }}
              />
            </TypographyStylesProvider>
          </div>
        </div>
        <div className="w-[0] md:w-[30%]  flex justify-center my-10">
          <div className="w-[75%] ">
            <Sidebar data={data} />
          </div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};
export default BlogOne;
