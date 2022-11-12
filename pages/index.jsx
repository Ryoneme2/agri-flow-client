import React,{ useState } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import NavbarNonlogin from '../components/Navbar/NavbarNonlogin';
import Navbar from '../components/Navbar/Navbarlogin';

export default function Home() {

  const [value, setValue] = useState('');
  const handle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Navbar />
      <NavbarNonlogin />
      <InputBox />
      <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='loading'></div>
        <Button color='danger' context={ 'hello, world!' }/>
      </div>
    </>
  );
}
