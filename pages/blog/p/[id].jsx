import React, { useEffect, useState } from 'react';
import { TypographyStylesProvider } from '@mantine/core';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
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
      <div className="container max-w-[40rem] mx-auto my-10">
        <div>
          <h1 className="text-[2.1rem] mb-4 font-bold h-auto overflow-y-hidden">
            {data?.blogContent?.title}
          </h1>
        </div>
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.blogContent?.content,
            }}
          />
        </TypographyStylesProvider>
      </div>
    </>
  );
};

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
// const res = await axios.get(
//   `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/p/1`
// );

//   // Pass data to the page via props
//   return { props: { data: res.data } };
// }

export default BlogOne;
