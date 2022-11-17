import React from 'react';
import Like from './LikePost';
import Comment from './CommentPost';
import Header from './header';


const Disscuss = () => {
    return (
        <>
            <div className='w-full h-auto border-b-2 border-[#1C658C]'>
                <div className='w-full h-full p-3'>
                    <Header />

                    <div className=' w-full h-auto p-2 my-2 border border-[#1C658C] flex justify-center items-center rounded-[20px]'>
                        <img src="/images/png/1_2.png" className='w-auto max-h-[20rem] md:max-h-[25rem]  bg-cover bg-center' />
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

export default Disscuss;
