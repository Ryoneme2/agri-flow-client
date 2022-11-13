import React from 'react';
import Image from 'next/image';
import Link from 'next/link.js';
import Dropdown from './Dropdown.jsx';
const Navbarlogin = () => {

    const Navbermenu = [
        {
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
        }
    ];

    return (

        <>
            <div className='border-b w-screen h-[80px] flex justify-evenly content-center items-center text-[16px]'>

                <div className='p-2  flex justify-center content-center items-center'>
                    <Link href="/Home">
                        <Image src={'/images/png/2-2E.png'} width={160} height={100} />
                    </Link>
                </div>

                <div className='w-[50%] h-full '>
                    <div className='w-[50%] flex h-full justify-evenly'>
                        {
                            Navbermenu.map((item, index) => (
                                <div key={index}>
                                    <Link href={item.link}>
                                        <div className='h-[100%] border-b-[3px] border-white hover:border-[#1C658C] text-[#1C658C] flex items-center cursor-pointer'>
                                            {item.title}
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='flex w-[35%] h-full justify-evenly content-center items-center'>

                    <div className='flex justify-end content-center items-center'>
                        <input placeholder='ค้นหา' type="text" name="search" className='border rounded-[20px] p-2 text-[1rem]' />
                        <button className='absolute mr-2' type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg></button>
                    </div>

                    <div className='w-[110px] h-[40px]'>
                        <button className='border-[3px] rounded-[20px] p-2 text-[14px] border-[#1C658C] w-[100%]  h-[100%] font-bold text-[#1C658C]'>สร้างบล็อค</button>
                    </div>
                    <div className='flex justify-center content-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-ringing" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                            <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                        </svg>
                    </div>

                    <div className='mx-5'>
                        <Image src={'/images/png/2-2.png'} className='rounded-[100px] border border-[#1C658C]' width={45} height={45} />

                    </div>

                </div>

            </div>
        </>
    );
};

export default Navbarlogin;