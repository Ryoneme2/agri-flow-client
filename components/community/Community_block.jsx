import React from 'react';

const CommunityBlock = ({ Communityimg, CommunityMember, CommunityName, CommunityDetail, Rang }) => {


    return (
        <>
            <div className='min-w-[12.55rem] h-auto rounded-t-[0.438rem] mx-2'>
                <div className='rounded-t-[0.438rem] w-full h-full bg-center bg-no-repeat bg-cover relative bg-gradient-to-t from-black to-[#4E4E4E]'>

                    <img src={Communityimg}
                        alt="Communityimg"
                        className='w-full h-full rounded-t-[0.438rem] absolute mix-blend-overlay'
                    />

                    <div className='w-full h-full flex flex-col text-white'>
                        <div className='w-full flex justify-end pr-4'>
                            <span className='text-[4rem] font-light overflow-y-hidden'>0{Rang}</span>
                        </div>
                        <div className='truncate px-2 pt-[3rem]'>
                            <p className='text-[1rem]'>   {CommunityName}  </p>
                            <p className='text-[0.8rem] truncate font-light'>  {CommunityDetail} </p>
                        </div>
                        <div className='flex justify-end  items-baseline p-2 '>
                            <div className='text-[0.8rem]'>
                                สมาชิกทั้งหมด
                            </div>

                            <div>
                                <span className='text-[1.25rem] px-2'>   {CommunityMember}  </span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}

export default CommunityBlock;

{/* <div className='flex justify-between overflow-x-scroll sm:overflow-y-hidden'>
        <CommunityBlock/>
        <CommunityBlock/>
        <CommunityBlock/>
        <CommunityBlock/>
      </div> */}
