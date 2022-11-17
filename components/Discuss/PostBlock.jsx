import React from 'react';
import Tag from '../Tag';
import Comments from '../Sidebar/comment/comments';


const PostBlock = () => {
    return (
        <>
            <div className='w-full h-auto shadow-md border'>
                <div>
                    <div className='border flex justify-between'>
                        <div className='border flex '>
                            <div className='border'>
                                <div className='border w-full h-full'>
                                    {`imgProfile`}
                                </div>
                            </div>
                            <div className='w-full h-full'>
                                <div className='border'>
                                    {`UserName`}
                                </div>
                                <div className='border'>
                                    {`Time`}
                                </div>
                            </div>
                        </div>
                        <div className='border'>
                            <Tag linkto={''} tagName={''} />
                        </div>
                    </div>
                    <div className='border w-full h-auto p-2'>
                        <div className='border'> </div>
                    </div>
                    <div className='border'>
                        <div className='p-2'>
                            {`contents`}
                        </div>
                    </div>
                    <div className='border'>
                        <div className='p-2 flex items-center'>
                            <div className='flex'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                    </svg>
                                </div>

                                <div>
                                    {`12`}
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                    </svg>
                                </div>

                                <div>
                                    {`12`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostBlock;
