import React, { useState, useEffect } from 'react';

import Home_login from '../../components/Home/Home_login';
import Home_nonlogin from '../../components/Home/Home_nonlogin';

const LandingNonLogin = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('access_token');
    setToken(localToken);
  }, []);

  if (token) return <Home_login />;
  return <Home_nonlogin />;
};

export default LandingNonLogin;
