import React from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import { Textarea } from '@mantine/core';

const Proflie = () => {
    return (
        <>
            <div className='w-full h-auto'>
                <div className='flex flex-col'>
                    <div className='w-[100%]  flex justify-center items-center'>
                        <Image src={'/images/png/2-2.png'} className='rounded-[100px] border border-[#1C658C]' width={45} height={45} />
                    </div>
                    <div className='flex justify-between item-center  px-2 my-2'>
                        <div className=''>
                            <p className='m-0 p-0 font-light'><span className='font-bold text-[1.375rem]'>{`25000`}</span> บล็อก</p>
                        </div>
                        <div>
                            <p className='m-0 p-0 font-light'><span className='font-bold text-[1.375rem]'>{`25000`}</span> ผู้ติดตาม</p>
                        </div>
                    </div>
                    <div className='w-full h-[2.2rem] flex justify-between items-center px-2'>
                        <div>{`ชื่อผู้ใช้งาน`}</div>
                        <Button className='h-[1.875rem] rounded-[10px] border-2 border-[#1C658C] bg-white hover:bg-white text-[#1C658C]'>ติดตาม</Button>
                    </div>
                    <div className='m-2 h-[6rem] border-b-2'>
                        <textarea name="bio" id="bio" placeholder="เกี่ยวกับฉัน" className='w-full h-[5rem] resize-none overflow-y-auto'></textarea>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Proflie;
