import React from 'react';
import Image from 'next/image';

const Iconfacebook = ({linkfacebook}) => {
    return (
        <>
            <a href={linkfacebook} className='cursor-pointer mx-1'>
                <Image src={'/images/svg/facebook.svg'} width={35} height={35} />
            </a>
        </>
    );
}

export default Iconfacebook;
