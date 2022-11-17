import Image from 'next/image';
import React from 'react';
import Tag from '../Tag';

const MiniBlog = () => {
  return (
    <div>
      <div className="w-full h-full ml-2 flex-col item-center">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row  justify-between items-center ">
          <div className="w-full">
            <p className="text-[1.75rem] m-0 p-0 truncate">
              จิ๊กโก๋สัมนาเบบี้ปัจฉิมนิเทศ
            </p>
          </div>
          <div className="w-full sm:w-50 flex justify-start sm:justify-end">
            <Tag linkto={''} tagName={'รักน้ำรักปลา'} />
          </div>
        </div>
        {/* detail */}
        <div className="w-full">
          <div className="h-[7rem] w-[90%] overflow-y-hidden ">
            <p className="text-[#979797] text-[1.2rem] font-light m-0 p-0 overflow-y-hidden">
              {text}
            </p>
          </div>
        </div>
        {/* footer */}
        <div className="w-full">
          <div className="w-full  flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div>
                <Image
                  src="https://fphftuccochbjgwngnrc.supabase.co/storage/v1/object/public/image-bucket/avatar/blank-profile.jpeg"
                  width={31}
                  height={31}
                  className="rounded-full"
                />
              </div>
              <div className="px-3 text-[#7A7A7A]">{`ชื่อผู้เขียน`}</div>
              <div className="px-3 text-[#7A7A7A]">{`เวลาที่เผยแพร่`}</div>
            </div>
            <div className="mr-2 sm:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-file-plus"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#1C658C"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <line x1="12" y1="11" x2="12" y2="17" />
                <line x1="9" y1="14" x2="15" y2="14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const miniBlog = ({ text }) => {
  return (
    <>
      <div className="w-full max-h-[90px] ml-2 flex-col item-center border-b-2 mt-2">
        {/* Header */}
        <div className="w-full flex justify-between items-center ">
          <div className="w-full">
            <p className="text-[1.125rem] text-[#1C658C] m-0 p-0 truncate">{``}</p>
          </div>
          <div className="w-full flex justify-end mr-2">
            <Tag linkto={''} tagName={'รักน้ำรักปลา'} />
          </div>
        </div>
        {/* detail */}
        <div className=" h-[2.5rem] w-[90%] mb-2">
          <div className="text-[0.75rem] text-[#979797] font-light block break-words	">
            {``}
          </div>
        </div>
      </div>
    </>
  );
};

export default miniBlog;
