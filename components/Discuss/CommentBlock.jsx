import React from 'react';
import { Avatar } from '@mantine/core';

const CommentBlock = () => {
    return (
        <>
            <div className='flex pb-3 pr-3'>
                <div className='w-[3.5rem] h-auto mx-3'>
                    <Avatar radius="xl" className='w-auto h-auto'  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                </div>
                <div className='w-full flex-col border-b-2 border-[#1C658C] pb-4 '>
                    <div className='flex justify-between items-center pb-2'>
                        <div className='text-[1.375rem] text-[#1C658C]'>
                            {`Usrename`}
                        </div>
                        <div className='text-[0.938rem] text-[#B6DCFE]'>
                            {`TimeComment`}
                        </div>
                    </div>
                    <div className='w-full font-light'>
                        {`เห็นด้วยครับ ดีมาก เยี่ยมมาก ตรงกับสถานที่จริงมากๆเลยครับ`}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommentBlock;
