/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';

const ResetPassword = () => {
  // Provide a custom `fetch` implementation as an option
  const [password, setPassword] = useState('');

  const onClickHandle = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/resetPass`,
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
          เปลี่ยนรหัสผ่าน
        </h1>
        <InputLogin
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={'text'}
          placeholder={'รหัสผ่านใหม่...'}
        />
        <InputLogin type={'text'} placeholder={'ยืนยันรหัสผ่าน...'} />
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

export default ResetPassword;
