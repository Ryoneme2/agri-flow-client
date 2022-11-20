import React, { useState, useEffect } from 'react';

import Home_login from './Home_login';
import SuggestTopic from './suggustTopic';
import Blog from '../Blog/Blog';
import axios from 'axios';
import { homeContext } from '../../context/store';
import LoadingBlog from '../Blog/LoadingBlog';

const LandingNonLogin = () => {
  const [token, setToken] = useState('');
  const [blogSuggest, setBlogSuggest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tagSuggest, setTagSuggest] = useState([]);
  const tagNum = 5;

  useEffect(() => {
    try {
      setLoading(true);
      const localToken = localStorage.getItem('access_token');
      setToken(localToken);

      const getData = async () => {
        const res = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/p`
        );
        console.log(res.data);
        const res2 = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/utilities/categories?limit=${tagNum}`
        );

        const [blog, tag] = await Promise.all([res, res2]);
        setTagSuggest(tag.data?.data || []);
        setBlogSuggest(blog.data?.data || []);
      };

      getData();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  console.log(!localStorage.getItem('access_token') ? false : true);

  return (
    <>
      <homeContext.Provider
        value={{
          tagSuggest,
          isLogin: !localStorage.getItem('access_token') ? false : true,
        }}
      >
        <Home_login isLogin={!token ? 'false' : 'true'}>
          <SuggestTopic Topic={!token ? 'บทความน่าสนใจ' : 'บทความสำหรับคุณ'}>
            {!loading ? (
              <div className="ml-2">
                <LoadingBlog />
              </div>
            ) : (
              <></>
            )}
            {blogSuggest.map((blog) => {
              return <Blog blog={blog} key={blog.id} />;
            })}
          </SuggestTopic>
          {!token ? (
            <></>
          ) : (
            <>
              <SuggestTopic Topic={'บทความที่คุณติดตาม'} />
              <SuggestTopic Topic={'บทความน่าสนใจ'} />
            </>
          )}
        </Home_login>
      </homeContext.Provider>
    </>
  );
};

export default LandingNonLogin;
