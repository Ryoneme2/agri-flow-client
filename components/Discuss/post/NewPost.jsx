import React from 'react';
import { useState } from 'react';
import { Avatar } from '@mantine/core';
import { Modal, Autocomplete, Button, Textarea } from '@mantine/core';


const NewPost = () => {
    const [opened, setOpened] = useState(false);

    function publicPost(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }
    function cancelPost(e) {
        e.preventDefault();
        console.log('You clicked cancel.');
    }
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
            />

            <div className='w-full h-auto shadow-lg rounded-[20px] my-3 p-4 '>
                <div className='w-full h-auto  flex justify-between '>
                    <div className='w-full flex items-center h-auto'>
                        <Avatar src={'/images/profile/jammy.jpg'} radius="xl" className='w-[2.5rem] md:w-[3.1rem] h-auto' />
                        <p className='mx-2'> {`username`} </p>
                    </div>
                    <div className='w-full flex justify-end items-center text-[0.9rem]'>
                        <div className='px-3 py-1 mx-1 border rounded-l-lg bg-white border-red-600 text-red-600 cursor-pointer'
                            onClick={cancelPost}
                        >
                            ยกเลิก
                        </div>
                        <div className='px-3 py-1 mx-1 border rounded-r-lg bg-[#1C658C] text-white cursor-pointer'
                            onClick={publicPost}
                        >
                            เผยแพร่
                        </div>
                    </div>
                </div>
                <div className='flex my-2'>
                    <div className='mr-1'>
                        <Button onClick={() => setOpened(true)} className='bg-white border border-[#1C658C] hover:bg-white rounded-[10px] text-[#1C658C] font-light px-2 my-1 selection:flex justify-between '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo m-1"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#1C658C"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="15" y1="8" x2="15.01" y2="8" />
                                <rect x="4" y="4" width="16" height="16" rx="3" />
                                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                            </svg>
                            เพิ่มรูปภาพ
                        </Button>
                    </div>

                    <div className='my-1 border border-[#1C658C] px-2 rounded-[10px]'>
                        <Autocomplete
                            placeholder='หมวดหมู่'
                            data={['แมว', 'กุ้ง', 'เสือ', 'ปลาดาว', 'เป็ด', 'ไก่', 'ห่าน', 'เหี้ย']}
                            variant="unstyled"
                        />
                    </div>


                </div>

                <div className='mb-2'>
                    <Textarea
                        placeholder="Your comment"
                        withAsterisk
                        autosize
                        minRows={3}
                        maxRows={6}
                    />
                </div>

            </div>
        </>
    );
}

export default NewPost;
