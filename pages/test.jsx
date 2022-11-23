import React from 'react';
import dynamic from 'next/dynamic';
const Blog = dynamic(() => import('../components/Discuss/Discussminiblock'), { ssr: false });

const Test = () => {
    return (
        <div>
            <Blog/>
        </div>
    );
}

export default Test;
