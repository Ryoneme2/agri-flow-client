/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';

const Login_email = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});
  const [color, setColor] = useState({ email: '', password: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitClick = (data) => {
    console.log(data);
    setColor({ email: 'primary', password: 'primary' });
  };

  useEffect(() => {
    errors.email ? setColor({ email: 'warn' }) : console.log('email verified');
    errors.password
      ? setColor({ password: 'warn' })
      : console.log('password verified');
  }, [errors]);

  const handleOnChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(errors);
  //console.log(errors.email?.message ? 'verified' : setColor('warn'));

  /*
  const rx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g).test(
    'adsfsadf@gmail.cm'
  );
  console.log(rx);
  */

  const [user, setUser] = useState({ email: '', password: '' });

  if (Object.values(person).length <= 0)
    return (
      <BoxLogin>
        <div className="flex-1 flex-col flex justify-center items-center">
          <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
            ลงชื่อเข้าใช้
          </h1>
          <form onSubmit={handleSubmit(onSubmitClick)}>
            <InputLogin
              type={'email'}
              name={'email'}
              register={register('email', {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g,
                  message: 'Pattern error naka',
                },
                required: 'email required!',
              })}
              onChange={handleOnChange}
              value={user.email}
              color={color.email}
              placeholder={'ชื่อผู้ใช้หรืออีเมล...'}
            />
            <InputLogin
              type={'password'}
              name={'password'}
              register={register('password', {
                required: 'password required!',
              })}
              onChange={handleOnChange}
              value={user.password}
              color={color.password}
              placeholder={'รหัสผ่าน...'}
            />
            <InputLogin
              type={'submit'}
              value={'ยืนยัน'}
              css={'justify-center text-center'}
              color={'submit'}
            />
            <div className="flex justify-between text-[#1C658C] text-[0.6rem] sm:text-[0.8rem] sm:w-[18rem] w-full px-1">
              <div>
                <a href="./signup" className="underline underline-offset-2">
                  สมัครบัญชีผู้ใช้
                </a>
              </div>
              <div>
                <a
                  href="./forgot-password"
                  className="underline underline-offset-2"
                >
                  จำรหัสไม่ได้
                </a>
              </div>
            </div>
          </form>
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
