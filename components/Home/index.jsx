import React, { useState, useEffect } from 'react';

import Home_login from './Home_login';
import Home_nonlogin from './Home_nonlogin';
import SuggustTopic from './suggustTopic';
import Blog from '../Blog/Blog';
import axios from 'axios';

const LandingNonLogin = () => {
  const [token, setToken] = useState('');
  const [blogSuggest, setBlogSuggest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const localToken = localStorage.getItem('access_token');
      setToken(localToken);

      const getData = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/p`
        );
        console.log(res.data);
        setBlogSuggest(res.data?.data || []);
      };
      getData();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <>
        <div className="loading"></div>
      </>
    );

  if (token) return <Home_login suggestBlog={blogSuggest} />;
  return (
    <Home_nonlogin
      blog={
        <SuggustTopic
          Topic={'บทความตาม หมวดหมู่'}
          Children={
            <>
              {blogSuggest.map((blog) => {
                return <Blog blog={blog} key={blog.id} />;
              })}
            </>
          }
        />
      }
    />
  );
};

export default LandingNonLogin;
