
import React from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import Link from 'next/link';

const Usersidebar = ({ data ,blogcount}) => {

    return (
        <>
            <div className='w-full h-auto'>
                <div className='flex flex-col'>
                    <div className='w-[100%] flex justify-center items-center'>
                        <Image src={data?.imageProfile || ''} alt='userimage' className='rounded-[100px] border border-[#1C658C]' width={75} height={75} />
                    </div>
                    <div className='flex justify-between item-center'>
                        <div className='flex justify-center items-baseline '>
                            <p className='text-[1.75rem] font-bold text-[#1C658C] m-0 p-0'>{blogcount}</p>
                            <p className='pl-2 text-[1rem] font-light truncate m-0 p-0'>บล็อก</p>
                        </div>
                        <div className='flex justify-center items-baseline'>
                            <p className='text-[1.75rem] font-bold text-[#1C658C] m-0 p-0'>{data.followerCount}</p>
                            <p className='pl-2 text-[1rem] font-light truncate m-0 p-0'>ผู้ติดตาม</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-row justify-between md:items-center  '>
                        <div className='text-[1.25rem] truncate'>{data.username}</div>

                        {
                            <Link href='/profile/EditProfile'>
                                <Button className='h-[1.875rem] rounded-[10px] hover:bg-[#1C658C] bg-[#1C658C] text-white my-0 md:my-2'>
                                    แก้ไขโปรไฟล์
                                </Button>
                            </Link>
                        }


                    </div>
                    <div className='h-[6rem] border-b-2 mt-2'>
                        <textarea defaultValue={data.bio} name="bio" id="bio" placeholder="เกี่ยวกับฉัน" className='w-full h-[5rem] resize-none overflow-y-auto focus:outline-none' />
                    </div>
                    <div className='flex justify-center content-center items-center mt-2'>
                        {`contact`}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Usersidebar;