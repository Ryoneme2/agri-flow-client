import React, { useState, useEffect } from 'react';

import Home_login from '../components/Home/Home_login';
import Home_nonlogin from '../components/Home/Home_nonlogin';
import SuggustTopic from '../components/Home/suggustTopic';
import Blog from '../components/Blog/Blog';

const LandingNonLogin = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('access_token');
    setToken(localToken);
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
