import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Home_login from '../components/Home/Home_login';
import Home_nonlogin from '../components/Home/Home_nonlogin';
import SuggustTopic from '../components/Home/suggustTopic';
import Blog from '../components/Blog/Blog';

const LandingNonLogin = () => {
  const [token, setToken] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem('access_token');
    setToken(localToken);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('access_token');
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/p`,
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
  }, []);

  if (token) return <Home_login />;
  return (
    <Home_nonlogin
      blog={
        <SuggustTopic
          Topic={'บทความตาม หมวดหมู่'}
          Children={
            <>
              <Blog />
            </>
          }
        />
      }
    />
  );
};

export default LandingNonLogin;
