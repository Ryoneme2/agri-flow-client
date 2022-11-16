import React from 'react';

const Addcomment = () => {
    return (
        <>
            <form action=""
                className='w-full h-[2.813rem] border border-[#B6DCFE] rounded-[20px] flex justify-between items-center overflow-hidden mt-2'>
                <input className='placeholder-[#4788C7] h-full w-full px-3 focus:outline-none' type="text" placeholder='ความคิดเห็นของท่าน' />
                <button type='submit' className='p-3 bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                    </svg>
                </button>
            </form>
        </>
    );
}

export default Addcomment;
