import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import Router from 'next/router';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar/Navbarlogin'), {ssr: false,});
const NavbarNonlogin = dynamic(() => import('../components/Navbar/NavbarNonlogin'),{ ssr: false });


export default function Home() {
  const [value, setValue] = useState('');
  const handle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="loading"></div>
      </div>
    </>
  );
}
