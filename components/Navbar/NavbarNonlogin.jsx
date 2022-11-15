import React from 'react';
import Button from '../Button.jsx';
import Image from 'next/image';
import Link from 'next/link.js';


const NavbarNonlogin= () => {

    return (
       <> 
            <div className="border-b w-full h-[80px] flex justify-between">

                <div>
                    <Link href="/Home">
                        <Image src={'/images/png/2-2E.png'} width={160} height={100} />
                    </Link>
                </div>

                <div className=' h-[50%] flex justify-around my-auto'>
                    <div className=' flex my-auto px-5'>
                        <Link href="/login">
                            <span className='underline font-bold'>ลงชื่อเข้าใช้งาน</span>
                        </Link>
                    </div>
                    <div className='px-5'>
                        <Link href="/login/signup">
                            <Button className="text-[1rem] font-bold" context={'สมัครเข้าใช้งาน'} onClick={''} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavbarNonlogin;
