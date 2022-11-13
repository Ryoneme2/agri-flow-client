/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import LoginButton from '../../components/Login/LoginButton';
import BoxLogin from '../../components/Layouts/BoxLogin';

const Login_SSO = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});

  const handlerLogout = async () => {
    googleLogout();
    console.log('logged out');
  };

  const handleGoogleOnSuccess = async (credentialResponse) => {
    try {
      console.log(credentialResponse);
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v2/tokeninfo?access_token=${credentialResponse.access_token}`
      );

      const apiResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/loginSSO`,
        {
          token: credentialResponse.access_token,
        }
      );

      console.log(apiResponse.data.data);
      setPerson(res.data);
      localStorage.setItem('access_token', apiResponse.data.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleOnSuccess,
    onError: (x) => {
      console.log(x);
    },
  });

  if (Object.values(person).length <= 0)
    return (
      <BoxLogin>
        <div className="flex-1 flex-col flex justify-center items-center">
          <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
            ลงชื่อเข้าใช้
          </h1>

          <LoginButton
            context={'ลงชื่อเข้าใช้ด้วย Line'}
            icon={'/icon/87386-line-logo.png'}
          />
          <LoginButton
            onClick={() => login()}
            context={'ลงชื่อเข้าใช้ด้วย Google'}
            icon={'/icon/icons8-google.svg'}
          />
          <LoginButton
            context={'ลงชื่อเข้าใช้ด้วย Facebook'}
            icon={'/icon/icons8-facebook.svg'}
          />

          <div className="inline-flex justify-center items-center sm:w-[18rem] w-full">
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
