/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';
import axios from 'axios';

const Login_email = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});
  const router = useRouter();

  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState({ email: '', password: '' });
  const [err, setErr] = useState({
    isError: false,
    msg: '',
  });

  const setup = { email: '', password: '' };

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  //console.log(formState);

  const handleOnChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitClick = (data) => {
    console.log(data);
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, data)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem('access_token', response.data.data.token);
        setLoading(false);
        router.push('../');
      })
      .catch(function (error) {
        console.log(error);
        setErr({
          isError: true,
          msg: error?.response?.data?.msg || 'ผิดพลาดงงๆ',
        });
        setLoading(false);
      });
    setColor(setup);
    setLoading(true);
  };

  useEffect(() => {
    errors.email
      ? setColor({ email: 'warn' })
      : errors.password
      ? setColor({ password: 'warn' })
      : console.log('verified');
  }, [formState]);

  return (
    <BoxLogin>
      <div className="flex-1 flex-col flex justify-center items-center">
        <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
          ลงชื่อเข้าใช้
        </h1>
        <div className="flex justify-center">
          {err.isError && <small className="text-red-500">{err.msg}</small>}
        </div>
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
            value={user.email}
            onChange={handleOnChange}
            color={color.email}
            errorText={'username invalid'}
            placeholder={'ชื่อผู้ใช้หรืออีเมล...'}
          />
          <InputLogin
            type={'password'}
            name={'password'}
            register={register('password', {
              required: 'password required!',
              minLength: {
                value: 8,
                message: 'should contain more than 8',
              },
            })}
            value={user.password}
            onChange={handleOnChange}
            color={color.password}
            errorText={'password should containsat least 8 characters'}
            placeholder={'รหัสผ่าน...'}
          />
          {loading && (
            <div className="flex justify-center items-center h-[4rem] mb-5">
              <div className="loading"></div>
            </div>
          )}
          {!loading && (
            <InputLogin
              type={'submit'}
              value={'ยืนยัน'}
              css={'justify-center text-center'}
              color={'submit'}
            />
          )}
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
};

export default Login_email;
