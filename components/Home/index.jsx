import React, { useState, useEffect } from 'react';

import Home_login from './Home_login';
import SuggestTopic from './suggustTopic';
import Blog from '../Blog/Blog';
import axios from 'axios';
import { homeContext } from '../../context/store';
import LoadingBlog from '../Blog/LoadingBlog';
import InfiniteScroll from 'react-infinite-scroll-component';

const LandingNonLogin = ({ contentLink }) => {
  const [token, setToken] = useState('');
  const [blogSuggest, setBlogSuggest] = useState([]);
  const [blogFollow, setBlogFollow] = useState([]);
  const [blogRecent, setBlogRecent] = useState([]);
  const [communities, setCommunity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tagSuggest, setTagSuggest] = useState([]);
  const tagNum = 5;

  const params = new URLSearchParams(window.location.search);
  const tagName = params.get('tagName');
  console.log(tagName);

  useEffect(() => {
    try {
      const localToken = localStorage.getItem('access_token');
      setToken(localToken);

      const getData = async () => {
        setLoading(true);
        const res = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}${contentLink}?type=suggest`
        );
        console.log(res.data);
        const res2 = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/utilities/categories?limit=${tagNum}`
        );
        const res3 = !localToken
          ? []
          : axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}${contentLink}?type=follow`,
              {
                headers: {
                  Authorization: localToken,
                },
              }
            );
        const res4 = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}${contentLink}?type=recent`
        );
        const res5 = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/communities`
        );

        const [blog, tag, follow, recent, community] = await Promise.all([
          res,
          res2,
          res3,
          res4,
          res5,
        ]);
        setTagSuggest(tag.data?.data || []);
        setBlogSuggest(blog.data?.data || []);
        setBlogFollow(follow?.data?.data || []);
        setBlogRecent(recent?.data?.data || []);
        setCommunity(community?.data?.data || []);
        console.log('blog ', blogSuggest);
        setLoading(false);
      };

      getData();
    } catch (e) {
      console.error(e);
    }
  }, [contentLink]);

  console.log(!localStorage.getItem('access_token') ? false : true);

  const [blogMore, setBlogMore] = useState({
    items: [
      {
        id: 0,
        blogContent: { title: 'example', content: 'hi, i am testing' },
        create_at: 'just now',
        thumbnail: [''],
        author: { username: 'system' },
        tag: { categoryId: 1, categoryName: 'no tag' },
      },
    ],
    hasMore: true,
  });
  console.log(blogMore);

  return (
    <>
      <homeContext.Provider
        value={{
          tagSuggest,
          isLogin: !localStorage.getItem('access_token') ? false : true,
          communities,
        }}
      >
        <Home_login
          isLogin={!token ? 'false' : 'true'}
          tag={tagName && 'hidden'}
        >
          <SuggestTopic
            Topic={
              tagName
                ? `หมวดหมู่ - ${tagName}`
                : !token
                ? 'บทความน่าสนใจ'
                : 'บทความสำหรับคุณ'
            }
          >
            {loading ? (
              <div className="ml-2">
                <LoadingBlog />
              </div>
            ) : (
              blogSuggest.map((blog) => {
                return <Blog blog={blog} key={blog.id} />;
              })
            )}
          </SuggestTopic>
          {tagName ? (
            <></>
          ) : !token ? (
            <></>
          ) : (
            <>
              <SuggestTopic Topic={'บทความที่คุณติดตาม'}></SuggestTopic>
              <SuggestTopic Topic={'บทความน่าสนใจ'}></SuggestTopic>
            </>
          )}
        </Home_login>
      </homeContext.Provider>
    </>
  );
};

export default LandingNonLogin;
