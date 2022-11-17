import React from 'react';

const Mail = ({DataMail}) => {
    return (
        <>
            <div className='w-full h-auto rounded-[20px] bg-[#B6DCFE] mx-1'>
            <div className='px-2  text-[#1C658C] truncate flex p-[5px]'>
                    <p className='hidden lg:block m-0 p-0'>อีเมล:</p>
                    <p className='m-0 p-0'>{DataMail}</p>
                </div>
            </div>
        </>
    );
}

export default Mail;
