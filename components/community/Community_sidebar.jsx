import React from 'react';
import { Avatar } from '@mantine/core';

const CommumitySidebar = ({ data }) => {
    return (
        <>
            <div className='flex h-[6rem] items-center my-3 mx-3 shadow-md rounded-[10px]'>
                <div className='w-[5rem] h-[5rem] rounded-[10px]'>
                    <img src={data} />
                </div>
                <div className='mx-1 flex-col item-center'>
                    <div className='my-1 w-full'>
                        <div className='text-[1rem] font-light truncate'>{`Community Name`}</div>
                        <div className='text-[0.625rem] font-light truncate'>{`Community Detail`}</div>
                    </div>
                    <div className=''>
                        <div>
                            <Avatar.Group spacing="sm">
                                <Avatar src="image.png" radius="xl" />
                                <Avatar src="image.png" radius="xl" />
                                <Avatar radius="xl">+5</Avatar>
                            </Avatar.Group>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommumitySidebar;
