import React from 'react';
import Image from 'next/image';
import Link from 'next/link.js';

import Dropdown from './Dropdown.jsx';
const Navbarlogin = () => {
    const [open,setOpen] = React.useState(false);

    const [menu, setMenu] = React.useState([{
        title: 'หน้าหลัก',
        value: 'Home',
        link: '/Home'
    },
    {
        title: 'บล็อก',
        value: 'Blog',
        link: '/Blog'
    },
    {
        title: 'ถกเถียง',
        value: 'Dis',
        link: '/Discuss'
    }, {
        title: 'ชุมชน',
        value: 'commu',
        link: '/Community'
    }])

    const onClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='border-b w-screen h-[80px] flex justify-between content-center items-center text-[16px]'>

                <div className='md:invisible md:w-[0] w-[20rem] '>
                    <div className='w-full  py-2 px-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="8" x2="20" y2="8" />
                            <line x1="4" y1="16" x2="20" y2="16" />
                        </svg>
                    </div>
                </div>

                <div className='p-2  w-[40%] md:w-[15%] flex justify-center content-center items-center'>
                    <Link href="/Home">
                        <Image src={'/images/png/2-2E.png'} width={160} height={100} />
                    </Link>
                </div>

                <div className=' w-0 md:w-[40%]  h-full  invisible md:visible'>
                    <div className='md:w-[70%] flex h-full justify-evenly'>
                        {
                            menu.map((item, index) => (
                                <div key={index}>
                                    <div className='h-[100%] border-b-[3px] border-white hover:border-[#1C658C] text-[#1C658C] flex items-center cursor-pointer'>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='flex h-full w-[20rem] md:w-[60%] '>

                    <div className='flex w-[100%] justify-end'>

                        {/* search bar */}
                        <div className=' w-[40%] flex justify-end content-center items-center invisible md:visible'>
                            <input placeholder='ค้นหา' type="text" name="search" className='border rounded-[20px] p-2 text-[1rem] w-[100%]' />
                            <button className='absolute mr-2' type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg></button>
                        </div>

                        {/* Build blog */}
                        <div className=' w-[0] md:w-[20%] invisible md:visible flex justify-center content-center items-center'>
                            <button className='border-[3px] rounded-[20px] p-2 text-[0.8rem] border-[#1C658C] w-[6.875rem] h-[2.5rem]  font-bold text-[#1C658C]'>สร้างบล็อค</button>
                        </div>

                        {/* Noti */}
                        <div className=' w-[0] md:w-[8%] flex justify-start  items-center invisible md:visible'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-ringing" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                                <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                            </svg>
                        </div>

                        {/* profile */}
                        <div className=' w-[100%] md:w-[15%] flex justify-center md:justify-start items-center pl-2'>
                            <Image src={'/images/png/2-2.png'} className='rounded-[100px] border border-[#1C658C]' width={45} height={45} />
                        </div>
                    </div>



                </div>

            </div>
        </>
    );
};

export default Navbarlogin;
