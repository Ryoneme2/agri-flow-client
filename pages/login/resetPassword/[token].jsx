/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import InputLogin from '../../../components/Login/InputLogin';
import BoxLogin from '../../../components/Layouts/BoxLogin';
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;

  if (!token)
    return (
      <>
        <BoxLogin>
          <h1 className="text-2xl sm:text-3xl text-red-500">Access Denied.</h1>
        </BoxLogin>
      </>
    );

  return (
    <>
      <BoxLogin>
        <div className="flex-1 flex-col flex justify-center items-center">
          <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
            เปลี่ยนรหัสผ่าน
          </h1>
          <InputLogin type={'text'} placeholder={'รหัสผ่านใหม่...'} />
          <InputLogin type={'text'} placeholder={'ยืนยันรหัสผ่าน...'} />
          <InputLogin
            type={'submit'}
            value={'ยืนยัน'}
            css={'justify-center text-center'}
            color={'submit'}
          />
        </div>
      </BoxLogin>
      ;
    </>
  );
};

export default ResetPassword;
