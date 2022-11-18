import React from 'react';

const CommumitySidebar = ({data}) => {
    return (
        <>
            <div className='flex border'>
                <div className='w-[3.75rem] h-[3.75rem]'>
                    <image src={data} />
                </div>
                <div>
                    <div>
                        <div>{`Community Name`}</div>
                        <div>{`Community Detail`}</div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CommumitySidebar;
