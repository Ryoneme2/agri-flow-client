import React from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import Line from '../contact/iconlinepopup';
import Facebook from '../contact/iconfacebook';

const Proflie = () => {
    return (
        <>
            <div className='w-full h-auto'>
                <div className='flex flex-col'>
                    <div className='w-[100%]  flex justify-center items-center'>
                        <Image src={'/images/png/2-2.png'} className='rounded-[100px] border border-[#1C658C]' width={55} height={55} />
                    </div>
                    <div className='flex justify-between item-center px-2'>
                        <div>
                            <p className='text-[1rem] font-light'><span className='text-[1.2rem] font-bold'>{`25000`}</span> บล็อก</p>
                        </div>
                        <div>
                            <p className='text-[1rem] font-light'><span className='text-[1.2rem] font-bold'>{`25000`}</span> ผู้ติดตาม</p>
                        </div>
                    </div>
                    <div className='w-full h-[2.2rem] flex justify-between items-center px-2'>
                        <div>{`ชื่อผู้ใช้งาน`}</div>
                        <Button className='h-[1.875rem] rounded-[10px] border-2 border-[#1C658C] bg-white hover:bg-white text-[#1C658C]'>ติดตาม</Button>
                    </div>
                    <div className='m-2 h-[6rem] border-b-2'>
                        <textarea name="bio" id="bio" placeholder="เกี่ยวกับฉัน" className='w-full h-[5rem] resize-none overflow-y-auto'></textarea>
                    </div>
                    <div className='flex justify-center content-center items-center'>
                        <Facebook/>
                        <Line/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Proflie;
