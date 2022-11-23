import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Line = () => {
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    const postData = async () => {
      try {
        if (!code) return;
        const response = await axios.post(
          'https://api.line.me/oauth2/v2.1/token',
          new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'http://localhost:3000/auth/line',
            client_id: '1657675273',
            client_secret: 'c042dad6e0b174f8bb811f81125a5bf0',
          })
        );

        console.log({ token: response.data.id_token });

        const resBE = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/loginSSOLine`,
          {
            token: response.data.id_token,
          }
        );

        if (resBE.status !== 200) throw new Error();

        localStorage.setItem('access_token', resBE.data.data.token);
        localStorage.setItem('user', JSON.stringify(resBE.data.data.user));

        router.push('/');
      } catch (e) {
        console.error(e);
      }
    };
    postData();
  }, [code]);
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="loading"></div>
    </div>
  );
};

export default Line;
