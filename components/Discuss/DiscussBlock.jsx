import React from 'react';
import Like from './LikePost';
import Comment from './CommentPost';
import Header from './header';


const PostBlock = ({ data }) => {
    return (
        <>
            <div className='w-full h-auto shadow-lg rounded-[20px] my-3 '>
                <div className='w-full h-full p-3'>
                    <Header userdata={data.author} timepost={data.create_at} />

                    {
                        data.post.file == [] || null || '' ?
                            <div className=' my-2'></div> :
                            <div className=' w-full h-auto p-2 my-3 flex justify-center items-center rounded-[20px]'>
                                <img src={data.post.file} className='w-auto max-h-[20rem] md:max-h-[25rem]  bg-cover bg-center' />
                            </div>
                    }

                    {
                        data.post.content == '' ? '' :
                            <div className='px-2 w-full max-h-[8.50rem] break-words'>
                                <p className='text-[1.125rem] font-light m-0 p-0'>{data.post.content}</p>
                            </div>
                    }

                    <div className=''>
                        <div className='p-2 flex items-center '>
                            {/* <Like LikeCount={} />
                            <Comment CommentCount={} /> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PostBlock;
