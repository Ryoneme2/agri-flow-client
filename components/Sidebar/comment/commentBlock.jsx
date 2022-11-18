import React from 'react';

import Addcomment from './addcomment';

const Comment = ({ data }) => {
    return (
        <>
            <div className=' flex flex-col pt-3 py-5 border-b-2 px-2 border-[#1C658C]'>
                <div className=' flex'>
                    <div className=' overflow-hidden'>
                        {data.author.imageProfile}
                    </div>
                    <div className=' flex flex-col my-auto mx-3'>
                        <div className=' text-[0.938rem] text-[#1C658C]'>
                            {data.author.username}
                        </div>
                        <div className='text-[0.625rem] '>
                            {data.create_at}
                        </div>
                    </div>
                </div>
                <div className=' w-full text-[1rem] mt-3 break-words  p-2 rounded-[10px] border-[#B6DCFE]'>
                    {data.comment.content}
                </div>
            </div>
        </>
    );
}

export default Comment;
