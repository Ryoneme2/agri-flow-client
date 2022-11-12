import React from 'react';
import Button from '../Button.jsx';
import Image from 'next/image';
import Input from '../InputBox';
const Navbarlogin = () => {
    const menu = [
        {
            name: 'หน้าหลัก',
            link: ''
        },
        {
            name: 'บล็อก',
            link: ''
        },
        {
            name: 'ถกเถียง',
            link: ''
        }, {
            name: 'ชุมชน',
            link: ''
        }
    ];

    return (
        <>
            <div className='border-b w-full h-[80px] flex justify-center content-center items-center'>
                <div className=' my-auto px-[5%]'>
                    <Image src={'/images/png/2-2E.png'} width={160} height={100} />
                </div>
                <div className='flex '>
                    <div>หน้าหลัก</div>
                    <div>บล็อก</div>
                    <div>ถกเถียง</div>
                    <div>ชุมชน</div>
                </div>
                <div>
                    <input type="text" name="search" id="search" className='border rounded-[20px] p-2 text-[1rem]' />
                </div>
                <div>
                    <button className='border-[3px] rounded-[20px] p-2 text-[1rem] border-[#1C658C]'>สร้างบล็อค</button>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-ringing" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                        <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                    </svg>
                </div>
                <div>
                    <Image src={'/images/png/2-2.png'} className='rounded-[100px] border border-[#1C658C]' width={45} height={45}/>
                </div>
            </div>
        </>
    );
};

export default Navbarlogin;