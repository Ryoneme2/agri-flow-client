/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';
import axios, { AxiosError } from 'axios';

const ForgotPassword = () => {
  // Provide a custom `fetch` implementation as an option
  const [email, setEmail] = useState('');

  const onClickHandle = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/resetPasswordRequest`,
        {
          email,
        }
      );
    } catch (e) {
      if (e instanceof AxiosError) {
      }
    }
  };

  return (
    <BoxLogin>
      <div className="flex-1 flex-col flex justify-center items-center">
        <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
          ลืมรหัสผ่าน
        </h1>
        <InputLogin
          onChange={(e) => setEmail(e.target.value)}
          type={'text'}
          value={email}
          placeholder={'อีเมล...'}
        />
        <InputLogin
          onClick={onClickHandle}
          type={'submit'}
          value={'ยืนยัน'}
          css={'justify-center text-center'}
          color={'submit'}
        />
      </div>
    </BoxLogin>
  );
};

export default ForgotPassword;
