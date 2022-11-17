import React from 'react';
import Proflie from './Profile';
import UpgateAccount from './UpgateAccount';
import MiniBlog from '../Blog/miniBlog';
import Comment from './comment/comments';

const Sidebar = ({data}) => {
    return (
        <div>
            <Proflie profliedata={data.author} />
            <div className='my-5'>
                <UpgateAccount/>
            </div>
            <div className='w-full h-auto'>
                <div className='w-full h-auto'>
                    <p className='text-[1.375rem] text-[#1C658C] px-2'>บทความที่คล้ายกัน</p>
                </div>
                <div>
                    <MiniBlog />
                </div>
                
            </div>
            <div className='w-full h-auto'>
                <div className='w-full h-auto'>
                    <p className='text-[1.375rem] text-[#1C658C] px-2'>ความคิดเห็น</p>
                </div>
                <div>
                    <Comment />
                </div>
                
            </div>
        </div>
    );
}

export default Sidebar;
