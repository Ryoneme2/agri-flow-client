import React from 'react';
import Link from 'next/link';

const Dropdown = () => {

    return (
        <div className='border rounded-[10px] w-[150px] '>
            <div className='border-b px-4 pb-2 pt-5'>
                <Link href="/Proflie">
                    <span>ชื่อผู้ใช้งาน</span>
                </Link>
            </div >
            <div className='border-b py-2 px-4'>
                <Link href="/ProfileSettings">
                    <span>ตั้งค่าบัญชีผู้ใช้</span>
                </Link>
            </div>
            <div className='flex justify-center content-center items-center px-4 pt-3 pb-4'>
                <button className='w-[100%] border border-white bg-white hover:bg-red-200 text-[#ff0000] rounded-[20px]'>ออกจากระบบ</button>
            </div>

        </div>
    );
}

export default Dropdown;
