import React from 'react';
import { Avatar } from '@mantine/core';

const CommentBlock = ({ data }) => {
    if (!data) {
        return <div>loading</div>;
    }

    console.log(data);
    return (
        <>
            <div className='flex pb-3 pr-3 '>
                <div className='w-[3.5rem] h-auto mx-3'>
                    <Avatar radius="xl" className='w-auto h-auto' src={data.create_by.imageProfile} />
                </div>
                <div className='w-full flex-col border-b-2 border-[#1C658C] pb-4 '>
                    <div className='flex justify-between items-center pb-2'>
                        <div className='text-[1.3rem] text-[#1C658C]'>
                            {data.create_by.username}
                        </div>
                        <div className='text-[0.938rem] text-[#B6DCFE]'>
                            {data.create_at}
                        </div>
                    </div>
                    <div className='w-full font-light'>
                        {data.content}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommentBlock;
