import React from 'react';
import dynamic from 'next/dynamic';
const Navbarlogin = dynamic(
  () => import('../components/Navbar/Navbarlogin'),
  { ssr: false, }
);
const Discussblock = dynamic(
  () => import('../components/Discuss/DiscussBlock'),
  { ssr: false }
);
const Discussmain = dynamic(
  () => import('../components/Discuss/Discuss'), {
  ssr: false,
});
const UpgateAccount = dynamic(
  () => import('../components/Sidebar/UpgateAccount'), {
  ssr: false,
});
const AvatarText = dynamic(
  () => import('../components/staticUser/AvatarText'), {
  ssr: false,
});
const NewPost = dynamic(
  () => import('../components/Discuss/post/NewPost'), {
  ssr: false,
});
const Community = dynamic(
  () => import('../components/community/Community_sidebar'), {
    ssr: false,
});
const Discuss = () => {
  return (
    <>
      <div className=''>
        <Navbarlogin />
      </div>

      <div className='flex'>
        <div className='w-[0] md:w-[25%] '>
          <div className='w-[100%] px-1'>
            <UpgateAccount />
          </div>
          <div className='w-[80%] mx-auto mt-5 '>
            <div>
              <p className='text-[1.375rem] text-[#1C658C] p-0 m-0'>บุคคลที่ติดตาม</p>
            </div>

          </div>
        </div>
        <div className="w-full md:w-[50%] mx-3 md:mx-0 flex-col justify-center items-center px-2">
          <NewPost />
        </div>
        <div className='w-[0] md:w-[25%]'>
          <Community/>
        </div>
      </div>
    </>
  );
};

export default Discuss;
