/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';

const Login_email = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});

  if (Object.values(person).length <= 0)
    return (
      <BoxLogin>
        <div className="flex-1 flex-col flex justify-center items-center">
          <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
            ลงชื่อเข้าใช้
          </h1>
          <InputLogin type={'text'} placeholder={'ชื่อผู้ใช้หรืออีเมล...'} />
          <InputLogin type={'text'} placeholder={'รหัสผ่าน...'} />
          <InputLogin
            type={'submit'}
            value={'ยืนยัน'}
            css={'justify-center text-center'}
            color={'submit'}
          />
          <div className="flex justify-between text-[#1C658C] text-[0.6rem] sm:text-[0.8rem] sm:w-[18rem] w-full px-1">
            <div>
              <a href="#สมัคร" className="underline underline-offset-2">
                สมัครบัญชีผู้ใช้
              </a>
            </div>
            <div>
              <a href="#ลืมรหัส" className="underline underline-offset-2">
                จำรหัสไม่ได้
              </a>
            </div>
          </div>
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

export default Login_email;
