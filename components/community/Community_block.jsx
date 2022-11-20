import React from 'react';

const CommunityBlock = ({
  Communityimg,
  CommunityMember,
  CommunityName,
  CommunityDetail,
  Rang,
}) => {
  return (
    <>
      <div className="min-w-[8.5rem] sm:min-w-[10.55rem] md:min-w-[12.55rem]  h-[10rem] sm:h-[12rem] md:h-auto rounded-t-[0.438rem] mx-2">
        <div className="rounded-t-[0.438rem] w-full h-full bg-center bg-no-repeat bg-cover relative bg-gradient-to-t from-black to-[#4E4E4E]">
          <picture>
            <img
              src={Communityimg}
              alt="Communityimg"
              className="w-full h-full rounded-t-[0.438rem] absolute mix-blend-overlay"
            />
          </picture>

          <div className="w-full h-full flex flex-col text-white">
            <div className="w-full flex justify-end pr-4 pb-4">
              <span className="text-[3rem] sm:text-[4rem] font-light overflow-y-hidden">
                0{Rang}
              </span>
            </div>
            <div className="truncate m-0 pt-2 px-2">
              <p className="text-[1rem] sm:text-[1.1] md:text-[1.25rem] m-0 p-0">
                {`151551`} {CommunityName}{' '}
              </p>
              <p className="text-[0.8rem] sm:text-[1rem] truncate font-light m-0 p-0 hidden md:block">
                {'กลุ่มสำหรับคนรักปลา'}
                {CommunityDetail}
              </p>
            </div>
            <div className="flex justify-end items-baseline px-2 overflow-y-hidden">
              <div className="text-[0.8rem] ">
                <p className="flex">
                  สมาชิก<span className="hidden sm:block">ทั้งหมด</span>
                </p>
              </div>

              <div className="overflow-y-hidden">
                <span className="text-[1rem] sm:text-[1.25rem] px-1 sm:px-2 overflow-y-hidden">
                  {CommunityMember}
                  {`3250`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityBlock;

{
  /* 
    <div className='flex justify-between overflow-x-scroll sm:overflow-x-hidden'>
        <CommunityBlock/>
        <CommunityBlock/>
        <CommunityBlock/>
        <CommunityBlock/>
    </div> 
*/
}
