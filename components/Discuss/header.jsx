import React from 'react';
import { Avatar } from '@mantine/core';
import Tag from '../Tag';

const Header = () => {
    return (
        <>
            <div className=' flex flex-col sm:flex-row justify-between'>

                <div className='  flex w-full justify-center items-center'>

                    <div className='  w-[4.5rem] h-full '>
                        <Avatar radius="xl" size={"lg"} className=' mx-auto' src={'/images/profile/jammy.jpg'} />
                    </div>

                    <div className=' w-full mx-2'>
                        <div className='  w-full text-[1.375]'>
                            {`UserName`}
                        </div>
                        <div className='  w-full text-[0.813rem]'>
                            {`Time`}
                        </div>
                    </div>

                </div>

                <div className=' w-auto sm:w-full flex justify-start sm:justify-end items-center'>
                    <Tag linkto={''} tagName={'12346579'}/>
                </div>
            </div>
        </>
    );
}

export default Header;
