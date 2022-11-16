import React from 'react';
import Tag from '../Tag';
import Image from 'next/image';

const miniBlog = ({text}) => {
    return (
        <>
            <div className='w-full max-h-[90px] ml-2 flex-col item-center border-b-2 mt-2'>
                    {/* Header */}
                    <div className='w-full flex justify-between items-center '>
                        <div className='w-full'>
                            <p className='text-[1.125rem] text-[#1C658C] m-0 p-0 truncate'>{``}</p>
                        </div>
                        <div className='w-full flex justify-end mr-2'>
                            <Tag linkto={''} tagName={'รักน้ำรักปลา'} />
                        </div>

                    </div>
                    {/* detail */}
                    <div className=' h-[2.5rem] w-[90%] mb-2'>
                        <div className='text-[0.75rem] text-[#979797] font-light block break-words	'>
                            {``}
                        </div>
                    </div>
                </div>
        </>
    );
}

export default miniBlog;
