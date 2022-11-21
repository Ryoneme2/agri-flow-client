import React from 'react'
import { Modal, Button } from '@mantine/core'

export default function Dragfile({
    visible,
    closeHandler,
    cancelImage,
    getRootProps,
    getInputProps,
    isDragActive,
    image,
}) {
    return (
        <div className=''>
            <Modal
                withCloseButton
                aria-labelledby='modal-title'
                opened={visible}
                width='600px'
                onClose={closeHandler}
            >
            
                <div className='flex justify-center items-center'>
                    <div className='max-w-lg w-full'>
                        <div className='w-full max-h-sm bg-gray-50 border-dashed p-3 border-[1.5px] border-gray-300 rounded-lg'>
                            <div
                                className='flex justify-center items-center w-full h-full'
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p className='text-gray-600 font-semibold'>
                                        Drop the files here ...
                                    </p>
                                ) : !image ? (
                                    <p className='text-gray-600 font-semibold'>
                                        Drop file here / Click to select
                                    </p>
                                ) : (
                                    <img
                                        className='w-full h-full rounded shadow'
                                        src={image}
                                        alt='preview'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full  flex justify-end mt-2'>
                    {!image ? (
                        ' '
                    ) : (
                        <Button
                            className='text-white bg-red-400 hover:bg-red-500 mx-1'
                            auto
                            flat
                            onClick={cancelImage}
                        >
                            Remove
                        </Button>
                    )}
                    <Button
                        className='bg-[#2279a8] hover:bg-[#1C658C]'
                        auto
                        onClick={closeHandler}
                    >
                        Accept
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
