import React from 'react';
import Link from 'next/link';

const Tag = ({linkto,tagName}) => {
  return (
    <>
      <Link href={linkto}>
        <div className=' h-[1.6rem] min:w-[7.813rem] max-w-[8.5rem] flex justify-center items-center border overflow-hidden rounded-[20px] bg-[#06507E]'>
          <p className='text-[0.938rem] text-white w-full px-2 text-center truncate'> {tagName} </p>
        </div>
      </Link>
    </>
  );
}

export default Tag;


