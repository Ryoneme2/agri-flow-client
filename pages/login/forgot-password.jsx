/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';

const ForgotPassword = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});

  if (Object.values(person).length <= 0)
    return (
      <BoxLogin>
        <div className="flex-1 flex-col flex justify-center items-center">
          <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
            ลืมรหัสผ่าน
          </h1>
          <InputLogin type={'text'} placeholder={'อีเมล...'} />
          <InputLogin
            type={'submit'}
            value={'ยืนยัน'}
            css={'justify-center text-center'}
            color={'submit'}
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

export default ForgotPassword;
