/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputLogin from '../../components/Login/InputLogin';
import BoxLogin from '../../components/Layouts/BoxLogin';

const ResetPassword = () => {
  const setup = { email: '', username: '', pw: '', cmpw: '' };
  const [user, setUser] = useState(setup);
  const [color, setColor] = useState(setup);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

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
    setColor(setup);
  };

  useEffect(() => {
    errors.email ? setColor({ email: 'warn' }) : console.log(`email verified`);
    errors.username
      ? setColor({ username: 'warn' })
      : console.log(`username verified`);
    errors.pw ? setColor({ pw: 'warn' }) : console.log(`password verified`);
    errors.cmpw
      ? setColor({ cmpw: 'warn' })
      : console.log(`confirm password verified`);
  }, [errors]);

  return (
    <BoxLogin>
      <div className="flex-1 flex-col flex justify-center items-center">
        <h1 className="font-semibold sm:text-[1.7rem] text-[#1C658C] my-3">
          สมัครบัญชีผู้ใช้
        </h1>
        <form onSubmit={handleSubmit(onSubmitClick)}>
          <InputLogin
            type={'email'}
            name={'email'}
            value={user.email}
            onChange={handleOnChange}
            register={register('email', {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g,
                message: 'Pattern error naka',
              },
              required: 'email required!',
            })}
            color={color.email}
            placeholder={'อีเมล'}
          />
          <InputLogin
            type={'text'}
            name={'username'}
            value={user.username}
            onChange={handleOnChange}
            register={register('username', { required: 'username required!' })}
            color={color.username}
            placeholder={'ชื่อผู้ใช้'}
          />
          <InputLogin
            type={'password'}
            name={'pw'}
            value={user.pw}
            onChange={handleOnChange}
            register={register('pw', { required: 'password required!' })}
            color={color.pw}
            placeholder={'รหัสผ่าน'}
          />
          <InputLogin
            type={'password'}
            name={'cmpw'}
            value={user.cmpw}
            onChange={handleOnChange}
            register={register('cmpw', {
              required: 'confirm required!',
              validate: (value) => value === user.pw,
            })}
            color={color.cmpw}
            placeholder={'ยืนยันรหัสผ่าน'}
          />
          <InputLogin
            type={'submit'}
            value={'ยืนยันการสมัคร'}
            css={'justify-center text-center'}
            color={'submit'}
          />
        </form>
      </div>
    </BoxLogin>
  );
};

export default ResetPassword;
