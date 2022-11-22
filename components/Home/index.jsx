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
          `${process.env.NEXT_PUBLIC_API_URL}${contentLink}`
        );
        console.log(res.data);
        const res2 = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/utilities/categories?limit=${tagNum}`
        );

        const [blog, tag] = await Promise.all([res, res2]);
        setTagSuggest(tag.data?.data || []);
        setBlogSuggest(blog.data?.data || []);
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

  const scrollMore = (newBlog) => {
    if (blogMore.items.length >= 15) {
      setBlogMore((prev) => {
        return {
          ...prev,
          hasMore: false,
        };
      });
    }
    setBlogMore((prev) => {
      console.log('newblog : ', newBlog);
      return {
        ...prev,
        items: blogMore.items.concat(newBlog),
      };
    });
    console.log('blog', blogSuggest);
  };

  return (
    <>
      <homeContext.Provider
        value={{
          tagSuggest,
          isLogin: !localStorage.getItem('access_token') ? false : true,
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
              // <InfiniteScroll
              //   dataLength={blogMore.items.length} //This is important field to render the next data
              //   next={() => scrollMore(blogSuggest)}
              //   hasMore={blogMore.hasMore}
              //   loader={
              //     <div className="ml-2">
              //       <LoadingBlog />
              //     </div>
              //   }
              //   endMessage={
              //     <p style={{ textAlign: 'center' }}>
              //       <b>Yay! You have seen it all</b>
              //     </p>
              //   }
              // >
              //   {console.log('blog โว้ยย', blogSuggest)}
              //   {console.log(blogMore.items.length)}
              //   {blogMore.items.map((blog) => {
              //     return <Blog blog={blog} key={blog.id} />;
              //   })}
              // </InfiniteScroll>

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
