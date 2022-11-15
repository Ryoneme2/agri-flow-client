import React from 'react';
import Image from 'next/image';

const Iconfacebook = ({linkfacebook}) => {
    return (
        <div>
            <a href={linkfacebook} className='cursor-pointer'>
                <Image src={'/images/svg/facebook.svg'} width={35} height={35} />
            </a>
        </div>
    );
}

export default Iconfacebook;
