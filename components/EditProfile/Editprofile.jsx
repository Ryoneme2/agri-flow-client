import React from 'react';
import { Avatar, FileInput } from '@mantine/core';
import Image from 'next/image';
import dynamic from 'next/dynamic';


const Editprofile = () => {
    const [newImage, setNewImage] = React.useState('')

    const imgeDefaults = () => {
        setNewImage('');
        console.log('set imageProfile to default');
    }
    const cancel = () => {
        setNewImage(' ');
        console.log('cancel complete')
    }


    console.log(newImage);

    return (
        <>

            <div className='w-full sm:w-[80%]  h-auto p-5 flex flex-col lg:flex-row mx-auto'>

                <div className='w-full h-auto border border-gray-200 shadow-lg rounded-[7px] p-2 sm:p-4 flex-col justify-center items-center'>
                    <div className='mb-2 tetx-[1.375rem] underline text-[#1C658C]'>
                        ตั้งค่าบุคคล
                    </div>

                    <div className='w-full mx-auto flex flex-col sm:flex-row'>

                        <div className='w-full sm:w-[9rem]  flex justify-center items-center'>
                            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                className='w-[6rem] h-[6rem] rounded-full' />
                        </div>

                        <div className='flex flex-col w-full h-auto lg:pl-2 pt-2 lg:pt-0'>

                            <div className=' h-full w-full flex-col justify-center items-center'>
                                <div className='flex w-full '>
                                    <div className='h-[2rem] min-w-[49.5%] px-2 border rounded-[10px]'>
                                        <FileInput
                                            className='truncate '
                                            placeholder="เลือกรูปโปรไฟล์ของท่าน"
                                            size='md'
                                            variant="unstyled"
                                            accept="image/png,image/jpeg" />
                                    </div>
                                    <div className='w-[7.875rem] h-[2rem] ml-2'>
                                        {
                                            newImage == 0 || null ?
                                                <button className='w-full h-full font-light rounded-[10px] bg-white border border-[#FF3D3D] text-[#FF3D3D]'
                                                    onClick={imgeDefaults}>
                                                    ลบรูปโปรไฟล์
                                                </button>
                                                :
                                                <button className='w-full h-full  font-light rounded-[10px] bg-white border border-[#FF3D3D] text-[#FF3D3D]'
                                                    onClick={cancel}>
                                                    ยกเลิก
                                                </button>
                                        }
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row w-full  items-center">

                                    <input type="text" placeholder='ชื่อผู้ใช้งาน'
                                        className='w-full  pl-3 focus:outline-none border py-1 rounded-[10px] mt-2' />

                                    <input type="text" placeholder='อีเมล'
                                        className='w-full  pl-3 focus:outline-none border py-1 rounded-[10px] mt-2 lg:ml-1' />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-end item-center mt-2'>
                        <div className='h-full border rounded-[10px] text-[#FF3D3D] border-[#FF3D3D] mx-3 '>
                            <button className='py-1 px-3 bg-white'>ยกเลิก</button>
                        </div>
                        <div className='h-full border rounded-[10px] text-[#1C658C] border-[#1C658C]'>
                            <button className='py-1 px-3 bg-white'>ยืนยัน</button>
                        </div>
                    </div>

                </div>

                <div className='w-full lg:w-[50%] lg:mt-0 h-auto lg:ml-2 mt-3  border border-gray-200 shadow-lg rounded-[7px]'>
                    <div className='w-full h-auto  p-3'>
                        <div className='mb-2 tetx-[1.375rem] underline text-[#1C658C]'>
                            เปลี่ยนรหัสผ่าน
                        </div>
                        <div className='w-[80%] mx-auto'>
                            <div className="w-full mx-auto text-[#1C658C] border-[#1C658C]  ">
                                <div className=' h-auto border py-1 rounded-[10px] mt-2'>
                                    <input type="password" placeholder='รหัสผ่านเก่า'
                                        className='h-full w-full pl-3 focus:outline-none text-[0.8rem] font-light' />
                                </div>
                                <div className=' h-auto border py-1 rounded-[10px] mt-2'>
                                    <input type="password" placeholder='รหัสผ่านใหม่'
                                        className='h-full w-full pl-3 focus:outline-none text-[0.8rem] font-light' />
                                </div>
                            </div>
                            <div className=' flex justify-end mt-3'>

                                <div className='h-full border rounded-[10px] text-[#1C658C] border-[#1C658C]'>
                                    <button className='py-1 px-3  text-[0.85rem] font-light bg-gray-100'>ยืนยันการเปลี่ยนรหัส</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-full sm:w-[80%] h-auto p-5 flex flex-col lg:flex-row mx-auto'>
                <div className='w-full h-auto border border-gray-200 shadow-lg rounded-[7px] p-3'>
                    <div className='mb-2 tetx-[1.375rem] underline text-[#1C658C]'>
                        เส้นทางการติดต่อ
                    </div>
                    <div className='flex flex-col md:flex-row  px-2'>
                        <div className='w-full h-auto flex flex-col'>

                            <div className='flex items-center my-1'>
                                <div className='flex justify-center items-center'>
                                    <Image src='/images/svg/facebook.svg' width={35} height={35} />
                                </div>

                                <input type="text" placeholder='กรอก URL ของ Facebook ของท่าน'
                                    className='w-full border p-1 rounded-[10px] mx-2 font-light' />
                            </div>

                            <div className='flex items-center my-1'>
                                <div className='flex justify-center items-center'>
                                    <Image src='/images/svg/line.svg' width={32} height={32} />
                                </div>
                                <div className='flex mx-2 justify-between'>
                                    <input type="text" placeholder='Line Id ของท่าน'
                                        className='w-full border p-1 rounded-[10px] font-light' />
                                    <div className='w-full border ml-2 rounded-[10px] px-1 border-[#1C658C] text-[0.8rem]'>
                                        <FileInput
                                            className='w-full truncate'
                                            placeholder="อัพโหลดภาพ Qr Code"
                                            size='md'
                                            variant="unstyled"
                                            accept="image/png,image/jpeg" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center my-1'>
                                <Image src='/images/svg/mail.svg' width={34} height={34} />
                                <input type="text" placeholder='กรอกอีเมลของท่าน'
                                    className='w-full border p-1 rounded-[10px] mx-2 font-light' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='w-full h-[60%] border my-1 rounded-[10px] p-1'>
                                <textarea type="text" placeholder='ช่องทางติดต่ออื่นๆ' className='w-full h-full focus:outline-none resize-none font-light' />
                            </div>
                            <div className=' flex justify-end mt-3'>
                                <div className='h-full border rounded-[10px] text-[#FF3D3D] border-[#FF3D3D] mx-3 '>
                                    <button className='py-1 px-3 bg-white'>ยกเลิก</button>
                                </div>
                                <div className='h-full border rounded-[10px] text-[#1C658C] border-[#1C658C]'>
                                    <button className='py-1 px-3 bg-white'>ยืนยัน</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Editprofile;
{/* <div className='w-full flex justify-end item-center'>
<div className='h-full border rounded-[10px] text-[#FF3D3D] border-[#FF3D3D] mx-3 '>
    <button className='py-1 px-3 bg-white'>ยกเลิก</button>
</div>
<div className='h-full border rounded-[10px] text-[#1C658C] border-[#1C658C]'>
    <button className='py-1 px-3 bg-white'>ยืนยัน</button>
</div>
</div> */}