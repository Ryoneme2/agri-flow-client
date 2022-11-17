import React from 'react';
import Like from './LikePost';
import Comment from './CommentPost';
import Header from './header';


const PostBlock = () => {
    return (
        <>
            <div className='w-full h-auto shadow-md rounded-[20px] '>
                <div className='w-full h-full p-3'>
                    <Header/>

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
