import React from 'react';
import { Avatar } from '@mantine/core';
import Tag from '../Tag';
import Link from 'next/link';

const Header = ({ userdata, timepost, tag }) => {
    return (
        <>
            <div className=' flex flex-col sm:flex-row justify-between'>

                <div className='  flex w-full justify-center items-center'>

                    <div className='w-[4.5rem] flex justify-center items-center'>
                        <Link href={`/profile/u/${userdata.username}`}>
                            <Avatar radius="xl" className=' mx-auto w-full h-full' src={userdata.imageProfile} />
                        </Link>
                    </div>

                    <div className=' w-full mx-2'>
                        <div className='text-[1.375] truncate'>
                            {userdata.username}
                        </div>
                        <div className='text-[0.813rem] truncate'>
                            {timepost}
                        </div>
                    </div>

                </div>

                <div className=' w-auto sm:w-full flex justify-start sm:justify-end items-center'>
                    <Tag linkto={''} tagName={tag} />
                </div>
            </div>
        </>
    );
}

export default Header;
