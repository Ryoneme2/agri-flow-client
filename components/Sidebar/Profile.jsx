import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import Line from '../contact/iconlinepopup';
import Facebook from '../contact/iconfacebook';
import Mail from '../contact/mail';
import other from '../contact/othercontact';
import Link from 'next/link';
import axios from 'axios';

const Proflie = ({ profliedata }) => {
    const [follower, setFollower] = React.useState(false);
    const [token, setToken] = React.useState(false);

    useEffect(() => {
        setToken(localStorage.getItem('access_token') || '');
    }, []);
    const onClickFollow = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const post = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/follows`,
                { username: profliedata.username },
                {
                    headers: { Authorization: token },
                }
            );

            if (post.status !== 201) throw new Error('internal error');
            console.log('follow success');
        } catch (e) {
            console.error(e);
            console.log('follow failed!');
            return;
        }
    };

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <div className='w-full h-auto'>
                <div className='flex flex-col'>
                    <div className='w-[100%]  flex justify-center items-center'>
                        <Link href={`/profile/u/${profliedata.username}`}>
                            <Image src={profliedata.imageProfile} alt="profileimage" className='rounded-[100px] border border-[#1C658C]' width={75} height={75} />
                        </Link>
                    </div>
                    <div className='flex justify-between item-center'>
                        <div className='flex justify-center items-baseline '>
                            <p className='text-[1.75rem] font-bold text-[#1C658C] m-0 p-0'>{profliedata.blogCount}</p>
                            <p className='pl-2 text-[1rem] font-light truncate m-0 p-0'>บล็อก</p>
                        </div>
                        <div className='flex justify-center items-baseline'>
                            <p className='text-[1.75rem] font-bold text-[#1C658C] m-0 p-0'>{profliedata.followerCount}</p>
                            <p className='pl-2 text-[1rem] font-light truncate m-0 p-0'>ผู้ติดตาม</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col lg:flex-row justify-between lg:items-center  '>
                        <Link href={`/profile/u/${profliedata.username}`}>
                            <div className='text-[1.25rem] truncate'>{profliedata.username}</div>
                        </Link>
                        {
                            user.username === profliedata.username ? <div></div> :
                                <Button className='h-[1.875rem] rounded-[10px] hover:bg-[#1C658C] bg-[#1C658C] text-white my-0 md:my-2'
                                    onClick={onClickFollow}>ติดตาม</Button>
                        }


                    </div>
                    <div className='h-[6rem] border-b-2 mt-2'>
                        <textarea name="bio" id="bio" placeholder="เกี่ยวกับฉัน" className='w-full h-[5rem] resize-none overflow-y-auto focus:outline-none'></textarea>
                    </div>
                    <div className='flex justify-center content-center items-center mt-2'>
                        {/* <Facebook DataFacebook={profliedata.socialMedia.facebook}/>
                        <Line />
                        QrLine={profliedata.socialMedia.line}
                        <Mail DataMail={profliedata.socialMedia.email}/> 
                        <other data ={profliedata.socialMedia.other}/>
                        */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Proflie;