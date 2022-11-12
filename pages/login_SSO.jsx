/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import LoginButton from '../components/LoginButton';
import BoxLogin from '../components/Layouts/BoxLogin';

const Login_SSO = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem('google_access_token');
        if (!token) return;
        const res = await axios.get(
          `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
        );
        setPerson(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  const handlerLogout = async () => {
    await googleLogout();
    console.log('logged out');
  };

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse);
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credentialResponse.credential}`
      );
      console.log(res.data);
      setPerson(res.data);
      localStorage.setItem(
        'google_access_token',
        credentialResponse.credential
      );
    },
  });

  if (Object.values(person).length <= 0)
    return (
      <BoxLogin>
        <div className="flex-1 flex-col flex justify-center items-center">
          <h1 className="font-senibold text-[1.7rem] text-[#1C658C] my-3">
            ลงชื่อเข้าใช้
          </h1>

          <LoginButton
            context={'ลงชื่อเข้าใช้ด้วย Line'}
            icon={'/icon/87386-line-logo.png'}
          />
          <LoginButton
            onClick={() => login(credentialResponse)}
            context={'ลงชื่อเข้าใช้ด้วย Google'}
            icon={'/icon/icons8-google.svg'}
          />
          <LoginButton
            context={'ลงชื่อเข้าใช้ด้วย Facebook'}
            icon={'/icon/icons8-facebook.svg'}
          />

          <div className="inline-flex justify-center items-center w-9/12">
            <hr className="my-4 w-5/12 h-[1px] bg-[#A1C0D0] border-0" />
            <p className="w-2/12 text-center text-[#A1C0D0] ">or</p>
            <hr className="my-4 w-5/12 h-[1px] bg-[#A1C0D0] border-0" />
          </div>

          <LoginButton
            context={'ลงชื่อเข้าใช้ด้วย Email'}
            css={'justify-center text-center'}
          />
        </div>
      </BoxLogin>
    );

  return (
    <>
      <h1>ok</h1>
      <button onClick={handlerLogout}>Logout</button>
    </>
  );
};

export default Login_SSO;
