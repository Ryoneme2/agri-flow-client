import React from 'react';
// import User from '../../staticUser/profile';
import Addcomment from './addcomment';

const Comment = ({ data }) => {
    return (
        <>
            <div className=' flex flex-col pt-3 py-5 border-b-2 px-2 border-[#1C658C]'>
                <div className=' flex'>
                    <div className=' overflow-hidden'>
                        {/* <User className='w-full h-full overflow-y-hidden' /> */}
                    </div>
                    <div className=' flex flex-col my-auto mx-3'>
                        <div className=' text-[0.938rem] text-[#1C658C]'>
                            {`Uername`}
                        </div>
                        <div className='text-[0.625rem] '>
                            {`time to comments`}
                        </div>
                    </div>
                </div>
                <div className=' w-full text-[1rem] mt-3 break-words border p-2 rounded-[10px] border-[#B6DCFE]'>
                    contents
                </div>
            </div>
        </>
    );
}

export default Comment;
