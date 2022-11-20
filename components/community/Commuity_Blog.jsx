import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuggestTopic from '../Home/suggustTopic';
import Blog from '../Blog/Blog';

const CommunityBlog = () => {
  const [token, setToken] = useState('');
  const [blogSuggest, setBlogSuggest] = useState([]);
  const [loading, setLoading] = useState(false);
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

        const [blog] = await Promise.all([res]);
        setBlogSuggest(blog.data?.data || []);
      };

      getData();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {blogSuggest.map((blog) => {
        return <Blog blog={blog} key={blog.id} />;
      })}
    </>
  );
};

export default CommunityBlog;
