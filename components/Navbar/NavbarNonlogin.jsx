import React from 'react';
import Button from '../Button.jsx';
import Image from 'next/image';
import Link from 'next/link.js';


const NavbarNonlogin= () => {

    return (
       <> 
            <div className="border-b w-full h-[80px] flex justify-between">

                <div className='w-full h-full pt-[7px] ml-2'>
                    <Link href="/Home">
                        <Image src={'/images/png/2-2E.png'} width={160} height={100} />
                    </Link>
                </div>

                <div className='flex w-full justify-end '>
                    <div className='my-auto w-auto hidden sm:block text-right mx-2 truncate'>
                        <Link href="/login/signup">
                            <span className='underline font-bold truncate text-[#1C658C]'>สมัครเข้าใช้งาน</span>
                        </Link>
                    </div>
                    <div className='my-auto w-auto flex justify-end mx-2 truncate'>
                        <Link href="/login">
                            <Button className="text-[1rem] font-bold " context={'ลงชื่อเข้าใช้งาน'} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavbarNonlogin;
