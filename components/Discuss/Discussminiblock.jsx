import React from 'react';
import Link from 'next/link';
import axios from 'axios';

const Discussminiblock = ({ data }) => {

    const deletePost = async () => {
        const host = process.env.NEXT_PUBLIC_API_URL;
        const token = localStorage.getItem('access_token');
        await axios.delete(`${host}/api/v1/discusses/post/${data.id}`,{ headers: {Authorization: token,}})
        alert('ลบเสร็จสิ้น')
    }
    return (
        <>

            <div className='flex justify-between items-center border-b py-2 px-3'>
                <div className='w-[70%] truncate'>
                    <Link href={`/discuss/p/${data.id}`}>
                        {
                            !data.post.content ? 'รูปภาพ' : data.post.content
                        }
                    </Link>
                </div>
                <div className='flex justify-between items-center w-[30%] pl-2'>
                    <div>
                        {`post on : `} <span className='text-[#1C658C]'>{data.create_at}</span>
                    </div>
                    <div>
                        <button className='bg-white' onClick={deletePost}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="30" height="30" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="#1C658C" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Discussminiblock;
