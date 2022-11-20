import React from 'react';
import dynamic from 'next/dynamic';
const EditProfilecomponnection = dynamic(
  () => import('../components/EditProfile/Editprofile'),
  { ssr: false, }
);
const Section = dynamic(() => import('../components/Section/Section'), { ssr: false });


const EditProfile = () => {
    return (
        <>
            <div className='w-[90%] mx-auto my-2 py-1 border-b-2 border-[#1C658C] text-[#1C658C]'>
                แก้ไขโปรไฟล์ผู้ใช้
            </div>
            <EditProfilecomponnection/>
        </>
    );
}

export default EditProfile;
