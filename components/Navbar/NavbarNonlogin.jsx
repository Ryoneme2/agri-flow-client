import React from 'react';
import Button from '../Button.jsx';
import Image from 'next/image';


const NavbarNonlogin= () => {

    return (
       <> 
            <div className="border-b w-full h-[80px] flex justify-between">

                <div className=' my-auto px-[5%]'>
                    <Image src={'/images/png/2-2E.png'} width={160} height={100} />
                </div>

                <div className=' h-[50%] flex justify-around my-auto'>
                    <div className=' flex my-auto px-5'>
                        <a href='#' className='underline font-bold'>ลงชื่อเข้าใช้งาน</a>
                    </div>
                    <div className='px-5'>
                        <Button className="text-[1rem] font-bold" context={'สมัครเข้าใช้งาน'} onClick={''} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavbarNonlogin;
