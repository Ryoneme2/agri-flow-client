import React from 'react';
import Link from 'next/link';

const Tag = ({ linkto, tagName }) => {
  return (
    <>
      <div className=" h-[1.6rem] min:w-[7.813rem] max-w-[8.5rem] w-fit px-1 m-1 my-2 flex justify-center items-center border-0 overflow-hidden rounded-[20px] bg-[#06507E] drop-shadow-xl">
        <p className="text-[0.938rem] text-white w-full px-2 text-center truncate">
          <Link href={!tagName ? '#' : linkto}>
            <span>{tagName || 'มั้ยมรีแทร็กครัช'}</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Tag;
