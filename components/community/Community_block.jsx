import React from 'react';

const CommunityBlock = () => {


    return (
        <>
            <div className='border w-[13.125rem] h-[14.688rem] rounded-t-[0.438rem]'>
                <div className='rounded-t-[0.438rem] w-full h-full bg-center bg-no-repeat bg-cover relative bg-gradient-to-t from-black to-[#4E4E4E]'>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7Ypktg4VrGlXLe3IQDHCHM5KdrCyhGbONA&usqp=CAU"
                        alt=""
                        className='w-full h-full rounded-t-[0.438rem] absolute mix-blend-overlay' />

                    <div className=' text-white'>
                        <div className='w-full  flex justify-end pr-4'>
                            <span className='text-[4rem] font-light'>    01   </span>
                        </div>
                        <div className='truncate px-2 pt-[3rem]'>
                            <p className='text-[1rem]'>   คนรักโจรปล้นกระถาง   </p>
                            <p className='text-[0.8rem] truncate font-light'>  ในประเทศไทยให้พวกเขาได้มีโอกาสศึกษาต่อจนจบการ </p>
                        </div>
                        <div className='flex justify-end  items-baseline p-2'>
                            <div className='text-[0.8rem]'>
                                สมาชิกทั้งหมด
                            </div>
                            <div>
                                <span className='text-[1.25rem] px-2'>   250   </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CommunityBlock;
