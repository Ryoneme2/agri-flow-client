import React, { useState, useEffect } from 'react';

import Home_login from './Home_login';
import Home_nonlogin from './Home_nonlogin';
import SuggustTopic from './suggustTopic';
import Blog from '../Blog/Blog';

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
