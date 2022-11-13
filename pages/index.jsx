import React,{ useState } from 'react';
import InputBox from '../components/InputBox';
import NavbarNonlogin from '../components/Navbar/NavbarNonlogin';
import Navbar from '../components/Navbar/Navbarlogin';
import Router from 'next/router';
import Dropdown from '../components/Navbar/Dropdown'
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
      <Dropdown/>
      <></>
      <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='loading'></div>
      </div>
    </>
  );
}
