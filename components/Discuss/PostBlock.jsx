import React from 'react';
import Tag from '../Tag';
import Like from './LikePost';
import Comment from './CommentPost';
import { Avatar } from '@mantine/core';


const PostBlock = () => {
    return (
        <>
            <div className='w-full h-auto shadow-md rounded-[20px] '>
                <div className='w-full h-full p-3'>
                    <div className=' flex justify-between'>

                        <div className=' flex w-full justify-center items-center'>

                            <div className=' w-[4.5rem] h-full '>
                                <Avatar radius="xl" size={"lg"} className='mx-auto'  src={'/images/profile/jammy.jpg'} />
                            </div>

                            <div className='w-full mx-2'>
                                <div className=' w-full text-[1.375]'>
                                    {`UserName`}
                                </div>
                                <div className=' w-full text-[0.813rem]'>
                                    {`Time`}
                                </div>
                            </div>

                        </div>

                        <div className=' w-full flex justify-end items-center'>
                            <Tag linkto={''} tagName={''} />
                        </div>

                    </div>



                    <div className=' w-full h-auto p-2'>
                        <div className=''> 
                        
                        </div>
                    </div>


                    <div className=''>
                        <div className='p-2 w-full h-auto break-words text-[1.125rem]'>
                            {`content`}
                        </div>
                    </div>
                    <div className=''>
                        <div className='p-2 flex items-center '>
                            <Like Like={10} />
                            <Comment Comment={10} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostBlock;
