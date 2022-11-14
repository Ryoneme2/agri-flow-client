import React,{ useState } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';

import Router from 'next/router';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/Navbar/Navbarlogin'), { ssr: false })
const NavbarNonlogin = dynamic(() => import('../components/Navbar/NavbarNonlogin'), { ssr: false })
const Blog = dynamic(() => import('../components/Blog/Blog'),{ ssr: false })
const Tag = dynamic(() => import('../components/Tag'),{ ssr: false })
const CommunityBlock = dynamic(() => import('../components/community/Community_block'),{ssr: false})
export default function Home() {

  const [value, setValue] = useState('');
  const handle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Navbar />
      <Blog/>
      <CommunityBlock/>
      <NavbarNonlogin/>
      <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='loading'></div>
        <Button color='danger' context={ 'hello, world!' }/>
      </div>
    </>
  );
}
