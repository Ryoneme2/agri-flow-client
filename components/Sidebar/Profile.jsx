import React from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import Line from '../contact/iconlinepopup';
import Facebook from '../contact/iconfacebook';
import Mail from '../contact/mail';

const Proflie = ({profliedata}) => {
    return (
        <>
            <div className='w-full h-auto'>
                <div className='flex flex-col'>
                    <div className='w-[100%]  flex justify-center items-center'>
                        <Image src={profliedata.imageProfile} className='rounded-[100px] border border-[#1C658C]' width={75} height={75} />
                    </div>
                    <div className='flex justify-between item-center px-1'>
                        <div className='flex justify-center items-baseline '>
                            <p className='text-[1.75rem] font-bold text-[#1C658C] m-0 p-0'>{profliedata.blogCount}</p>
                            <p className='pl-2 text-[1rem] font-light truncate m-0 p-0'>บล็อก</p>
                        </div>
                        <div className='flex justify-center items-baseline'>
                            <p className='text-[1.75rem] font-bold text-[#1C658C] m-0 p-0'>{profliedata.followerCount}</p>
                            <p className='pl-2 text-[1rem] font-light truncate m-0 p-0'>ผู้ติดตาม</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col lg:flex-row justify-between lg:items-center px-2 '>
                        <div className='text-[1.25rem] truncate'>{profliedata.username}</div>
                        <Button className='h-[1.875rem] rounded-[10px] hover:bg-[#1C658C] bg-[#1C658C] text-white my-0 md:my-2'>ติดตาม</Button>
                    </div>
                    <div className='h-[6rem] border-b-2 mt-2'>
                        <textarea name="bio" id="bio" placeholder="เกี่ยวกับฉัน" className='w-full h-[5rem] resize-none overflow-y-auto focus:outline-none'></textarea>
                    </div>
                    <div className='flex justify-center content-center items-center mt-2'>
                        <Facebook DataFacebook={profliedata.socialMedia.facebook}/>
                        <Line />
                        {/* QrLine={profliedata.socialMedia.line} */}
                        <Mail DataMail={profliedata.socialMedia.email}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Proflie;