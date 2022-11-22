import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { Tabs } from '@mantine/core';


const Navbar = dynamic(() => import('../components/Navbar/Navbarlogin'), { ssr: false, });
const NavbarNonlogin = dynamic(() => import('../components/Navbar/NavbarNonlogin'), { ssr: false });


export default function Home() {
  const [value, setValue] = useState('');
  const handle = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className='w-[70%] px-5 py-1 h-screen border'>
        <Tabs defaultValue="gallery">
          <Tabs.List className='pb-[0.15rem]'>

            <Tabs.Tab value="Blog">
              <div className='text-[2rem]'>บล็อก</div>
            </Tabs.Tab>

            <Tabs.Tab value="Discuss">
              <div className='text-[2rem]'>ถกเถียง</div>
            </Tabs.Tab>

          </Tabs.List>

          <Tabs.Panel value="Blog" pt="xs">

          </Tabs.Panel>

          <Tabs.Panel value="Discuss" pt="xs">

          </Tabs.Panel>
        </Tabs>
      </div>




    </>
  );
}
