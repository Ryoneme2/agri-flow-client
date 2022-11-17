import React from 'react';
import dynamic from 'next/dynamic';
const Discussblock = dynamic(() => import('../components/Discuss/DiscussBlock'), { ssr: false });
const Discussmain = dynamic(() => import('../components/Discuss/Discuss'), { ssr: false });

const Discuss = () => {
    return (
        <>
        <div className='w-sreen h-screen flex justify-center items-center'>
            <Discussmain />
        </div>
            
        </>
    );
}

export default Discuss;
