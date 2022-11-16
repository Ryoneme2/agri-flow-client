import React from 'react';
import Comment from './commentBlock';
import Addcomment from './addcomment';

const Comments = () => {
    return (
        <>
            <div className='w-full h-auto'>
                <div className='w-full h-[30rem] selection:border overflow-y-scroll'>
                    <Comment />
                    <Comment />
                </div>
                <div>
                    <Addcomment />
                </div>
            </div>
        </>
    );
}

export default Comments;
