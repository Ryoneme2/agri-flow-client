import React, { useEffect, useState } from 'react';
import { TypographyStylesProvider } from '@mantine/core';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const BlogOne = () => {
  const [data, setData] = useState('<p>wow</p>');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/p/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log(res.data);
        setData(res.data.data);
      } catch (e) {
        if (e instanceof AxiosError) {
          console.warn(e.cause);
        }
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="container mx-auto my-10">
        <div>
          <h1 className="text-[2.1rem] mb-4 font-bold">{data.title}</h1>
        </div>
        <TypographyStylesProvider>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
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
