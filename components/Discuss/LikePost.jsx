import React from 'react';

const Like = ({Like}) => {
    return (
        <div className='flex mx-1'>
            <div className='mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                </svg>
            </div>
            <div className='mx-1'>
                {Like}
            </div>
        </div>
    );
}

export default Like;