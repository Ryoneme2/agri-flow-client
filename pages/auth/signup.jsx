/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import axios from 'axios';

import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';

const ResetPassword = () => {
  const setup = { email: '', username: '', password: '', cmpw: '' };
  const [user, setUser] = useState(setup);
  const [color, setColor] = useState(setup);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    isError: false,
    msg: '',
  });

  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  //console.log(formState, errors);

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
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, data)
      .then(function (response) {
        console.log(response.data.msg);
        setLoading(false);
        router.push('../auth/login-email');
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
  };

  useEffect(() => {
    console.log('change');
    errors.email
      ? setColor({ email: 'warn' })
      : errors.username
      ? setColor({ username: 'warn' })
      : errors.password
      ? setColor({ password: 'warn' })
      : errors.cmpw
      ? setColor({ cmpw: 'warn' })
      : console.log('verified');
  }, [formState]);

  return (
    <BoxLogin>
      <div className="flex-1 flex-col flex justify-center items-center">
        <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
          สมัครบัญชีผู้ใช้
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
            errorText={'email invalid'}
            placeholder={'อีเมล'}
          />
          <InputLogin
            type={'text'}
            name={'username'}
            register={register('username', {
              required: 'username required!',
              minLength: {
                value: 5,
                message: 'should contain more than 5',
              },
            })}
            value={user.username}
            onChange={handleOnChange}
            color={color.username}
            errorText={
              'username invalid or it should contain more than 5 characters'
            }
            placeholder={'ชื่อผู้ใช้'}
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
            errorText={'password should contains at least 8 characters'}
            placeholder={'รหัสผ่าน'}
          />
          <InputLogin
            type={'password'}
            name={'cmpw'}
            register={register('cmpw', {
              required: 'confirm required!',
              validate: (value) => value === user.password,
            })}
            value={user.cmpw}
            onChange={handleOnChange}
            color={color.cmpw}
            errorText={'password not match'}
            placeholder={'ยืนยันรหัสผ่าน'}
          />
          {loading && (
            <div className="flex justify-center items-center h-[4rem] mb-5">
              <div className="loading"></div>
            </div>
          )}
          {!loading && (
            <InputLogin
              type={'submit'}
              value={'ยืนยันการสมัคร'}
              css={'justify-center text-center'}
              color={'submit'}
            />
          )}
        </form>
      </div>
    </BoxLogin>
  );
};

export default ResetPassword;
