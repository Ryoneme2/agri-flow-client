import React from 'react';
import Image from 'next/image';
import Tag from '../Tag';

const Blog = () => {
    return (
        <div className='w-[100%] h-[15.625rem] border-b-2 border-[#1C658C] flex justify-center content-center items-center'>
            <div className='p-3 flex w-full h-[12.813rem] items-center'>
                <div className=' overflow-hidden invisible sm:visible w-[0] md:w-[170px]'>
                    <div className='bg-cover bg-center bg-no-repeat'>
                        <Image src=""
                            width={160} height={160}
                            className='rounded-[7px] mb-2'
                        />
                    </div>
                    <div className='flex justify-between'>
                        <Image src=""
                            width={40} height={40}
                            className='rounded-[7px] mr-[4px]'
                        />
                     
                    </div>
                </div>
                <div className='w-[100%] px-5'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='text-[1.75rem] truncate'> {`เลี้ยงปลายังไงไม่ให้ปลาไปกินพอแม่ของตัวเอง`}</div>
                        <Tag linkto={''} tagName={'รักน้ำรักปลา'} />
                    </div>
                    <div className='text-[1.188rem] w-40% h-[5.7rem] '>
                        <p className='w-[100%] md:w-[90%] h-full block break-words font-light indent-8 overflow-hidden pt-[0.3rem]'>
                            {`ยิ่งกรณีที่อีกฝ่ายก็ไม่ชัดเจนในเหตุผล ก็ทำให้เราผู้ที่ไม่ยอมรับ จะเกิดความคิดแบบ วกไปเวียนมา เช่น เราไม่ดีตรงไหน? เราผิดตรงไหน? ทำไมเขาเปลี่ยนไป? อะไรทำให้เขาไม่เหมือนเดิม? เหมือนพยายามหาเหตุผล  ที่ดูแล้วเหมือนเรากำลังพยายามหาวิธีไม่ให้ฝนตกหรือถามว่าทำไมฝนต้องตกจนผ้าที่เราตากไว้เปียก ประเด็นคือ ผ้ามันเปียกไปแล้ว เราทำอะไรกับสิ่งที่มันเกิดขึ้นไปแล้วไม่ได้ ส่วนหนึ่งเราหลายคนก็รู้เหตุผลนั้นอยู่แล้วแค่ไม่ยอมรับ อีกมุมหนึ่งมันก็ไม่มีเหตุผลหรอก เพราะสิ่งที่เกิดขึ้นไม่ใช่ของจริง หรือรักจริง เขาไม่ได้พอใจเราแต่แรก โดยเขาอาจรู้ตัวหรือไม่รู้ตัวก็ตาม`}
                        </p>
                    </div>
                    <div className='mt-[1.7rem]'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center'>
                                <div className='mr-3'>
                                    <Image src=""
                                    width={31} height={31}
                                    className='rounded-[100%]'
                                    />
                                </div>
                                <div className='mx-2'>
                                    {`Username`}
                                </div>
                                <div>
                                    {`Time Post`}
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-plus" width="30" height="30"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#1C658C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    <line x1="12" y1="11" x2="12" y2="17" />
                                    <line x1="9" y1="14" x2="15" y2="14" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Blog;
